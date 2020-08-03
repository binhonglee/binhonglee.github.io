import { expect } from "chai";
import Vue from "vue";
import Heading from "@/components/Heading";

describe("Heading", () => {
  const Constructor = Vue.extend(Heading);
  const vm = new Constructor({}).$mount();

  it("Just Heading", () => {
    expect(vm.$el.textContent).to.equal("TopBottom|BlogPDF");
  });
});
