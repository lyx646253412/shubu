// pages/component/memberSetting/studentSetting/studentSetting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gridCol:5,
    skin: false,
    iconList:[
      {
        icon: 'female',
        color: 'red',
        badge: 120,
        name: '张女子'
      }, {
        icon: 'female',
        color: 'orange',
        badge: 1,
        name: '李女子'
      }, {
        icon: 'female',
        color: 'yellow',
        badge: 0,
        name: '孙女子'
      }, {
        icon: 'male',
        color: 'olive',
        badge: 22,
        name: '王男子'
      }, {
        icon: 'male',
        color: 'cyan',
        badge: 0,
        name: '赵男子'
      }, 
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  gotoPage: function (options) {
    wx.navigateTo({
    url: '/pages/component/myClass/memberSetting/studentSetting/batchStudent/batchStudent', //要跳转到的页面路径
    })
    },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})