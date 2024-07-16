import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  // 打包配置
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    reactRefresh(),
    //模块联邦配置
    federation({
      //定义模块服务名称
      name: "remoteReactComponents",
      //build后的入口文件
      filename: "AVTable.js",
      //需要暴露的组件
      exposes: {
        "./AVTable": "./src/packages/vue-table/index.tsx",
      },
      //声明共享的依赖库
      shared: ["react", "react-dom"],
    }),
  ],
});
