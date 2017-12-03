<template>
  <div class="heading">
    <nav id="menu" class="menu">
      <ul class="menu-list">
        <li class="items"><a href="#top">Top</a></li>
        <li class="items"><a href="#bottom">Bottom</a></li>
        <li class="items">|</li>
        <li class="items"><a href="https://blog.binhong.me/">Blog</a></li>
        <li class="items"><a href="https://drive.google.com/file/d/0BxDXwYis6WZSWmtvN0Z5a3Q2eTA/view?usp=sharing">PDF</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'heading'
}
</script>

<style scoped>
.heading {
  font-family: 'Fira Sans';
  height: 35px;
  background-color: #036564;
  float: left;
  position: fixed;
}

.menu {
  margin-top: -10px;
  margin-left: -20px;
  font-size: 18px;
}

.items {
  color: #ffffff;
  display: inline-block;
  vertical-align: top;
  margin-right: 1rem;
}
.items:last-of-type {
  margin-right: 20px;
}

a {
  color: #ffffff;
}

a:hover,
a:focus {
  color: #000000;
}
</style>
