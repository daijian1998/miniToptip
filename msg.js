var timer = null

Component({

  data: {
    tip: "this is a toptip",
    type:'warn',
    show: false,

  },
  methods: {
    showTip(tip, type = "") {
      let that = this
      if (timer) { //如果当前消息还没有结束的话先结束消息并且清空定时器
        clearInterval(timer)
        that.setData({
          show: false
        })
      }
      this.setData({
        tip: tip,
        type:type,
        show: true
      })
      timer = setInterval(function () {
        that.setData({
          show: false
        })
        clearInterval(timer)
        timer = null
      }, 1500)
    }

  }

})