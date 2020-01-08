// Content script content goes here or in activatedContentHooks (use activatedContentHooks if you need a variable
// accessible to both the content script and inside a hook

(function () {
  // Blog
  if (window.location.host.indexOf('blog.csdn.net') !== -1) {
    const BlogCsdnNetClassName = {
      // Article: Left side first AD
      ArticleCsdnTrackingStatistics: document.getElementsByClassName('csdn-tracking-statistics'),

      // Article: Bottom side several ADs in recommends
      ArticleCsdnRecommendRrecommendBox: document.getElementsByClassName('recommend-recommend-box')
    }

    for (let key in BlogCsdnNetClassName) {
      if (BlogCsdnNetClassName[key] !== null) {
        // Each
        for (let i = 0, len = BlogCsdnNetClassName[key].length; i < len; i++) {
          if (BlogCsdnNetClassName[key][i]) {
            BlogCsdnNetClassName[key][i].style.display = 'none'
          }
        }
      }
    }
    const BlogCsdnNetId = {
      // Article: Left side second AD
      ArticleAsideFooter: document.getElementById('asideFooter')
    }
    for (let key in BlogCsdnNetId) {
      if (BlogCsdnNetId[key] !== null) {
        BlogCsdnNetId[key].style.display = 'none'
      }
    }
  }

  // Translate tool

  if (window.location.host.indexOf('youdao.com') !== -1) {
    const YoudaoCom = {
      // Top side banner AD
      ResultPageTopImgAd: document.getElementById('topImgAd'),

      // Right bottom side AD
      ResultPageRightBaiduAdv: document.getElementById('baidu-adv')
    }
    for (let key in YoudaoCom) {
      if (YoudaoCom[key] !== null) {
        YoudaoCom[key].style.display = 'none'
      }
    }
  }

  // Search engine

  if (window.location.host.indexOf('baike.baidu.com') !== -1) {
    // @todo only hide async loaded element in current page
    // document.getElementById('side_box_unionAd')

    const BaikeBaiduCom = {
      // Right side AD
      ResultPageSideContent: document.getElementsByClassName('side-content')
    }
    for (let key in BaikeBaiduCom) {
      if (BaikeBaiduCom[key] !== null) {
        // Each
        for (let i = 0, len = BaikeBaiduCom[key].length; i < len; i++) {
          if (BaikeBaiduCom[key][i]) {
            BaikeBaiduCom[key][i].style.display = 'none'
          }
        }
      }
    }
  }

  // Video

  if (window.location.host.indexOf('youtube.com') !== -1) {
    const YoutubeCom = {
      // Index page: Top side banner AD
      IndexPageTopContainer: document.getElementById('top-container')
    }
    for (let key in YoutubeCom) {
      if (YoutubeCom[key] !== null) {
        YoutubeCom[key].style.display = 'none'
      }
    }
  }
})()
