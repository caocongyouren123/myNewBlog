const path = require('path')
const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
// const plugins = require('./config/plugins/index')

module.exports={
  //dest:'./dist',   打包的目录
  title:"Grass",
  description:'会当凌绝顶，一览众山小',
  // 头部区域
  head:[
    [ 'link',{
      rel:'icon',
      href: 'https://infinitypro-img.infinitynewtab.com/custom-icon/8001de1jd3n68lbfnxxt564xvb0vl5.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim'
      }
    ],
    [ 'meta',{
      name:'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
      }
    ],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
      }
    ]
  ],

  // 主题配置
  theme:'reco',
  themeConfig: {
    nav,
    // sidebar: 'auto',// 自动形成侧边导航
    sidebar,
    // logo: '/vuepress/head-fish.jpg', //导航栏头像
    authorAvatar: '/vuepress/head-fish.jpg', //首页右侧头像
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    sidebarDepth: 2,
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' ,// 默认文案 “标签”
        items:[{
          text:'html'
        }
        ]
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    },
    // 最后更新时间
    lastUpdated: true,
    lastUpdated: '上次更新', // string | boolean
    // 作者
    author: 'caocongyouren',
    search:true,
    // 备案号
    // record: '京ICP备17067634号-1',
    // 项目开始时间
    startYear: '2020',
    //git地址
    repo: 'https://github.com/caocongyouren123',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    // 可选，默认为 master
    //docsBranch: 'vuepress',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页！',
    //评论
    valineConfig: {
      appId: 'AsOkhHdwKePtASLC2euwIAE8-gzGzoHsz',
      appKey: '2rgVfTdvJ9iAggNvXU3zEzTV',
      placeholder: '填写邮箱可以收到回复哦!',
      notify: true, // 邮件提醒
      verify: true, // 验证码
      recordIP: true
    },
  },
  // plugins,
  markdown: {
    lineNumbers: true
  },
  plugins:[
    // 配置自定义容器
    ['vuepress-plugin-container']
    // 配置打赏
    [
      'vuepress-plugin-sponsor',
      {
        theme:'打赏一下',
        alipay: '/sponsor-qrcode/qrcode-alipay.png',
        wechat: '/sponsor-qrcode/wechat.jpg',
        qq: '/sponsor-qrcode/qrcode-qq.png',
        duration: 2000
      }
    ],
    // 配置音乐播放器
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          // 本地文件示例
         /* {
            name: '장가갈 수 있을까',
            artist: '咖啡少年',
            url: '/bgm/1.mp3',
            cover: '/bgm/1.jpg'
          },*/
          // 网络文件示例
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          },
          {
            name: '我的楼兰',
            artist: '云朵',
            url: 'G:/KuGou/菲儿 - 我的楼兰.mp3',
            cover: 'http://p1.music.126.net/9DlFpuo-Ge4oR5TIn5ktag==/109951163200114076.jpg?param=130y130'
          },
          {
            name: '箱子里的狐狸',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/1.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/1.jpg'
          },

        ],
        position:{
          left: '20px',
          bottom: '20px',
          'z-index': '999999'
        },
        autoShrink:false,
        shrinkMode:'float',
        floatPosition:'right',
        floatStyle:{
          bottom: '200px',
          'z-index': '999999'
        }
      }
    ],
    // 配置彩带效果
    ['vuepress-plugin-ribbon'],
    // 配置看板娘
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        messageStyle: {
          right: '45px',
          bottom: '190px'
        },
        modelStyle: {
          right: '85px',
          bottom: '-20px',
          opacity: '0.9'
        },
        height:250
      }
    ],
    // 配置交流信息
    [
      '@vuepress-reco/vuepress-plugin-bulletin-popover', {
      width: '150px', // 默认 260px
      title: '消息提示',
      body: [
        {
          type: 'title',
          content: '欢迎大家联系我！ 🎉🎉🎉',
          style: 'text-aligin: center;'
        },
        {
          type: 'image',
          src: '/vuepress/rvcode_qq.jpg',
         /* style: 'width:80px;margin:0 auto'*/
        },
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/donate'
        },
      ]
    }],
    // 配置光标效果
    ['cursor-effects'],
    // 配置代码信息
    ['@vuepress-reco/vuepress-plugin-extract-code']
    ['@vuepress-reco/vuepress-plugin-rss'],
    // 配置分页
    ['@vuepress-reco/vuepress-plugin-pagation'],
    // 配置名人名言
    ['vuepress-plugin-boxx'],
    // 配置代码复制
    [' @mr-hope/vuepress-plugin-copy-code']
  ]
}