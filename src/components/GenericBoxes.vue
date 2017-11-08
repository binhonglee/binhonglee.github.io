<template>
  <div class="genericboxes">
      <h2>{{items.name}}</h2>
      <div class="left-lining">
          <div class="grouptexts" v-for="item in items.things" v-bind:key="item" v-html="item"/>
      </div>
  </div>
</template>

<script>
export default {
    name: 'genericboxes',
    props: {
        items: {
            type: Object
        }
    }  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Oxygen');
.genericboxes {
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

.grouptexts {
    text-align: left;
    padding-top: 10px;
    padding-bottom: 10px;
}

h2 {
    font-family: 'Fira Sans';
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -0.5px;
    margin: 0px;
}
</style>
