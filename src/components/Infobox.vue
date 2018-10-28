<template>
    <div class="infobox">
        <img class="img-circle" src="https://binhong.me/images/profile.png" style="border-radius: 50%; width: 200px; margin-bottom: 0px; color: #04B45F;"/>
        <h1>{{ name }}</h1>
        <div class="titles">
            Full Stack | Machine Learning | Software Engineer
        </div>
        <div class="icons">
            <a href="https://www.facebook.com/binhonglee">
                <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.github.com/binhonglee">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://keybase.io/binhonglee">
                <i class="fab fa-keybase"></i>
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
  name: 'infobox',
  data () {
    return {
        name: 'BinHong Lee'
    }
  }
}
</script>

<style scoped>
@import url('../../font-awesome/css/all.css');
.infobox {
    margin-top: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    background: black;
}

h1 {
    font-family: 'Fira Sans', sans-serif;
    font-size: 35px;
    font-weight: bold;
    margin: 5px;
    color: #04B45F;
}

.titles {
    color: #fff;
    font-family: 'Oxygen';
    font-size: 20px;
}

.icons {
    margin-top: 10px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    width: 230px;
    word-spacing: 8px;
}

.fab {
    color: #ffffff;
    font-size: 38px;
}
</style>
