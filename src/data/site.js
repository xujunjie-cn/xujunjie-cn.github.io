// ============================================================
//  这是整个站点的【唯一内容源】。
//  以后想改名字、加项目、改简历、加文章，只改这个文件即可。
//  改完 push 到 GitHub，GitHub Actions 会自动重新构建部署。
// ============================================================

export const site = {
  // ---------- 个人简介 / 顶部 Hero ----------
  profile: {
    name: '你的名字',
    nameEn: 'Your Name',          // 英文名（可选，留空字符串 "" 则不显示）
    tagline: '一句话介绍自己，比如：全栈开发者 / 设计师 / 创作者',
    avatar: '',                   // 头像图片路径，例如 '/avatar.jpg'（放在 public/ 下）。留空则显示首字母圆形占位
    bio: '这里写一段更详细的自我介绍，两三句话即可。可以描述你的方向、擅长的事、正在做的事。',
    // 社交 / 联系链接，不需要的删掉整行即可
    socials: [
      { label: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
      { label: '邮箱', url: 'mailto:you@example.com', icon: 'email' },
      { label: '博客', url: 'https://yourblog.com', icon: 'link' },
    ],
  },

  // ---------- 项目作品集 ----------
  // 每个项目一张卡片。没有的图片字段留空字符串即可。
  projects: [
    {
      title: '项目名称一',
      desc: '一句话说明这个项目做了什么、解决了什么问题。',
      tags: ['Vue', 'Vite', 'TypeScript'],
      link: 'https://github.com/yourname/project1',
      image: '',                  // 例如 '/projects/p1.png'，放在 public/projects/ 下；留空则不显示图
    },
    {
      title: '项目名称二',
      desc: '再放一个代表你能力的项目，描述清楚亮点和你的角色。',
      tags: ['Node.js', 'PostgreSQL'],
      link: 'https://github.com/yourname/project2',
      image: '',
    },
  ],

  // ---------- 简历 / 经历时间线 ----------
  // 按时间倒序排列（最新的在最上面）
  experience: [
    {
      period: '2024 - 至今',
      role: '高级开发工程师',
      org: '某某公司',
      desc: '负责核心系统的设计与开发，主导了 XX 模块的重构，性能提升 40%。',
    },
    {
      period: '2021 - 2024',
      role: '前端开发工程师',
      org: '某某公司',
      desc: '参与多个 To C 项目的前端开发与性能优化，独立负责 XX 项目。',
    },
    {
      period: '2017 - 2021',
      role: '计算机科学与技术 学士',
      org: '某某大学',
      desc: '在校期间获得 XX 奖项，主导过 XX 开源项目。',
    },
  ],

  // ---------- 博客 / 文章列表 ----------
  // 这里只展示标题和摘要列表，点击跳转到外部链接（或你自己的博客系统）
  blog: [
    {
      title: '如何搭建一个个人展示页',
      date: '2026-09-15',
      summary: '从零到上线，记录用 Vite + Vue 搭建个人站点的完整流程。',
      url: 'https://yourblog.com/post-1',
    },
    {
      title: '我对前端性能优化的一些实践',
      date: '2026-08-02',
      summary: '分享几个在真实项目中落地且见效的优化手段。',
      url: 'https://yourblog.com/post-2',
    },
  ],
}
