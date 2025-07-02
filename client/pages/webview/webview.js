Page({
  data: {
    url: ''
  },
  onLoad(query) {
    const url = decodeURIComponent(query.url || '');
    const title = query.title ? decodeURIComponent(query.title) : '网页浏览';
    wx.setNavigationBarTitle({ title });
    this.setData({
      url
    });
  }
});
