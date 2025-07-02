
// pages/me/me.js
const util = require('../../utils/util.js');
const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();

Page({
  data: {
    userImg: '',
    userName: '',
    uploadImgList: [],
    recordFilePath: '',
    pausing: false,
  },

  // 退出登录
  logout: function() {
    this.setData({
      userImg: '',
      userName: ''
    });
    wx.showToast({
      title: '已退出登录',
      icon: 'none'
    });
  },



  //选择图片
  chooseImg:function(){
    wx.chooseImage({
      count: 9, 
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res)=>{
        this.setData({
          uploadImgList:res.tempFilePaths
        })
      },
      fail:()=>{
        util.showModel('上传图片失败','请稍后重试')
      }
    })
  },
  //删除图片
  deleteImg:function(e){
    const img = e.currentTarget.dataset.img;
    let temArr = this.data.uploadImgList.slice();
    for(let i=0;i<temArr.length;i++){
      if(temArr[i]===img){
        temArr.splice(i,1);
        break;
      }
    };
    this.setData({
      uploadImgList:temArr
    })
  },
  //预览图片
  previewImg:function(e){
    const img = e.currentTarget.dataset.img;
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: this.data.uploadImgList, // 需要预览的图片http链接列表
      success: () => {

      },
      fail: () => {
        util.showModel('预览图片失败', '请稍后重试');
      }
    })
  },
  //开始录音
  startRecord:function(e){
    recorderManager.start();
  },
  //暂停录音
  pauseRecord: function(e){
    recorderManager.pause();
  },
  //继续录音
  resumeRecord: function (e) {
    recorderManager.resume();
  },
  //停止录音
  stopRecord: function(e){
    recorderManager.stop();
  },
  //播放录音
  playRecord:function(e){
    innerAudioContext.src = this.data.recordFilePath;
    innerAudioContext.play();
  },













  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //录音回调
    recorderManager.onPause(() => {
      this.setData({
        pausing: true
      })

    });
    recorderManager.onResume(() => {
      this.setData({
        pausing: false
      })
    });
    recorderManager.onFrameRecorded((res) => {
      this.setData({
        recordFilePath: res.tempFilePath,
        pausing: false
      })
    });
    recorderManager.onStop((res) => {
      this.setData({
        recordFilePath: res.tempFilePath,
        pausing: false
      })
    });

    // 自动获取用户信息

    wx.getUserInfo({
      success: (res)=>{
        const userInfo = res.userInfo;
        this.setData({
          userImg: userInfo.avatarUrl,
          userName: userInfo.nickName
        });
      }
    });
  }
});