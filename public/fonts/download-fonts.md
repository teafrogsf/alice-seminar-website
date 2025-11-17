# 快速下载字体指南

## 最简单的方法：使用 Google Webfonts Helper

### 1. Playfair Display
访问：https://gwfh.mranftl.com/fonts/playfair-display?subsets=latin
- 勾选字重：regular (400), 700, 900
- 点击"Download files"
- 解压后将 `.woff2` 文件放到 `playfair-display/` 文件夹

### 2. Inter
访问：https://gwfh.mranftl.com/fonts/inter?subsets=latin
- 勾选字重：300, regular (400), 500, 600
- 点击"Download files"
- 解压后将 `.woff2` 文件放到 `inter/` 文件夹

### 3. Noto Serif SC
访问：https://gwfh.mranftl.com/fonts/noto-serif-sc?subsets=chinese-simplified
- 勾选字重：regular (400), 500, 700
- 点击"Download files"
- 解压后将 `.woff2` 文件放到 `noto-serif-sc/` 文件夹

### 4. Noto Sans SC
访问：https://gwfh.mranftl.com/fonts/noto-sans-sc?subsets=chinese-simplified
- 勾选字重：300, regular (400), 500
- 点击"Download files"
- 解压后将 `.woff2` 文件放到 `noto-sans-sc/` 文件夹

## 备选方法：从官方源下载

### Google Fonts 官网
1. 访问 https://fonts.google.com/
2. 搜索对应字体
3. 点击"Download family"下载整个字体家族
4. 使用 [transfonter.org](https://transfonter.org/) 将 TTF 转换为 WOFF2

### GitHub 仓库
- **Inter**: https://github.com/rsms/inter/releases
- **Noto Fonts**: https://github.com/notofonts/noto-cjk/releases

## 注意事项

⚠️ **重要**：下载后的文件名必须与 `global.css` 中 `@font-face` 规则中的文件名保持一致。

如果下载的文件名不同，您有两个选择：
1. **重命名文件**以匹配 CSS 中的路径
2. **修改 CSS** 中的文件路径以匹配实际文件名

## 验证安装

下载完成后，确认目录结构如下：

```
public/fonts/
├── playfair-display/
│   ├── playfair-display-v30-latin-regular.woff2
│   ├── playfair-display-v30-latin-700.woff2
│   └── playfair-display-v30-latin-900.woff2
├── inter/
│   ├── inter-v13-latin-300.woff2
│   ├── inter-v13-latin-regular.woff2
│   ├── inter-v13-latin-500.woff2
│   └── inter-v13-latin-600.woff2
├── noto-serif-sc/
│   ├── noto-serif-sc-v26-chinese-simplified-regular.woff2
│   ├── noto-serif-sc-v26-chinese-simplified-500.woff2
│   └── noto-serif-sc-v26-chinese-simplified-700.woff2
└── noto-sans-sc/
    ├── noto-sans-sc-v36-chinese-simplified-300.woff2
    ├── noto-sans-sc-v36-chinese-simplified-regular.woff2
    └── noto-sans-sc-v36-chinese-simplified-500.woff2
```

安装完成后，运行 `npm run dev` 重新启动开发服务器即可看到效果！

