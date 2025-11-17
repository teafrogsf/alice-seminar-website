# 字体文件说明

本项目使用以下字体，请按照下面的步骤下载字体文件到此目录。

## 所需字体

1. **Playfair Display** (英文衬线)
2. **Inter** (英文无衬线)
3. **Noto Serif SC** (中文衬线)
4. **Noto Sans SC** (中文无衬线)

## 下载方法

### 方法 1：使用 Google Webfonts Helper（推荐）

访问 [Google Webfonts Helper](https://gwfh.mranftl.com/fonts)，这是一个帮助你下载 Google Fonts 的工具：

1. 搜索并下载 **Playfair Display**
   - 选择字重：400, 700, 900
   - 下载 woff2 格式
   - 解压到 `playfair-display/` 子目录

2. 搜索并下载 **Inter**
   - 选择字重：300, 400, 500, 600
   - 下载 woff2 格式
   - 解压到 `inter/` 子目录

3. 搜索并下载 **Noto Serif SC**
   - 选择字重：400, 500, 700
   - 下载 woff2 格式
   - 解压到 `noto-serif-sc/` 子目录

4. 搜索并下载 **Noto Sans SC**
   - 选择字重：300, 400, 500
   - 下载 woff2 格式
   - 解压到 `noto-sans-sc/` 子目录

### 方法 2：从 Google Fonts 直接下载

1. 访问 [Google Fonts](https://fonts.google.com/)
2. 搜索上述字体并下载
3. 使用工具（如 [transfonter.org](https://transfonter.org/)）将 ttf 转换为 woff2 格式

## 目录结构

下载完成后，目录结构应该如下：

```
fonts/
├── README.md (本文件)
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

## 注意事项

- 推荐使用 **woff2** 格式，它是最现代且压缩率最高的字体格式
- 如果需要更好的浏览器兼容性，可以同时提供 woff 格式作为备选
- 中文字体文件通常较大（2-5MB），建议只包含必要的字重

