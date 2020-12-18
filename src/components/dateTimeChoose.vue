<template>
  <div class="date-wrapper">
     <div v-if="lineBreak" class="wrapper-line">
       <div class="time-choose" style="margin-bottom: 10px;">
         <span for="">开始时间：</span>
         <el-date-picker
           v-model="startTime1"
           :type="myType"
           placeholder="开始时间"
           class="date-select"
           value-format="yyyy-MM-dd HH:ss:mm"
           :picker-options="pickerOptions0">
         </el-date-picker>
       </div>
       <div  class="time-choose">
         <span for="">结束时间：</span>
         <el-date-picker
           v-model="endTime1"
           :type="myType"
           placeholder="结束时间"
           class="date-select"
           default-time='23:59:59'
           value-format="yyyy-MM-dd HH:ss:mm"
           :picker-options="pickerOptions1">
         </el-date-picker>
       </div>
     </div>
     <div v-else class="wrapper">
       <el-date-picker
         v-model="startTime1"
         :type="myType"
         placeholder="开始时间"
         class="date-select"
         value-format="yyyy-MM-dd HH:mm:ss"
         :picker-options="pickerOptions0">
       </el-date-picker>
       <div class="division"> — </div>
       <el-date-picker
         v-model="endTime1"
         :type="myType"
         placeholder="结束时间"
         class="date-select"
         value-format="yyyy-MM-dd HH:mm:ss"
         :picker-options="pickerOptions1"
         default-time='23:59:59'>
       </el-date-picker>
     </div>
  </div>
</template>

<script>
  export default {
    name: "dateTimeChoose",
    props: ['type','lineBreak','defaultDays','valueFormat'],
    computed: {
      myType() {
         return this.type == 'datetime' ? 'datetime' : 'date';
      },
      diffDays(){
        if(this.startTime1&&this.endTime1){
           return Math.ceil((new Date(new Date(this.endTime1).DateFormat('yyyy-MM-dd')).getTime()-new Date(new Date(this.startTime1).DateFormat('yyyy-MM-dd')).getTime())/(24*60*60*1000)+1);
        }
      },
      startTime(){
          if(!this.startTime1){
            return ''
          }
          if(this.valueFormat=='yyyy-MM-dd'){
            return  this.startTime1.slice(0,10);
          }else{
            return this.startTime1
          }
      },
      endTime(){
        if(!this.endTime1){
           return ''
        }
        if(this.valueFormat=='yyyy-MM-dd'){
          return  this.endTime1.slice(0,10);
        }else{
          return this.endTime1
        }
      }
    },
    mounted() {
        let endTime=new Date();
        if(this.defaultDays&&this.defaultDays>1){
             this.endTime1=endTime.DateFormat('yyyy-MM-dd hh:mm:ss');
             let startTime=new Date(endTime.getTime()-(this.defaultDays-1)*24*60*60*1000).DateFormat('yyyy-MM-dd')+' 00:00:00';
             this.startTime1=startTime;
        }
    },
    data: function () {
      return {
          startTime1: '',
          endTime1: '',
          pickerOptions0: {
              disabledDate: (time) => {
                    if (this.endTime1 != "" && this.endTime1 != null) {
                       if(this.type=='datetime'){
                            return time.getTime() > new Date(new Date(this.endTime1).DateFormat('yyyy-MM-dddd'));
                       }else{
                            return time.getTime() > new Date(new Date(this.endTime1).getTime()-24*60*60*1000);
                       }
                   }
              }
          },
          pickerOptions1: {
                disabledDate: (time) => {
                  if (this.startTime1 != "" && this.startTime1 != null) {
                      if(this.type=='datetime'){
                         return time.getTime() < new Date(new Date(new Date(this.startTime1).DateFormat('yyyy-MM-dddd')).getTime()-1000*60*60*24);
                      }else{
                         return time.getTime() < new Date(new Date(this.startTime1).getTime()+24*60*60*1000);
                      }
                  }
                }
          }
      }
    },
    methods:{
        reset(){
            this.startTime1='';
            this.endTime1='';
        }

    }
  }
</script>

<style scoped lang="scss">
  .date-wrapper {
     width: 100%;
     display: inline-block;
    .wrapper{
      display: inline-flex;
      align-items: center;
      width:100%;
      .division {
        width: 10%;
        text-align: center;
      }
      .date-select {
        width: 45%;
      }
    }
    .wrapper-line{
          width:100%;
         .time-choose{
            width:100%;
            display: flex;
            align-items: center;
           .date-select {
              flex: 1 1 60%;
           }
         }
     }

  }
</style>
