// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	startDate: string;
	logoUrl?: string;
	lj1?: string;
	lj2?: string;
}

export const timelineData: TimelineItem[] = [
	{
		id: "les-1",
		title: "帮我拍拍</br>七小皇叔原著</br>于舟|向挽</br>陶典|龟娘",
		description: "于舟的眼里都是向挽(LW).",
		startDate: "2025-06-05",
		logoUrl: "https://i.postimg.cc/28VCgCXL/帮我拍拍.png",
		lj1: "https://www.alipan.com/s/RtHo9dqmVkb",
		lj2: "https://www.123865.com/s/iMSmjv-3MLo?pwd=0723#",
	},
	{
		id: "les-2",
		title: "晚潮</br>七小皇叔原著</br>向挽|晁新</br>龟娘|穆雪婷",
		description: "xxxxxxxxx(YW).",
		startDate: "2025-06-05",
		logoUrl: "https://i.postimg.cc/mZM6pJTY/wc.jpg",
		lj1: "https://www.alipan.com/s/Cjoeiw4i1Q8",
		lj2: "https://www.123865.com/s/iMSmjv-hMLo?pwd=0723#",
	},

	{
		id: "les-3",
		title: "白月光omega总想拥有我</br>鸽子不会咕咕咕原著</br>季潇|魏轻语</br>陶典|龟娘",
		description: "我明白了，魏轻语一吃醋就不理人(LW).",
		startDate: "2025-08-05",
		logoUrl: "https://i.postimg.cc/sDPWrzFR/月光3.png",
		lj1: "https://www.alipan.com/s/PTDuBAdtavr",
		lj2: "https://www.123865.com/s/iMSmjv-0hLo?pwd=0723#",
	},
	{
		id: "les-4",
		title: "孤掷温柔</br>闵然原著</br>陆子筝|江怀溪</br>陶典|子楚",
		description: "你，如漫长黑夜里的一丝烛光，微弱却足以令我孤注一掷(YW).",
		startDate: "2025-10-16",
		logoUrl: "https://i.postimg.cc/KvQpTTVt/gu-zhi-wen-rou.jpg",
		lj1: "https://www.alipan.com/s/vmTn2BsvdsT",
		lj2: "hhttps://www.123865.com/s/iMSmjv-KhLo?pwd=0723",
	},

	{
		id: "les-5",
		title: "今日离港</br>鱼宰原著</br>陆诗邈|薛桐</br>陶典|风镜",
		description: "满身的荆棘,越长越多,想畀佢搞到乱晒，污糟晒(YW).",
		startDate: "2026-01-20",
		logoUrl: "https://i.postimg.cc/TPdsJdPS/jin-ri-li-gang.jpg",
		lj1: "https://www.alipan.com/s/x5vrsft8hCi",
		lj2: "https://www.123865.com/s/iMSmjv-nQLo?pwd=0723#",
	},

	{
		id: "les-6",
		title: "飘飘</br>七小皇叔原著</br>陈飘飘|陶浸</br>子楚|李蝉妃",
		description: "你会让我失恋吗?我才不会让你哭。(YW).",
		startDate: "2026-02-16",
		logoUrl: "https://i.postimg.cc/d3Mc3TbY/pp.jpg",
		lj1: "https://www.alipan.com/s/aTg9nLQnFVs",
		lj2: "https://www.123865.com/s/iMSmjv-kBLo?pwd=0723#",
	},
    
	{
		id: "les-7",
		title: "我的影后绯闻cp掉马了</br>辞旧迎卿原著</br>阮惊鸿|温瑾</br>陶典|杜冥鸦",
		description: "喜欢是放肆，爱是克制。她脸红了，她好爱她！(YW).",
		startDate: "2026-01-20",
		logoUrl: "https://i.postimg.cc/kGrPGtkZ/yhcp1.png",
		lj1: "https://www.alipan.com/s/9Rn1TcBt2eW",
		lj2: "https://www.123865.com/s/iMSmjv-oBLo?pwd=0723#",
	},
	{
		id: "les-8",
		title: "她的山她的海</br>扶华原著</br>池唐|游余</br>陶典|穆雪婷",
		description: "她为她筑起山峦般的依靠，她予她涌动海浪似的柔情(YW).",
		startDate: "2026-02-23",
		logoUrl: "https://i.postimg.cc/RVDpbBjc/tsth.webp",
		lj1: "https://www.alipan.com/s/8AMug2FJhed",
		lj2: "https://www.123865.com/s/iMSmjv-ZTLo?",
	},
	{
		id: "les-9",
		title: "动漫啦</br>泡渣</br>漫画小屋",
		description: "两个免费的漫画小屋.",
		startDate: "2026-02-01",
		logoUrl: "https://i.postimg.cc/fTNtWbTM/les1.webp",
		lj1: "https://www.photo20.cn/tags/43.html",
		lj2: "https://www.dongman.la/manhua/class/38 ",
	},

	{
		id: "les-10",
		title: "POPO</br>文创小屋",
		description: "免费的小说乐园.",
		startDate: "2026-02-01",
		logoUrl: "https://i.postimg.cc/RVB6C0V4/les2.webp",
		lj1: "https://www.aqxsw666.com/search.asp?word=gl",
		lj2: "https://www.popobl.com/sort/6/1.html ",
	},

    {
		id: "les-11",
		title: "LES GAME/LES ZIYUAN</br>BHGAME/ZIYUAN",
		description: "懂得都懂(游戏/资源).",
		startDate: "2026-02-05",
		logoUrl: "https://i.postimg.cc/TPL6KVmP/les3.webp",
		lj1: "https://pan.xunlei.com/s/VO9NIcBdoaYEBLa0rtM51aIrA1",
		lj2: "https://my.feishu.cn/share/base/query/shrcnalxWt6VFN480RzFVTs6ipb",
	}, 

	{
		id: "les-12",
		title: "LES ANIME/LES NOVEL",
		description: "全体保持嘴角上扬(动漫/小说).",
		startDate: "2026-04-02",
		logoUrl: "https://i.postimg.cc/ZnG3FJL7/les78.webp",
		lj1: "https://www.123865.com/s/iMSmjv-HSLo?pwd=0723#",
		lj2: "https://www.123865.com/s/iMSmjv-ASLo?pwd=0723#",
	}, 
];

// 获取所有时间线数据（按时间倒序）
export const getTimelineByType = () => {
	return timelineData.sort(
		(a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
	);
};
