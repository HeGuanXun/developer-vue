<template>
  <div>
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img :src="material.img" class="image" />
      <div class="text">
        <p>{{ material.fileName }}</p>
        <h3>{{ material.title }}({{ material.type }})</h3>
        <span>{{ material.detail }}</span>
      </div>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
h3 {
  font-size: 14px;
  color: #333;
  font-weight: normal;
  margin-bottom: 5px;
}
.text {
  padding: 14px;
}
.el-card {
  cursor: pointer;
}
.el-card :hover {
  background: #1280f1;
}
.el-card :hover h3,
.el-card :hover span,
.el-card :hover p {
  color: #fff;
}
p {
  color: #1280f1;
  margin-bottom: 5px;
}
</style>
<script>
export default {
  data() {
    return {
      material: {
        fileName: "xxxx.docx",
        title: "素材标题",
        type: "素材类型",
        detail: "详情详情详情",
        img: require("../assets/img/judge/materialImg.jpg"),
      },
    };
  },
  methods: {},
  create() {},
};
</script>
