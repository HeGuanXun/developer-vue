<template>
  <div class="collapse-panel">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    componentName: 'CollapsePanel',
    props: {
      accordion: {
        type: Boolean
      },
      value: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        activeNames: [].concat(this.value)
      };
    },
    created() {
      this.$on("item-click", this.handleItemClick);
    },
    provide() {
      return {
        collapse: this
      };
    },
    watch: {
      value(value) {
        this.activeNames = [].concat(value);
      }
    },
    methods: {
      setActiveNames(activeNames) {
        // console.log('setActiveNames', activeNames)
        activeNames = [].concat(activeNames);
        let value = this.accordion ? activeNames[0] : activeNames;
        this.activeNames = activeNames;
        this.$emit("input", value);
        this.$emit("change", value);
      },
      handleItemClick(item) {
        // console.log('handleItemClick',item)
        // console.log('this.activeNames', this.activeNames)
        // console.log('handleItemClick accordion', this.accordion)
        if (this.accordion) {
          this.setActiveNames(
            (this.activeNames[0] || this.activeNames[0] === 0) &&
            this.activeNames[0] === item.name.toString()
              ? "" : item.name.toString()
          );
        } else {
          // console.log('this.activeNames', this.activeNames)
          let activeNames = this.activeNames.slice(0);
          let index = activeNames.indexOf(item.name.toString());

          if (index > -1) {
            activeNames.splice(index, 1);
          } else {
            activeNames.push(item.name.toString());
          }
          this.setActiveNames(activeNames);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
