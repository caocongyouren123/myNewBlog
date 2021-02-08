
// 导航栏
module.exports=[
  {text: '主页', link: '/index.html', icon: 'reco-home'},
  {
    text: '其它', icon: 'reco-document',
    items: [
      {
        text: 'Projects🎈',
        items: [{
          text: 'My Project',
          link: '/other/project',
        }]
      }, {
        text: 'Common sites🎈',
        items: [{
          text: '友 链',
          link: '/other/friends',
        }, {
          text: 'Python',
          link: 'https://www.python.org/',
        }, {
          text: 'Mysql',
          link: 'https://www.mysql.com/cn/',
        }, {
          text: 'JQuery',
          link: 'http://www.jquerycn.cn/',
        }, {
          text: 'Less',
          link: 'http://lesscss.cn/',
        }, {
          text: 'LeetCode',
          link: 'https://leetcode-cn.com/',
        }, {
          text: 'Vue.js',
          link: 'https://cn.vuejs.org/v2/guide/',
        }, {
          text: 'BootCDN',
          link: 'https://www.bootcdn.cn/',
        }, {
          text: 'Linux命令大全',
          link: 'https://www.linuxcool.com/',
        }, {
          text: '编程语言排行榜',
          link: 'https://www.tiobe.com/tiobe-index/',
        }]
      },]
  },
  {text: '时间线', link: '/timeline/', icon: 'reco-date'},
  {text: '关于我', link: '/about/', icon: 'reco-message'},
  {text: 'Gitee', link: 'https://gitee.com/du-tian1314520', icon: 'reco-mayun'}
]
