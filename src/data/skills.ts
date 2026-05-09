// data/skills.ts

export interface Game {
    id: string;
    name: string;
    playTime: string;
    imageUrl: string;
    description: string;
    url: string;
    tags: string[]; // 新增：游戏标签
    rating: number; // 新增：星级评分
    company: string; // 新增：游戏公司
    releaseDate: string; // 新增：公测时间
}

export interface CarouselImage {
    id: number;
    alt: string;
    placeholder: string;
}

// 轮播图图片数据
export const carouselImages: CarouselImage[] = [
    { id: 1, alt: "崩坏三", placeholder: "https://i.postimg.cc/tg8TTK1g/崩坏三1.jpg" },
    { id: 2, alt: "原神", placeholder: "https://i.postimg.cc/xjRzs7rk/原神1.jpg" },
    { id: 3, alt: "绝区零", placeholder: "https://i.postimg.cc/YSHDH9R2/绝区零1.jpg" },
    { id: 4, alt: "星布谷地", placeholder: "https://i.postimg.cc/zDKmncb4/xbgd2.jpg" },
    { id: 5, alt: "Minecraft", placeholder: "https://i.postimg.cc/wTgQM3hT/Minecraft2.jpg" }
];

// 游戏数据（更新字段）
export const gameData: Game[] = [
    {
        id: "honkai-3",
        name: "崩坏三",
        playTime: "2025.06---至今",
        imageUrl: "https://i.postimg.cc/3w4G6Y7t/bhs.jpg",
        description: "为世界所有美好而战",
        url: "https://bh3.mihoyo.com",
        tags: ["动作", "角色扮演", "女武神"],
        rating: 5,
        company: "米哈游",
        releaseDate: "2016-10-14"
    },
    {
        id: "genshin-impact",
        name: "原神",
        playTime: "2021.06---至今",
        imageUrl: "https://i.postimg.cc/g2PBGzNM/ys.jpg",
        description: "我们终将重逢",
        url: "https://ys.mihoyo.com",
        tags: ["开放世界", "角色扮演", "冒险"],
        rating: 5,
        company: "米哈游",
        releaseDate: "2020-09-28"
    },
    {
        id: "zenless-zone-zero",
        name: "绝区零",
        playTime: "2024.07---至今",
        imageUrl: "https://i.postimg.cc/jjnpjgyZ/zzz8.webp",
        description: "新艾利都永不落幕",
        url: "https://zzz.mihoyo.com",
        tags: ["动作", "末日生存", "空洞奇遇"],
        rating: 5,
        company: "米哈游",
        releaseDate: "2024-07-04"
    },
    {
        id: "starry-farm",
        name: "星布谷地",
        playTime: "202x.0x---XXX",
        imageUrl: "https://i.postimg.cc/TwqHyZhG/xbgd.jpg",
        description: "XXXXXXXXX",
        url: "https://planet.mihoyo.com/home",
        tags: ["模拟经营", "休闲", "农场"],
        rating: 5,
        company: "米哈游",
        releaseDate: "202x-xx"
    },
    {
        id: "minecraft",
        name: "Minecraft",
        playTime: "2016.06---至今",
        imageUrl: "https://i.postimg.cc/gkVttfKr/Minecraft.avif",
        description: "MC不灭，方块人不悔",
        url: "https://www.minecraft.net",
        tags: ["沙盒", "创造", "生存"],
        rating: 5,
        company: "Mojang",
        releaseDate: "2011-11-18"
    }
];

// 感悟文本
export const reflectionText = "生命绚烂，别被黑暗压垮";