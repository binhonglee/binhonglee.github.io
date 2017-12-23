<template>
    <div class="infobox">
        <a href="https://binhong.me">
            <img class="img-circle" src="https://binhonglee.github.io/images/profile.jpg" style="border-radius: 50%; width: 200px; margin-bottom: 0px; color: #04B45F;"/>
            <h1>{{ name }}</h1>
        </a>
        <div class="titles">
            Siri Language Engineer @ Apple Inc.<br>B.Sc. Software Engineering, Arizona State University
        </div>
        <div class="icons">
            <a href="https://www.facebook.com/binhonglee">
                <i class="fa fa-facebook-official"></i>
            </a>
            <a href="https://www.github.com/binhonglee">
                <i class="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/binhonglee">
                <i class="fa fa-linkedin"></i>
            </a>
            <a href="https://www.twitter.com/binhonglee">
                <i class="fa fa-twitter"></i>
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
@import url('../../font-awesome/styles.css');
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

h1:hover {
    color:turquoise;
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
    width: 200px;
    word-spacing: 8px;
}

.fa {
    color: #ffffff;
    font-size: 38px;
}
</style>
