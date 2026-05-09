// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "mizuki-blog",
		title: "Yuqi Blog",
		description:
			"欢迎来到雨祁的小窝",
		image: "",
		category: "web",
		techStack: ["Astro", "Mizuki", "Js", "Css"],
		status: "completed",
		sourceCode: "https://github.com/qitinyu/YuQi", // 更改为GitHub链接
		visitUrl: "https://yqamm.eu.cc/", // 添加前往项目链接
		startDate: "2025-11-01",
		endDate: "2025-12-01",
		featured: true,
		tags: ["Blog", "Theme", "Open Source"],
	},
	{
		id: "portfolio-website",
		title: "Hutao sfq",
		description:
			"简单的静态博客网站，使用github pages部署。",
		image: "",
		category: "web",
		techStack: ["HTTML", "CSS", "JavaScript"],
		status: "completed",
		sourceCode: "https://github.com/qitinyu/hutao-sfq",
		visitUrl: "https://hutao-sfq.netlify.app/", //                                                                                                                                                             ", // 添加前往项目链接
		startDate: "2025-7-2",
		endDate: "2025-12-01",
		featured: true,
		tags: ["Portfolio", "React", "Animation"],
	},

	{
		id: "portfolio-website",
		title: "Hutao-blog",
		description:
			"纯静态的个人网站，使用netlify部署。",
		image: "",
		category: "web",
		techStack: ["HTTML", "CSS", "JavaScript"],
		status: "in-progress",
		sourceCode: "https://github.com/qitinyu/hutao-blog",
		visitUrl: "https://hutaoblog.netlify.app/", // 添加前往项目链接
		startDate: "2025-09-01",
		endDate: "2025-10-01",
		featured: true,
		tags: ["Hutao", "Web", "React", ],
	},
	
	{
		id: "portfolio-website",
		title: "胡桃小屋O",
		description:
			"纯静态的个人网站，使用GitHub Pages部署。",
		image: "",
		category: "web",
		techStack: ["HTTML", "CSS", "JavaScript"],
		status: "planned",
		sourceCode: " https://qitinyu.github.io/hutaolove/",
		visitUrl: " https://qitinyu.github.io/hutaolove/", // 添加前往项目链接
		startDate: "2025-09-01",
		endDate: "2025-10-01",
		featured: true,
		tags: ["Hutao", "Web", "React", ],
	},
	{
		id: "portfolio-website",
		title: "登录界面",
		description:
			"简单的登录界面，使用github pages部署。",
		image: "",
		category: "web",
		techStack: ["HTTML", "CSS", "JavaScript"],
		status: "completed",
		sourceCode: "https://qitinyu.github.io/Adenlu/denlu.html",
		visitUrl: "https://qitinyu.github.io/Adenlu/denlu.html", // 添加前往项目链接
		startDate: "2025-06-05",
		endDate: "2025-6-16",
		featured: true,
		tags: ["denlu", "github", "web"],
	},
	{
		id: "task-manager-app",
		title: "雨祁导航",
		description:
			"小白写的导航网页，免费好用。",
		image: "",
		category: "web",
		techStack: ["HTML", "CSS", "JavaScript"],
		status: "in-progress",
		sourceCode: "https://qitinyu.github.io/YQ-nav/",
		visitUrl: "https://qitinyu.github.io/YQ-nav/",
		startDate: "2026-02-19",
		endDate: "2025-6-16",
		featured: true,
		tags: ["daohang"],
	},
	{
		id: "data-visualization-tool",
		title: "提瓦特",
		description:
			"提瓦特七国剪影.",
		image: "",
		category: "web",
		techStack: ["HTML", "CSS", "JavaScript"],
		status: "in-progress",
		liveDemo: "https://qitinyu.github.io/yq-twt/",
		visitUrl: "https://github.com/qitinyu/yq-twt", // 添加前往项目链接
		startDate: "2026-03-08",
		endDate: "2026-03-09",
		featured: true,
		tags: ["web", "genshin"],
	}
]
// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
