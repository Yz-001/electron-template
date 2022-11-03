import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
console.log(`当前环境${process.env.NODE_ENV}`)
// import vueJsx from '@vitejs/plugin-vue-jsx';
// https://vitejs.dev/config/
export default defineConfig({
  define:{
    "process.env":process.env,  //解决process is not defined问题
    extensions: [".js", ".ts", "scss", ".tsx", ".jsx"],
  },
  plugins: [
    vue(),
    Unocss({ /* options */ }),
    eslintPlugin()
    // vueJsx({
    //   transformOn: true,
    //   mergeProps: true,
    // }),
  ],
  base: './', // 开发或生产环境服务的公共基础路径 ,https://vitejs.bootcss.com/guide/build.html#public-base-path
  build: {
    outDir: 'dist', // 打包后的文件名称,
    terserOptions: {
      // 生产环境下移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: { // 别名路径
      '@': path.resolve(__dirname, 'src'), 
      '@apis': path.resolve(__dirname, 'src/apis'), 
      '@assets': path.resolve(__dirname, 'src/assets'), 
      '@components': path.resolve(__dirname, 'src/components'), 
      '@stores': path.resolve(__dirname, 'src/stores'), 
      '@utils': path.resolve(__dirname, 'src/utils'), 
      '@views': path.resolve(__dirname, 'src/views'), 
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `@import "@/styles/variables.scss";`, // 配置全局 scss
      },
    },
  },
  server: {
    https: false, // 是否开启https
    open: true, // 是否自动打开浏览器
    port: 3000, // 端口号
    host: true, // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL, // 后台接口,
        changeOrigin: true,
        secure: false, // 如果是 https 接口需要配置这个参数
        // ws:false,//websocket
        rewrite: (path) => path.replace(/^\/api/, ''), // 路径重写
      },
    },
  },
});
