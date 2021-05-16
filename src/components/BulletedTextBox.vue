<template>
  <div class="bulletedtextbox defaultboxes">
    <h2>{{ items.name }}</h2>
    <div class="left-lining">
      <div
        v-bind:class="lineHeight"
        v-for="item in items.things"
        v-bind:key="item.primary + item.secondary + item.date"
      >
        <div class="itemTitleRow">
          <div
            class="itemTitle"
            v-if="item.primary === ''"
            v-html="item.secondary"
          />
          <div class="itemTitle" v-else>
            <b v-html="item.primary" /> -
            <p v-html="item.secondary" />
          </div>
          <div class="date">
            <i>({{ item.date }})</i>
          </div>
        </div>
        <ul class="itemDetailList">
          <li
            class="itemDetails"
            v-for="detail in item.details"
            v-bind:key="detail"
            v-html="detail"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bulletedtextbox",
  props: {
    items: {
      type: Object,
    },
    lineHeight: {
      type: String,
      default: "wide",
    },
  },
  mounted: function () {},
};
</script>

<style scoped>
.wide {
  text-align: left;
  padding: 10px 0 10px 0;
}

.close {
  text-align: left;
  padding: 1px 0 1px 0;
}

.itemTitle {
  display: inline-block;
}

p {
  margin: 0px;
  display: inline;
}

.itemTitle {
  font-size: 18px;
  line-height: 30px;
  margin: 5px;
}

.itemDetailList {
  display: block;
  max-width: 925px;
}

.itemDetails {
  font-size: 15px;
  line-height: 20px;
  margin: 0px;
}

.itemTitleRow {
  display: block;
  width: 100%;
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
