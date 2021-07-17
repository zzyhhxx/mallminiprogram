// pages/home/home.js
import {getMultidata, getGoodsList} from "../../service/home"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    recommend:[],
    currentIndex:0,
    goodsList:{
      'pop':{
        page:0,
        list:[]
      },
      'new':{
        page:0,
        list:[]
      },
      'sell':{
        page:0,
        list:[]
      }
    },
    currentType:'new'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMultidata()
    this.getGoodsList('pop')
    this.getGoodsList('new')
    this.getGoodsList('sell')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //获取首页数据
  getMultidata() {
    getMultidata().then(res => {
      this.setData({
        banner:res.data.data.banner.list,
        recommend:res.data.data.recommend.list
      })
    })
  },
  //获取商品列表
  getGoodsList(type) {
    const page = this.data.goodsList[type].page + 1
    getGoodsList({
      type,
      page
    }).then(res => {
      const thisPage = 'goodsList.'+type+'.page'
      const thisType = `goodsList.${type}.list`
      const thisList = this.data.goodsList[type].list
      thisList.push(...res.data.data.list)
      this.setData({
        [thisPage]:page,
        [thisType]:thisList
      })
      console.log(this.data.goodsList,'dd')
    })
  },
  // 监听筛选点击按钮
  tabClick(e) {
    const index = e.detail.index
    this.setData({
      currentIndex:index
    })
  }
})