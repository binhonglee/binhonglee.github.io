<template>
    <div class="bulletedtextbox defaultboxes">
        <h2>{{items.name}}</h2>
        <div class="left-lining">
            <div v-bind:class="items.name" v-for="item in items.things" v-bind:key="item.primary">
                <p v-if="item.primary === ''" v-html="item.secondary"/>
                <p v-else><b v-html="item.primary"/> - <p v-html="item.secondary"/></p>
                <i class="date">({{item.date}})</i>
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
      },
      lineHeight: {
          type: String,
          default: 'wide'
      }
  },
  mounted: function () {
    var toChange = document.getElementsByClassName(this.items.name)
    while (toChange.length > 0) {
        if (this.lineHeight == 'close') {
            toChange[0].className = 'closeItems';
        } else {
            toChange[0].className = 'wideItems';
        }
    }
  }
}
</script>

<style scoped>
.wideItems {
    text-align: left;
    padding: 10px 0 10px 0;
}

.closeItems {
    text-align: left;
    padding: 1px 0 1px 0
}

p {
    margin: 0px;
    display:inline
}

a {
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
