// 🛡️ 本文件由 XingHuiSama 控制台自动生成，请勿手动修改
export interface Photo { url: string; caption?: string; }
export interface Album { id: string; title: string; description: string; cover: string; date: string; photos: Photo[]; }

export const albums: Album[] = [
  {
    "id": "game-render-2024",
    "title": "游戏渲染图",
    "description": "游戏技术应用与表现渲染作品",
    "cover": "/photos/cover.png",
    "date": "2024.09",
    "photos": [
      {
        "url": "/photos/render_01.png",
        "caption": "场景渲染0"
      },
      {
        "url": "/photos/scene_01.jpeg",
        "caption": "场景渲染 1"
      },
      {
        "url": "/photos/scene_02.jpeg",
        "caption": "场景渲染 2"
      },
      {
        "url": "/photos/scene_04.jpeg",
        "caption": "场景渲染 4"
      },
      {
        "url": "/photos/scene_05.jpg",
        "caption": "场景渲染 5"
      },
      {
        "url": "/photos/scene_06.jpeg",
        "caption": "场景渲染 6"
      }
    ]
  },
  {
    "id": "history-tour",
    "title": "唐宋历史巡游",
    "description": "寻访千年前的长安与汴梁遗迹（测试用相册）",
    "cover": "https://bu.dusays.com/2026/03/24/69c24230a4efe.jpg",
    "date": "2025.10",
    "photos": [
      {
        "url": "https://bu.dusays.com/2026/03/24/69c24230a5ff8.jpg",
        "caption": "古都夕阳"
      }
    ]
  }
];