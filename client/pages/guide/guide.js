// pages/guide/guide.js
Page({
  data: {
    webUrl: 'https://appbuilder.baidu.com/s/mnVXa458',
    showLangPopup: false,
    langList: [
      { code: 'zh', name: '中文' },
      { code: 'en', name: 'English' },
      { code: 'ja', name: '日本語' },
      { code: 'ko', name: '한국어' },
      { code: 'fr', name: 'Français' },
      { code: 'de', name: 'Deutsch' }
    ],
    currentLang: 'zh'
  },
  onLoad(options) {
    this.setData({ webUrl: this.data.webUrl });
  },
  onLangBtnTap() {
    this.setData({ showLangPopup: true });
  },
  closeLangPopup() {
    this.setData({ showLangPopup: false });
  },
  stopPopup() {},
  chooseLang(e) {
    const code = e.currentTarget.dataset.code;
    this.setData({ currentLang: code, showLangPopup: false });
    // TODO: 这里可集成实际的多语言切换逻辑
    wx.showToast({ title: '切换到 ' + code, icon: 'none' });
  }
});
// pages/guide/guide.js
Page({
  data: {
    webUrl: 'https://appbuilder.baidu.com/s/mnVXa458'
  },
  onLoad(options) {
    // 兼容部分安卓/真机 web-view 首次不显示问题，强制 setData 触发渲染
    this.setData({ webUrl: this.data.webUrl });
  }
});
