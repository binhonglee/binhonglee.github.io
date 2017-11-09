<template>
  <div class="genericboxes defaultboxes">
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
.grouptexts {
    text-align: left;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
