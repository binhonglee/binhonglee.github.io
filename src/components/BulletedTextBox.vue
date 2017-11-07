<template>
    <div class="bulletedtextbox">
        <h2>{{items.name}}</h2>
        <div class="left-lining">
            <div class="items" v-for="item in items.things" v-bind:key="item.primary">
                <p v-if="item.primary === ''" v-html="item.secondary"/>
                <p v-else><b v-html="item.primary"/> - <a v-html="item.secondary"/></p>
                <i>({{item.date}})</i>
                <ul>
                    <li v-for="detail in item.details" v-bind:key="detail" v-html="detail"/>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'bulletedtextbox',
  props: {
      items: {
          type: Object
      }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Oxygen');
.bulletedtextbox {
    font-family: 'Oxygen';
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-top: 25px;
    padding-bottom: 5px;
}

.left-lining {
    border-left-width: 5px;
    border-left-style: solid;
    border-left-color: rgb(4, 180, 95);
    padding-left: 20px;
    margin: 10px 0 10px;
}

.items {
    text-align: left;
    padding: 8px 0 8px 0; 
}

h2 {
    font-family: 'Fira Sans';
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -0.5px;
    margin: 0px;
}

p {
    font-size: 17px;
    line-height: normal;
    margin: 0px;
}

ul {
    margin: 0px;
    padding-top: 5px;
}

li {
    font-size: 16px;
    padding-bottom: 5px;
}
</style>

