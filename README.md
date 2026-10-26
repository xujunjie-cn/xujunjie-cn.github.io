# 个人展示页（Vite + Vue 3）

一个静态个人作品集 / 简历展示页，部署在 GitHub Pages，别人打开链接即可直接看到。

内容板块：首页（个人简介 + 关键数据）、项目（4 个）、经历（工作 + 教育）、技术栈。

## 在线访问

部署后访问：`https://xujunjie-cn.github.io/`

## 目录结构

```
E:\introduction/
├── index.html
├── vite.config.js
├── src/
│   ├── main.js              # 入口 + 滚动入场指令
│   ├── App.vue              # 整体布局、导航、主题
│   ├── style.css            # 主题变量 + 全局样式
│   ├── data/site.js        # ★ 唯一内容源，改这里就行
│   └── components/         # 各区块组件
├── public/                 # 静态资源（头像、图片、favicon）
└── .github/workflows/      # 自动部署
```

## 如何改内容（最重要）

打开 `src/data/site.js`，修改里面的字段即可：

- `profile`：姓名、英文名、一句话定位、徽章、城市、头像、简介、关键数据（facts）、社交链接
- `projects`：项目卡片（时间、标题、所属层/系统、角色、描述、亮点列表、技术标签）
- `experience`：经历时间线（时间、角色、机构、描述），第一条会自动标记「当前」
- `skills`：技术栈分组（分组名 + 条目数组）

> 头像 / 项目截图放在 `public/` 目录下，例如 `public/avatar.jpg`，
> 然后在 `site.js` 里写 `avatar: '/avatar.jpg'`。

**内容口径（注意）**：工作年限统一写「1 年多」；不写客户全名；
不写提交次数 / 代码行数等过程指标；ASRS 链路注明「后续因分工调整转交维护」。
手机号等敏感联系方式默认不放在公开页面上，需要时再单独加。

## 如何部署到 GitHub Pages

### 第一步：准备仓库
1. 注册 GitHub 账号（已有可跳过）。
2. **新建一个仓库，仓库名必须是 `xujunjie-cn.github.io`**（这是 GitHub Pages 的根域名仓库，必须和 GitHub 用户名完全一致）。
3. 把本项目所有文件 push 到这个仓库的 `main` 分支。
   - 注意：这里的 `xujunjie-cn` 是 GitHub 账号名；本地 `git config user.name = xujunjie` 只是 commit 作者名，不影响 Pages。

### 第二步：开启 Pages
1. 仓库页面 → **Settings → Pages**。
2. Source 选 **GitHub Actions**。
3. 回到仓库，把代码 push 到 `main`，Actions 会自动构建并发布。
4. 等 1~2 分钟，打开 `https://xujunjie-cn.github.io/` 即可。

> 以后只要改 `site.js` 并 push，页面就会自动更新，无需手动构建。

## 本地预览（可选）

```bash
npm install
npm run dev        # 本地开发，热更新
# 或
npm run build && npm run preview   # 构建后本地预览生产版本
```

## 常见问题

- **页面 404 / 样式丢失**：如果用的是普通仓库（非 `<用户名>.github.io`），
  需要把 `vite.config.js` 里的 `base` 改成 `/<仓库名>/`。
- **主题不记忆**：主题选择存在浏览器 localStorage，刷新后保留。
