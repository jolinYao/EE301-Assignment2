// pages/sujv/sujv.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    strArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
    let that= this
    //固定写法,用于获取当前数据库中goods这个表的实例对象
    wx.cloud.database().collection('jilu')
    //查询操作
    .get({
      //请求成功
      success(res){
        console.log('请求成功',res)
        let result =  res.data
        that.setData({
          strArr:result
       })
       
        console.log(result);
      },
      //请求失败
      fail(err){
        console.log('请求失败',err)
      }
    })
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