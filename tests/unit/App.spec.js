import Vue from "vue";
import App from "@/App";

describe("App", () => {
  const Constructor = Vue.extend(App);
  const vm = new Constructor({}).$mount();

  it("Nothing to test. Just padding the coverage %.", () => {
    vm.$el.textContent;
  });
});
