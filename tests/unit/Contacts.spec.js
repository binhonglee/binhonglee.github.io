import { expect } from "chai";
import Vue from "vue";
import Contacts from "@/components/Contacts";

describe("Contacts", () => {
  const Constructor = Vue.extend(Contacts);
  const vm = new Constructor({}).$mount();

  it("Just Contacts", () => {
    expect(vm.$el.textContent).to.equal("Contact me");
  });
});
