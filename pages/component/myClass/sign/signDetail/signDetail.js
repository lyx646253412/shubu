Page({
  data: {
    index: null,
    picker: ['男', '女', '无'],
    date: '2018-12-25',
  
  },
  gotoPage: function (options) {
    wx.navigateTo({
    url: '/pages/component/myClass/sign/signDetail/signDetailAdd/signDetailAdd', //要跳转到的页面路径
    })
    },
  gotoPageHis: function (options) {
    wx.navigateTo({
    url: '/pages/component/myClass/sign/signDetail/signDetailHis/signDetailHis', //要跳转到的页面路径
    })
    },
})
