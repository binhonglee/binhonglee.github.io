<template>
  <div class="infobox">
    <img
      class="img-circle"
      src="images/profile.png"
      style="
        border-radius: 50%;
        width: 200px;
        margin-bottom: 0px;
        color: #04b45f;
      "
    />
    <h1>{{ name }}</h1>
    <div class="titles">Just some guy wandering on the internet.</div>
    <div class="icons">
      <a href="https://www.facebook.com/binhonglee">
        <i class="fab fa-facebook-square"></i>
      </a>
      <a href="https://www.github.com/binhonglee">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://binhong.me/blog">
        <i class="fas fa-blog"></i>
      </a>
      <a href="https://keybase.io/binhonglee">
        <i class="fab fa-keybase"></i>
      </a>
      <a
        href="https://drive.google.com/file/d/0BxDXwYis6WZSWmtvN0Z5a3Q2eTA/view?usp=sharing"
      >
        <i class="far fa-file-pdf"></i>
      </a>
      <a href="https://www.linkedin.com/in/binhonglee">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://www.twitter.com/binhonglee">
        <i class="fab fa-twitter"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "infobox",
  data() {
    return {
      name: "BinHong Lee",
    };
  },
};
</script>

<style scoped>
@import url("../../node_modules/@fortawesome/fontawesome-free/css/all.css");
.infobox {
  margin-top: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  background: black;
}

h1 {
  font-family: "Fira Sans", sans-serif;
  font-size: 35px;
  font-weight: bold;
  margin: 5px;
  color: #04b45f;
}

.titles {
  color: #fff;
  font-family: "Oxygen";
  font-size: 20px;
}

.icons {
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 320px;
  word-spacing: 8px;
}

.fab,
.far {
  color: #ffffff;
  font-size: 38px;
  margin: 5px;
}

.fas {
  color: #ffffff;
  font-size: 35px;
  margin: 5px;
}
</style>
