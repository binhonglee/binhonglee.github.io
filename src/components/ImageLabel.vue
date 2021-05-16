<template>
  <div class="imagelabel defaultboxes">
    <h2>{{ items.name }}</h2>
    <div class="left-lining">
      <a
        class="images"
        v-for="item in items.things"
        v-bind:key="item.primary"
        :href="item.url"
      >
        <img :src="item.image" />
        <p class="primary" v-html="item.primary" />
        <p class="secondary" v-html="item.secondary" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "imagelabel",
  props: {
    items: {
      type: Object,
    },
  },
};
</script>

<style scoped>
img {
  max-width: 300px;
  max-height: 160px;
}

p {
  margin: 0px;
}

.images {
  width: 300px;
  text-align: center;
  display: inline-block;
  margin: 15px 11px 15px 11px;
}

.left-lining {
  text-align: center;
  align-content: left;
  align-items: left;
}

.primary {
  font-weight: bold;
}
</style>
