// siteConfig.ts - 你的全站"控制中心"

export const siteConfig = {
  title: "拿坡里黄炒饭",
  faviconUrl: "/me.jpg",
  authorName: "Lin",
  bio: "四川美术学院 · 游戏交互|在AI Agent开发、Skill工具编排与大模型应用穿梭的普通人。近期正埋头于Agent操作浏览器，Playwright实现网页操作和数据统计来提高工作效率。",

  navTitle: "NPLH",
  navSuffix: "_",
  navAfter: "CF",

  avatarUrl: "/me.jpg",

  useGradient: false,
  themeColors: ["#a18cd1", "#fbc2eb", "#a1c4fd", "#c2e9fb"],
  bgImages: ["https://bu.dusays.com/2026/03/24/69c1e38b4c370.jpg", "https://bu.dusays.com/2026/03/24/69c26fe4acdb5.jpg", "https://bu.dusays.com/2026/03/24/69c26fe4d9486.jpg"],

  defaultPostCover: "https://bu.dusays.com/2026/03/24/69c1e38b346cb.jpg",
  photoWallImage: "https://bu.dusays.com/2026/03/24/69c1e38b4c370.jpg",
  
  cloudMusicIds: ["2679758644", "3361076230", "1859390262"],
  musicCovers: {
    "2679758644": "https://p2.music.126.net/7nUQsJEuOeh-3H2rO_q5Xg==/2679758644.jpg?param=300y300",
    "3361076230": "https://p2.music.126.net/3HnFK-AXkPyN7s7qJxJqLA==/109951166360868180.jpg?param=300y300",
    "1859390262": "https://p2.music.126.net/3HnFK-AXkPyN7s7qJxJqLA==/109951166360868180.jpg?param=300y300",
  },
  musicThemes: [
    { name: "紫蓝星河", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { name: "青梦烟雨", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { name: "暮色晚霞", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
    { name: "极光幻境", gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
  ],
  
  social: {
    github: "https://github.com/NPLHCF",
    gitee: "https://github.com/NPLHCF",
    google: "",
    email: "3319406873@qq.com",
    qq: "3319406873",
    wechat: "15223813246",
  },
  counts: { photos: 128 },
  chatterTitle: "云端杂谈",
  chatterDescription: "代码、学术、提瓦特与泰拉大陆的碎片记录",

  danmakuList: ["吃了吗？睡了吗？饿了吗？", "吾日三省吾身...", "睡大觉中...", "今天也是和AI斗智斗勇的一天", "又开始摸鱼了吗？", "没事想想作业进度......", "UE5今天崩溃了吗........", "复盘调试Skill中！", "今天也是泡在Agent里的一天", "前方高能反应！", "Graph Neural Networks 炼丹中...", "BUG 修复进度 99%", "今天背单词了吗？", "写算法中"],
  gitalkConfig: { clientID: "", clientSecret: "", repo: "", owner: "NPLHCF", admin: [""] },
  buildDate: "2026-09-01T11:53:00",
  footerBadges: [{"name": "Next.js 15", "color": "text-sky-500", "svg": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/>"}],
  icpConfig: { name: "萌ICP备 20260901号", link: "https://icp.gov.moe/?keyword=20260901" },
  geminiConfig: {
    modelId: "gemini-2.5-flash-lite",
    systemPrompt: "你是林昭君的AI助手",
    maxOutputTokens: 150,
    temperature: 0.85,
  },
  friendLinkApplyFormat: "名称：NPLH_CF\n简介：今天学习了吗\n链接：http://localhost:3000\n头像：https://bu.dusays.com/2026/03/24/69c1e38ac1846.jpg",
  enableLevelSystem: false,
};
