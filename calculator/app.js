// app.js
App({
  onLaunch() {
    this.globalData.backgroundImg=null
  },
  globalData: {
  }
})
if (!wx.cloud) {
  console.error('请使用 2.2.3 或以上的基础库以使用云能力');
} else {
  wx.cloud.init({
    env: 'cloud1-9g1ib1j229dacf01',
    traceUser: true,
  });
}

