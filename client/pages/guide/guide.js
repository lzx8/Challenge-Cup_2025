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
