// components/n-common/n-tabcontrol/n-tabcontrol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick(e) {
      const index = e.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
      this.triggerEvent("tabClick",{"index":index})
    }
  }
})
