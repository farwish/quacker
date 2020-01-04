// Content script content goes here or in activatedContentHooks (use activatedContentHooks if you need a variable
// accessible to both the content script and inside a hook

(function () {
  const YouDaoCom = {
    DetailTopImgAd: document.getElementById('topImgAd'),
    DetailRightBaiduAdv: document.getElementById('baidu-adv')
  }
  for (let key in YouDaoCom) {
    YouDaoCom[key].style.display = 'none'
  }
})()
