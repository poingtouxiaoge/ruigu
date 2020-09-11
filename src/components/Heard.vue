<template>
  <div class="main">
    <div class="loge">
      <img src="../assets/imgs/logo.jpg" alt />
    </div>
    <div class="title">
      <p>首页</p>
      <p>新闻</p>
      <p>案例</p>
      <p>商品</p>
      <p>售后</p>
      <p>联系</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.main {
  display: flex;
  justify-content: space-between;
}
.title {
  width: 80%;
  padding: 10px 10%;
  background: #000;
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  color: #fff;
}
p {
  margin-left: 20px;
}
p:hover {
  cursor: pointer;
  color: yellow;
}
.loge {
  width: 18%;
  padding: 10px 10%;
  background: #000;
  cursor: pointer;
}
.loge > img {
  width: 100%;
}
</style>