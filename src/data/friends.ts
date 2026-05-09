// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "雨祁的link",
		imgurl: "https://tencentcdna.production.link3.cc/profile_images/1716876687233",
		desc: "雨祁的个人link",
		siteurl: "https://link3.cc/qtya",
		tags: ["Link"],
	},
	{
		id: 2,
		title: "阿豪博客小站",
		imgurl: "https://chivehao.ikaros.run/assets/images/avatar.webp",
		desc: "愿此行，终抵达群星",
		siteurl: "https://chivehao.ikaros.run/",
		tags: ["friends"],
	},
	{
		id: 3,
		title: "Wan's Blog",
		imgurl: "https://blog.wanfory.top/assets/images/avatar.jpg",
		desc: "Love is my oath",
		siteurl: "https://blog.wanfory.top",
		tags: ["friends"],
	},
	{
		id: 4,
		title: "拾三月",
		imgurl: "https://img.nw177.cn/blog/100.assets/avatar.webp",
		desc: "终不似，少年游",
		siteurl: "https://www.nw177.cn",
		tags: ["friends"],
	},
	{
		id: 5,
		title: "yuyu的博客",
		imgurl: "https://i.postimg.cc/0Q9Z55Qy/yuyu-webp.jpg",
		desc: "放福利了，双女主",
		siteurl: "https://yuyu09.com/",
		tags: ["friends"],
	},
	{
		id: 6,
		title: "AFOP",
		imgurl: "https://scarefree.cn/img/afop.png",
		desc: "偏居一隅-养老休闲整合包",
		siteurl: "https://scarefree.cn/p9/",
		tags: ["Minecraft"],
	},
	{
		id: 7,
		title: "XhaniのBlog",
		imgurl: "https://blog.zako.wf/assets/home/home.png",
		desc: "你是一只杂鱼,还是大baka!",
		siteurl: "https://blog.zako.wf/",
		tags: ["friends"],
	},
	{
		id: 8,
		title: "THW's Blog",
		imgurl: "https://image.tianhw.top/avatar.webp",
		desc: "前途似海，来日方长",
		siteurl: "https://blog.tianhw.top/",
		tags: ["friends"],
	},
	{
		id: 9,
		title: "1zyq1's Blog",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=2289308183&s=640",
		desc: "Protect What You Love./爱你所爱！",
		siteurl: "https://www.1zyq1.com/",
		tags: ["friends"],
	},
	{
		id: 10,
		title: "绘夢の小站",
		imgurl: "https://blog.emumu.xyz/_astro/avatar.Cmb-Gwdw_Z27NOcD.webp",
		desc: "我与我周旋久，宁作我。",
		siteurl: "https://blog.emumu.xyz/",
		tags: ["friends"],
	},
	{
		id: 11,
		title: "北に向かう",
		imgurl: "https://i.ibb.co/SwVb53mQ/avatar.webp",
		desc: "孩儿立志出乡关，学不成名誓不还。",
		siteurl: "https://ignorant.top/",
		tags: ["friends"],
	},
	{
		id: 12,
		title: "灵梦的小站",
		imgurl: "https://lm520.cc/_astro/celia-BuSvhKlq_2tu3jR.webp",
		desc: "I like the world, because i want live",
		siteurl: "https://lm520.cc/",
		tags: ["friends"],
	},
	{
		id: 13,
		title: "杪夏山不语",
		imgurl: "https://blog.mxsby.top/_astro/avatar.DodcwRNI_Z1iLucw.webp",
		desc: "苔花如米小，也学牡丹开。",
		siteurl: "https://blog.mxsby.top/",
		tags: ["friends"],
	},
	{
		id: 14,
		title: "柒喵の小屋",
		imgurl: "https://www.qimiaoneko.com/_astro/home.Djbr-uEA_Zv5fVO.webp",
		desc: "Ciallo～（∠·ω ＜）⌒★。",
		siteurl: "https://www.qimiaoneko.com/",
		tags: ["friends"],
	},
	{
		id: 15,
		title: "柊镜",
		imgurl: "https://www.kagamistarlight.top/_astro/avatar.Blu5ijdD_2wcflA.webp",
		desc: "愛が足りなかっただね。",
		siteurl: "https://www.kagamistarlight.top/",
		tags: ["friends"],
	},
	{
		id: 16,
		title: "mikus",
		imgurl: "https://mikus.ink/_astro/miku.Dq7hXSsT_ZuHYtf.webp",
		desc: "你好，世界。",
		siteurl: "https://mikus.ink/",
		tags: ["friends"],
	},
	{
		id: 17,
		title: "南wind",
		imgurl: "https://pic1.imgdb.cn/item/69c905abb1655e1da0faef76.jpg",
		desc: "晴时晒梦，雨时读云。",
		siteurl: "https://blog.emumu.xyz/",
		tags: ["friends"],
	},
	{
		id: 10,
		title: "UpXuu's Blog",
		imgurl: "https://upxuu.com/images/20260214145619.jpg",
		desc: "逐光而上。",
		siteurl: "https://upxuu.com/",
		tags: ["friends"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
