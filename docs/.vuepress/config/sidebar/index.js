//侧边栏
module.exports = {
  '/views/': [
    '',
    {
      title: '前端基础',
      collapsable: true,
      children: [
        'frontend/html/oneday',
        'frontend/css/sum_1',
        'frontend/js/sum_1',
        'frontend/js/sum_2',
      ]
    },
    {
      title: '前端常用框架',
      collapsable: true,
      children: [
        'frame/jquery/jq_1',
        'frame/vue/vue_1'
      ]
    },
    {
      title: 'Ajax',
      collapsable: true,
      children: [
        'ajax/ajax_1',
      ]
    },
    {
      title: 'Nodejs与工程化',
      collapsable: true,
      children: [
        'node/node_1',
        'node/module_1',
      ]
    },
    {
      title: 'ES6',
      collapsable: true,
      children: [
        'es6/es6_1'
      ]
    },
    {
      title: 'Vuepress',
      collapsable: true,
      children: [
        'vuepress/20190928',
      ]
    },
    {
      title: '微信小程序',
      collapsable: true,
      children: [
      ]
    },
    {
      title: 'Echarts',
      collapsable: true,
      children: [
        'echarts/20190928'
      ]
    },
    {
      title: 'Git版本控制',
      collapsable: true,
      children: [
        'git/git'
      ]
    },
    {
      title: 'Webpack',
      collapsable: true,
      children: [
        'webpack'
      ]
    },
    {
      title: 'Css预编译',
      collapsable: true,
      children: [
        'cssprecompile/file'
      ]
    },
    {
      title: 'Myproject',
      collapsable: true,
      children: [
        'project/supermall',
        'project/shopelc',
      ]
    },
    {
      title: '随笔',
      collapsable: true,
      children: [
        'essay/20190928',
        'essay/20200227',
      ]
    },
  ]
}
