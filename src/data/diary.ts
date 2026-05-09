import fs from 'fs';
import path from 'path';

// 添加配置类型和对象
export interface DiaryConfig {
    enable: boolean;
    utcTimeZone: number;
    displayInHome: boolean;
    comment: boolean;
}

export const diaryConfig: DiaryConfig = {
    enable: true,
    utcTimeZone: 8,
    displayInHome: true,
    comment: true,
};

// 日记数据结构
export interface DiaryItem {
    id: number;
    content: string;
    date: string;
    title: string;
    images?: string[];
    location?: string;
    mood?: string;
    tags?: string[];
}

// MD文件目录路径
const DIARIES_DIR = path.join(process.cwd(), 'src', 'content', 'diaries');

// 确保目录存在
if (!fs.existsSync(DIARIES_DIR)) {
    fs.mkdirSync(DIARIES_DIR, { recursive: true });
}

// 解析MD文件的前置元数据（使用JSON格式替代YAML）
function parseFrontmatter(content: string): { frontmatter: any; body: string } {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
        return { frontmatter: {}, body: content };
    }
    
    try {
        // 尝试解析为JSON
        const frontmatterText = match[1].trim();
        let frontmatter = {};
        
        if (frontmatterText.startsWith('{') && frontmatterText.endsWith('}')) {
            try {
                frontmatter = JSON.parse(frontmatterText);
            } catch (e) {
                // JSON解析失败，使用简单的键值对解析
                frontmatter = parseSimpleKeyValue(frontmatterText);
            }
        } else {
            // 使用简单的键值对解析
            frontmatter = parseSimpleKeyValue(frontmatterText);
        }
        
        const body = match[2];
        return { frontmatter, body };
    } catch (error) {
        console.error('Error parsing frontmatter:', error);
        return { frontmatter: {}, body: content };
    }
}

// 简单的键值对解析器
function parseSimpleKeyValue(text: string): any {
    const result: any = {};
    const lines = text.split('\n');
    
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        
        // 处理 key: value 格式
        const colonMatch = trimmed.match(/^([^:]+):\s*(.+)$/);
        if (colonMatch) {
            const key = colonMatch[1].trim();
            let value = colonMatch[2].trim();
            
            // 移除可能的引号
            if ((value.startsWith('"') && value.endsWith('"')) || 
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            
            // 处理数组格式 [item1, item2, item3]
           if (value.startsWith('[') && value.endsWith(']')) {
    try {
        value = JSON.parse(value);
    } catch (e) {
        // 如果JSON解析失败，按字符串处理，并将其转换回字符串格式
        value = value.slice(1, -1).split(',').map((item: string) => item.trim().replace(/^['"]|['"]$/g, '')).join(', ');
    }
}

result[key] = value;

        }
    }
    
    return result;
}

// 从MD文件读取日记数据
function loadDiaryFromMD(filePath: string): DiaryItem | null {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const { frontmatter, body } = parseFrontmatter(content);
        
        // 从文件名提取ID
        const fileName = path.basename(filePath, '.md');
        const idMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
        if (!idMatch) {
            console.error(`Invalid filename format: ${fileName}`);
            return null;
        }
        
        const dateStr = idMatch[1];
        const title = frontmatter.title || idMatch[2];
        const date = frontmatter.date || `${dateStr}T00:00:00Z`;
        
        return {
            id: Date.now(), // 使用时间戳作为ID
            title,
            content: body.trim(),
            date,
            images: frontmatter.images || [],
            location: frontmatter.location,
            mood: frontmatter.mood,
            tags: frontmatter.tags || [],
        };
    } catch (error) {
        console.error(`Error loading diary from ${filePath}:`, error);
        return null;
    }
}

// 加载所有MD文件日记
export function loadAllDiaries(): DiaryItem[] {
    const diaries: DiaryItem[] = [];
    
    try {
        const files = fs.readdirSync(DIARIES_DIR);
        const mdFiles = files.filter(file => file.endsWith('.md'));
        
        for (const file of mdFiles) {
            const filePath = path.join(DIARIES_DIR, file);
            const diary = loadDiaryFromMD(filePath);
            if (diary) {
                diaries.push(diary);
            }
        }
    } catch (error) {
        console.error('Error loading diaries:', error);
    }
    
    return diaries;
}

// 获取日记统计数据
export const getDiaryStats = () => {
    const diaries = loadAllDiaries();
    const total = diaries.length;
    const hasImages = diaries.filter(
        (item) => item.images && item.images.length > 0,
    ).length;
    const hasLocation = diaries.filter((item) => item.location).length;
    const hasMood = diaries.filter((item) => item.mood).length;
    return {
        total,
        hasImages,
        hasLocation,
        hasMood,
        imagePercentage: total > 0 ? Math.round((hasImages / total) * 100) : 0,
        locationPercentage: total > 0 ? Math.round((hasLocation / total) * 100) : 0,
        moodPercentage: total > 0 ? Math.round((hasMood / total) * 100) : 0,
    };
};

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
    const diaries = loadAllDiaries();
    const sortedData = diaries.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    if (limit && limit > 0) {
        return sortedData.slice(0, limit);
    }
    return sortedData;
};

// 获取最新的日记
export const getLatestDiary = () => {
    const list = getDiaryList(1);
    return list.length > 0 ? list[0] : null;
};

// 根据ID获取日记
export const getDiaryById = (id: number) => {
    const diaries = loadAllDiaries();
    return diaries.find((item) => item.id === id);
};

// 获取包含图片的日记
export const getDiaryWithImages = () => {
    const diaries = loadAllDiaries();
    return diaries.filter((item) => item.images && item.images.length > 0);
};

// 根据标签筛选日记
export const getDiaryByTag = (tag: string) => {
    const diaries = loadAllDiaries();
    return diaries
        .filter((item) => item.tags?.includes(tag))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 获取所有标签
export const getAllTags = () => {
    const diaries = loadAllDiaries();
    const tags = new Set<string>();
    
    diaries.forEach((item) => {
        if (item.tags) {
            item.tags.forEach((tag) => tags.add(tag));
        }
    });
    return Array.from(tags).sort();
};

// 兼容性：保留原有的默认导出
// export default loadAllDiaries();