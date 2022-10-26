const app = getApp();

Page({
  data: {
    active:"home"
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
  onLoad: function() {},
  search: function() {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }
});
