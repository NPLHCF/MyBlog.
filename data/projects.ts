// 🛡️ 本文件由控制台自动生成，请勿手动修改

export type Project = {
  id: string;
  name: string;
  description: string;
  icon: string;
  githubUrl: string;
  tags: string[];
  cover?: string;
};

export const projectsData: Project[] = [
  {
    "id": "proj_mia_playwright",
    "name": "Mia Agent + Playwright 浏览器自动化",
    "githubUrl": "https://b23.tv/vmbpruj",
    "description": "基于 Mia Agent 框架集成 Playwright 浏览器自动化能力。实现 Agent 自主操控浏览器完成网页交互、页面数据采集与统计；将完整的浏览器执行流程记录并封装为可复用自定义 Skill，实现业务流程固化，支持后续重复调用，验证 Agent 通过工具完成网页自动化任务的能力。",
    "icon": "🎬",
    "tags": ["AI Agent", "Playwright", "Skill 工具", "浏览器自动化"],
    "cover": "/project-covers/cover_02.jpg"
  },
  {
    "id": "proj_dsh_ppt",
    "name": "DeepSeek Harness‑PPT‑Skill 智能 PPT 生成 Agent",
    "githubUrl": "https://b23.tv/cUPtYHm",
    "description": "基于 DeepSeek‑Harness（DSH）Agent 框架，安装 PPT 生成 Skill 技能，实现 Agent 自动生成演示文稿。完成 Skill 的加载与调用调试，通过 Agent 任务调度调用 Skill 工具，仅通过自然语言指令即可完成 PPT 内容生成，验证自定义 Skill 扩展大模型 Agent 能力的实践。",
    "icon": "📊",
    "tags": ["AI Agent", "DeepSeek Harness", "PPT Skill", "大模型应用"],
    "cover": "/project-covers/cover_01.jpg"
  },
  {
    "id": "proj_jianying",
    "name": "剪映视频剪辑 Skill（UE 游戏视频解说自动后期）",
    "githubUrl": "https://b23.tv/zL0W3dX",
    "description": "基于 DeepSeek‑Harness (DSH) Agent 框架开发剪映剪辑 Skill。以本人使用 Unreal Engine 制作的游戏素材为输入，由 Agent 自动撰写游戏解说脚本，调用 Skill 一键生成并同步剪映工程；自动完成配音合成、字幕添加等后期工作。生成的工程文件可直接在剪映中继续调整字幕、音频、画面，最后导出成片。本项目验证了大模型 Agent 通过自定义多媒体 Skill，自动化完成游戏视频剪辑全流程的能力。",
    "icon": "🎮",
    "tags": ["AI Agent", "剪映剪辑", "UE5", "多媒体 Skill", "视频自动化"],
    "cover": "/project-covers/cover_03.jpg"
  }
];
