Page({
  data: {
    // 指向百度 AppBuilder 数字人 AI 页面
    aiUrl: 'https://appbuilder.baidu.com/s/zCGaFmRS'
  },
  onLoad() {
    // 兼容部分安卓/真机 web-view 首次不显示问题，强制 setData 触发渲染
    this.setData({ aiUrl: this.data.aiUrl });
  }
});
