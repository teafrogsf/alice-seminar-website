**Disclaimer: 该文档绝大部分的内容由Cursor完成。**

# ALICE Seminar 网站

一个优雅的学术研讨会展示网站，基于 Astro 和 Tailwind CSS 构建。

## 关于 ALICE

**ALICE** = **A**I, **L**inguistics, **I**nformatics, **C**ognition & **E**mbodiment

ALICE Seminar 是一个面向计算机科学及交叉学科的学术研讨会系列，旨在搭建本科生、研究生与优秀研究者之间的交流桥梁。

## 项目特点

- 🎨 优雅的极简设计风格
- 📱 完全响应式布局
- ⚡ 基于 Astro 的静态站点生成，性能优异
- 📝 使用 YAML 配置文件管理内容
- 🎯 零 JavaScript 默认加载，SEO 友好

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- TypeScript - 类型安全
- YAML - 配置文件格式

## 项目结构

```
alice-seminar-website/
├── src/
│   ├── pages/              # 页面文件
│   │   ├── index.astro     # 首页
│   │   ├── archive.astro   # 归档页面
│   │   └── about.astro     # 关于页面
│   ├── layouts/            # 布局组件
│   │   └── Layout.astro    # 基础布局
│   ├── components/         # UI 组件
│   │   ├── Hero.astro
│   │   ├── SeminarCard.astro
│   │   └── ArchiveItem.astro
│   └── styles/
│       └── global.css      # 全局样式
├── data/                   # 数据配置文件
│   ├── seminars.yaml       # Seminar 数据
│   └── contributors.yaml   # 贡献者数据
└── public/                 # 静态资源
    └── slides/            # Slides 文件
```

## 快速开始

### 前置要求

- Node.js 18+ 
- npm 或 pnpm

### 安装依赖

```bash
cd alice-seminar-website
npm install
```

### 启动开发服务器

```bash
npm run dev
```

然后在浏览器中打开 `http://localhost:4321`

### 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```

## 内容管理

### 添加新的 Seminar

1. 将讲者头像放入 `public/images/speakers/` 目录
2. 如有二维码，放入 `public/images/qr/` 目录
3. 编辑 `data/seminars.yaml`，在 `upcoming` 部分添加新条目：

```yaml
upcoming:
  - id: 1
    date: "2025-11-02"
    time: "21:00-22:00"
    timezone: "UTC+8"
    title: "演讲标题"
    subtitle: "副标题（可选）"
    speaker:
      name: "讲者姓名"
      avatar: "/images/speakers/avatar.png"
      bio: "讲者简介"
    meeting_id: "123-456-789"
    qr_code: "/images/qr/qr-code.png"
```

4. 重新构建并部署

### 归档 Seminar

1. 将 Seminar 从 `upcoming` 移动到 `archive` 部分
2. 上传 slides PDF 到 `public/slides/` 目录
3. 更新配置文件中的 slides 路径：

```yaml
archive:
  - id: 2
    date: "2025-10-19"
    title: "演讲标题"
    speaker: "讲者姓名"
    slides: "/slides/seminar-name.pdf"
```

4. 重新构建并部署

### 更新贡献者信息

编辑 `data/contributors.yaml` 文件：

```yaml
contributors:
  - name: "姓名"
    role: "角色"
    avatar: "/images/contributors/avatar.png"

contact:
  email: "your-email@example.com"
  description: "联系说明"
```

## 部署

### Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Astro 并配置构建设置
4. 点击部署即可

### Netlify

1. 将代码推送到 GitHub
2. 在 [Netlify](https://netlify.com) 导入项目
3. 设置构建命令：`npm run build`
4. 设置发布目录：`dist`
5. 点击部署

### GitHub Pages

1. 在 `astro.config.mjs` 中设置正确的 `site` 和 `base` 路径
2. 运行 `npm run build`
3. 将 `dist/` 目录内容推送到 GitHub Pages 分支

## 自定义样式

主要的颜色和字体配置在 `tailwind.config.mjs` 中：

```javascript
theme: {
  extend: {
    colors: {
      'alice-bg': '#F5F5F5',
      'alice-text': '#2C2C2C',
      'alice-gray': '#666666',
      'alice-light-gray': '#999999',
    },
    fontFamily: {
      'serif': ['Playfair Display', 'Noto Serif SC', 'serif'],
      'sans': ['Inter', 'Noto Sans SC', 'sans-serif'],
      'chinese': ['LXGW WenKai', 'Noto Serif SC', 'serif'],
    },
  },
}
```

## 开源协议

CC4.0 BY-NC-SA
