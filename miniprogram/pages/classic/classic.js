  // miniprogram/pages/classic/classic.js
import { ClassicModel } from '../../models/classic.js'
let classicModel = new ClassicModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: true,
    first: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
      this.setData({
        classic: res
      })
    })

  },
  
 
  onNext: function (event) {
    this._updateClassic('next')
  },

  onPrevious: function (event) {
    this._updateClassic('previous')
  },
  _updateClassic: function (nextOrPrevious) {
    const index = this.data.classic.index
    classicModel.getClassic(index, nextOrPrevious, (res) => {
      
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },



  /* onPrevious: function (event) {
    let index = this.data.classic.index
     classicModel.getPrevious(index, (res) => {
       this.setData({
         classic:res,
         latest: classicModel.isLatest(res.index),
         first: classicModel.isFirst(res.index)
       })
     })
  }
 */


  


})