<template>
  <div class="cond-tag_wrap">
    <div
      class="cond-tag"
      :class="[
      type ? 'cond-tag-' + type : '',
      {
        'is-circle': circle,
        'on' : item.on
      }
    ]"
      v-for="(item, index) in condTag"
      :key="index"
      @click="addCond(item, index)"
    >
      {{ item.value }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      condTag: {
        type: [Object, Array],
        required: true
      },
      idIndex: {
        type: Number
      },
      type:{
        type: String,
        default: ''
      },
      circle: Boolean,
      selectMode: {
        type: String,
        default: 'single' // multiple多选
      }
    },
    data() {
      return {
        chooseIndex: '',
        condChooseArr: [],
        chooseTagArr: []// 选中tag的数组chooseTagArr[0]
      }
    },
    mounted() {
      this.condTag.forEach((item, i) => {
        // if (item.on == true) {
        //   console.log('12313123123123',item)
        //   this.addCond(item, i)
        // }
      })
    },
    methods: {
      // 点击判断是否存在，不存在添加选中的值到arr，存在删除
      // 点击全部无法取消，点击其它则取消全部，当全部取消可再次点击
      addCond(item, index) {
        let repeatIndex = ''
        let curItem = item
        let keys = []
        if (this.selectMode == 'multiple') {

        } else if (this.selectMode == 'single') {
          // 取消全部选中
          this.condTag.forEach((e, i) => {
            this.$set(this.condTag[i], 'on', false)
          })
        }

        // 选中当前项
        // curItem.on = true
        this.$set(curItem, 'on', !curItem.on)
        this.$set(this.condTag, index, {...curItem})
        if (this.chooseTagArr.length == 0) {

        } else {
          // 再次点击相同选中项
          this.chooseTagArr.filter((e, i) => {
            if (e.id === curItem.id) {
              repeatIndex = i
            }
          })
        }

        // 出现重复删除
        if (repeatIndex !== '') {
          this.chooseTagArr.splice(repeatIndex, 1)
          /* curItem.on = false
          this.$set(this.condTag, index, {...curItem}) */
        } else {
          if (this.selectMode == 'multiple') {

          } else if (this.selectMode == 'single') {
            this.chooseTagArr.splice(0, this.chooseTagArr.length)
          }
          if (curItem.value != '全部' && curItem.on) {
            this.chooseTagArr.push(curItem)// 未重复添加
          }
        }
        console.log('curItem==>', curItem);
        // 取出keys
        this.chooseTagArr.forEach((item, index) => {
          keys.push(item.key)
        })
        this.$emit('cond-click', {val: this.chooseTagArr, index: this.idIndex, keys: keys, curItem: curItem})
      },
      // 重置
      resetCondition() {
        // 取消全部选中
        this.condTag.forEach((e, i) => {
          this.$set(this.condTag[i], 'on', false)
        })
        this.chooseTagArr = []
      }
    }
  }
</script>

<style lang="scss">
  .cond-tag_wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    .cond-tag {
      padding: 0 15px;
      height: 36px;
      display: flex;
      align-items: center;
      margin: 2.5px 5px 2.5px 5px;
      color: #666;
      cursor: pointer;
      user-select: none;

      &:first-child{
        margin-left: 0;
      }

      &:last-child{
        margin-right: 0;
      }

      &.on {
        color: #1280f1;
        background-color: #f1f8ff;
      }

      &.cond-tag-plain{
        color: #606060;
        border: 1px solid #e7e7e7;
        background-color: #fff;
      }

      &.cond-tag-plain.on {
        color: #1280f1;
        border: 1px solid #1280f1;
        background-color: #fff;
      }
    }

  }

  .is-circle {

  }
</style>
