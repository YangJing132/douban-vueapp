<template>
  <div class="download-app">
    <div class="info">
      <img src="src/assets/images/douban-app-logo.png" alt="下载豆瓣">
      <div class="info-content">
        <strong>豆瓣</strong>
        <div>我们的精神角落</div>
      </div>
    </div>
    <a href="#">去 App Store 免费下载 iOS 客户端</a>
  </div>
</template>

<script>
  export default {
    name: 'download-app',
    data () {
      return {}
    }
  }
</script>

<style scoped>
.download-app {
  padding: 0 0 .2rem 0;
  margin-top: .5rem;
  margin-bottom: .3rem;
  text-align: center;
  font-size: .15rem;
}

.info {
  margin: 0 auto .15rem;
  overflow: hidden;
  text-align: left;
  font-size: .14rem;
  display: inline-block;
  color: #111;
}

img {
  float: left;
  width: .48rem;
  height: .48rem;
  margin-right: .12rem;
}

.info-content {
  overflow: hidden;
}

strong {
  font-size: .24rem;
  font-weight: normal;
  line-height: .28rem;
}

.download-app a:last-child {
  display: block;
  color: #42bd56;
  text-decoration: none;
}
</style>
