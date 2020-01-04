// Content script content goes here or in activatedContentHooks (use activatedContentHooks if you need a variable
// accessible to both the content script and inside a hook

(function () {
  // Translate

  if (window.location.host.indexOf('youdao.com') !== -1) {
    const YoudaoCom = {
      ResultPageTopImgAd: document.getElementById('topImgAd'),
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
      IndexPageTopContainer: document.getElementById('top-container')
    }
    for (let key in YoutubeCom) {
      if (YoutubeCom[key] !== null) {
        YoutubeCom[key].style.display = 'none'
      }
    }
  }
})()
