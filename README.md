# ポートフォリオ

このアプリでは私の経歴について説明するためのページを作成します．

Vue・TypeScriptを用いたSPAとして設計しています．

また，ウェブページのデザインや，CSS Keyframesを用いたリッチなアニメーション，Github Actionsを用いたCI/CDの練習も兼ねています．

## 概要

```
.
├── 404.html
├── [node_modules]
├── babel.config.js
├── docs
│   ├── 404.html
│   ├── css
│   ├── favicon.ico
│   ├── index.html
│   └── js
├── package-lock.json
├── package.json
├── public
├── src
│   ├── App.vue #Vueアプリ本体
│   ├── assets #未使用
│   ├── components # 未使用
│   ├── main.ts
│   ├── router
│   ├── shims-vue.d.ts
│   └── views
├── tests
├── tsconfig.json
└── vue.config.js

12 directories, 16 files

```



##Pages

プロジェクトに含まれるフォルダ・ファイルのうち，`/dist`以下の内容がGithub Pagesとしてデプロイされます．

- `/dist`の内容はブランチプッシュ時に自動でビルドされ，更新されます．
- また，`npm run build`で意図的にビルドすることも出来ます．



## 起動・ビルド

## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

