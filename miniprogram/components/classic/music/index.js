import { classicBeh } from '../classic-beh.js'


const mMgr = wx.getBackgroundAudioManager()

Component({
  behaviors: [classicBeh],
  properties: {
    hidden: Boolean,
    src:String,
    title: String
    
  },

  data: {
    playing:false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png', 
  },
  
  methods:{
    onPlay:function(event){
      //是否播放音乐
      if(!this.data.playing){
        this.setData({
          playing: true
        })
        mMgr.src = this.properties.src,
          mMgr.title = this.properties.title

      }
      else{
        this.setData({
          playing:false
        })
        mMgr.pause()
      }
    }
  }

  
  
})