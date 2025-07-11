# 个人网址

MiliR Lab：https://milir-lab.github.io/

GitHub Repo：https://github.com/MiLiR-Lab/milir-lab.github.io

MiliR Lab 是用 Docusaurus 搭建的个人网站！

## 环境搭建

Docusaurus 是由一组 npm 包组成的，需要 Node.js 作为运行环境。

### 安装 Node.js

- 官网： [Node.js](https://nodejs.org/) 

进入 [Node.js](https://nodejs.org/) 官网，根据自己系统平台进行 Node.js 安装。

### 验证 Node.js

打开终端命令行，运行以下命令检查 Node.js 是否已安装成功。

```bash
node -v && npm -v
```

若一切安装正常，终端应该输出类似以下版本信息：
```bash
v22.16.0
11.4.2
```

### 安装 Yarn（推荐）

Yarn 相比于 npm 更快、更可靠，Docusaurus 推荐使用 Yarn 作为包管理器。

```bash
npm install --global yarn
```
### 验证 Yarn（推荐）

打开终端命令行，运行以下命令检查 Yarn 是否已安装成功。

```bash
yarn -v
```
若一切安装正常，终端应该输出类似以下版本信息：
```bash
1.22.22
```

## 本地开发

仅供作者开发使用，其他用户无需参考！

### 下载 MiLiR Lab
```bash
git clone https://github.com/MiLiR-Lab/milir-lab.github.io.git
```

### 安装 MiLiR Lab

进入项目目录，运行以下命令安装本地环境：

```bash
yarn install
```

### 运行 MiLiR Lab

进入项目目录，运行以下命令启动本地开发服务器：

```bash
yarn start
```

系统会自动打开浏览器访问 `http://localhost:3000`，你可以在浏览器中查看网站效果。

### 构建 MiLiR Lab
在项目目录下，运行以下命令构建网站：

```bash
yarn build
```
构建完成后，生成的静态文件会存放在 `build` 目录下。

### 预览 MiLiR Lab
在项目目录下，运行以下命令启动本地服务器查看构建结果：
```bash
yarn serve
```
系统会自动打开浏览器访问 `http://localhost:3000`，你可以在浏览器中查看构建后的静态网站效果。

### 部署 MiLiR Lab
在项目目录下，运行以下命令将构建好的静态文件部署到 GitHub Pages：
```bash
yarn deploy
```
这将会将 `build` 目录下的静态文件推送到 `gh-pages` 分支。