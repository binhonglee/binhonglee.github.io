import { expect } from "chai";
import Vue from "vue";
import Infobox from "@/components/Infobox";

describe("Infobox", () => {
  const Constructor = Vue.extend(Infobox);
  const vm = new Constructor({}).$mount();

  it("Just Infobox", () => {
    expect(vm.$el.textContent).to.equal(
      "BinHong LeeJust some guy wandering on the internet."
    );
  });
});
