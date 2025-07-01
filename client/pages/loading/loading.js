Page({
  data: {
    countdown: 5,
    timer: null
  },
  onLoad() {
    this.startCountdown();
  },
  startCountdown() {
    let count = this.data.countdown;
    this.setData({ countdown: count });
    this.data.timer = setInterval(() => {
      count--;
      this.setData({ countdown: count });
      if (count <= 0) {
        clearInterval(this.data.timer);
        this.goIndex();
      }
    }, 1000);
  },
  skip() {
    clearInterval(this.data.timer);
    this.goIndex();
  },
  goIndex() {
    wx.reLaunch({ url: '/pages/index/index' });
  },
  onUnload() {
    clearInterval(this.data.timer);
  }
});
