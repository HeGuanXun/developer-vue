export let loadingObj={
  data:function(){
    return {
      loadingObj:{
        search:false,
        add:false,
        delete:false,
        modify:false
      }
    }
  },
  methods:{
    searchSwitchLoading(){
      this.loadingObj.search=!this.loadingObj.search;
    },
    addSwitchLoading(){
      this.loadingObj.add=!this.loadingObj.add;
    },
    deleteSwitchLoading(){
      this.loadingObj.delete=!this.loadingObj.delete;
    },
    modifySwitchLoading(){
      this.loadingObj.modify=!this.loadingObj.modify;
    }
  }
}
