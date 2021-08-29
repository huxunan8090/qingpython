import { defineConfig } from 'dumi';

export default defineConfig({
  title: '青青社区',
  favicon: 'http://www.qingxzd.com/favicon.ico',
  logo: 'https://z3.ax1x.com/2021/08/18/fITurD.jpg',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '青青社区',
      path: 'http://www.qingxzd.com',
    },
    {
      title: '青青小班课',
      path: 'http://classroom.qingxzd.com/',
    },
    {
      title: 'QQ交流群：1000000',
    },
  ],
  // more config: https://d.umijs.org/config
  // 一键开启
  ssr: {
    // 更多配置
    // forceInitial: true,
    // removeWindowInitialProps: false
    // devServerRender: true,
    // mode: 'string',
    // staticMarkup: false,
  },
});
