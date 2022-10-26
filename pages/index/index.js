const app = getApp();

Page({
  data: {
    active:"home",
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
  onPullDownRefresh: function () {
    //调用刷新时将执行的方法
    wx.stopPullDownRefresh({
      success: (res) => {
        wx.showToast({
          title: '刷新成功',
          icon: 'none',
          duration: 2000
        })

      },
    })
},

  onLoad: function() {},
  search: function() {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }
});
