<template>
  <div class="label-wrapper">
    <span v-for='item in myArr' class="label" :class='{"active":item.flag}' @click="labelClick(item)"
          v-if='!multchoose'>  {{item.value}}  </span>
    <span v-for='item in myArr' class="label" :class='{"active":item.flag}' @click="labelClickMu(item)"
          v-if='multchoose'>  {{item.value}}  </span>
  </div>
</template>
<script>
  export default {
    name: "LabelChoose",
    props: ['tabData', 'tabIndex', 'multchoose'],
    computed: {
      myArr: function () {
        if(Object.prototype.toString.apply(this.tabData)=="[object Array]"){
          this.tabData.forEach(v => {
            this.$set(v, 'flag', false);
          });
        }else{
           return;
        }
        let obj = {
          value: '全部',
          key: '-1',
          id: '-1',
          flag: false
        };
        this.tabData.unshift(obj);
        return this.tabData;
      }
    },
    data: function () {
      return {}
    },
    methods: {
      labelClick(item) {
        this.myArr.forEach(v => {
          if(v.key!=item.key){
             v.flag = false;
          }
        })
        item.flag = !item.flag;
        let key = item.key !== '-1'&&item.flag ? [item.key] : [];
        let value = item.flag ? [item.value] :[];
        let obj = {
          curItem: {
            value: value,
            key: key
          },
          index: this.tabIndex,
          data: this.myArr
        }
        this.$emit('labelclick', obj);
      },
      labelClickMu(item) {
        if (item.key != '-1') {
          item.flag = !item.flag;
          let arr = this.myArr.slice(1);
          this.myArr[0].flag = arr.every(v => {
            return v.flag == true;
          })
        }
        if (item.key == '-1') {
          if (item.flag == true) {
            this.myArr.map(element => {
              element.flag = false;
            });
          } else {
            this.myArr.map(element => {
              element.flag = true;
            });
          }
        }
        let chooseValueArr = [];
        let chooseKeyArr = [];
        if (!this.myArr[0]['flag']) {
          this.myArr.forEach(v => {
            if (v.flag) {
              chooseValueArr.push(v.value);
            }
          });
          this.myArr.forEach(v => {
            if (v.flag) {
              chooseKeyArr.push(v.key);
            }
          });
        } else {
          chooseValueArr = ['全部'];
          chooseKeyArr = [];
        }

        let obj = {
          curItem: {
            value: chooseValueArr,
            key: chooseKeyArr
          },
          index: this.tabIndex,
          data: this.myArr
        }
        this.$emit('labelclick', obj);
      },
      reset() {
        this.myArr.forEach(v => {
          v.flag = false;
        });
      }
    }

  }
</script>
<style lang="scss">
</style>
<style scoped lang="scss">
  .label-wrapper {
    width: 100%;
    display: inline-block;

    .label {
      height: 50px;
      display: inline-flex;
      align-items: center;
      padding: 10px 15px;
      margin: 0 10px;
      font-size: 14px;
      cursor: pointer;
    }

    .active {
      color: #1280f1;
      background-image: linear-gradient(0,#fff 20%, #f1f8ff 20%, #f1f8ff 80%,#fff 80%);
    }
  }

</style>
