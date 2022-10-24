const app = getApp();

Page({
  data: {
    loading: false,
    color: '#000',
    background: '#fff',
    show: true,
    animated: false
  },

  onLoad: function() {},
  search: function() {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }
});
