import { expect } from "chai";
import Vue from "vue";
import GenericBoxes from "@/components/GenericBoxes";

function createComponent(items) {
  const Constructor = Vue.extend(GenericBoxes);
  const vm = new Constructor({
    propsData: items,
  }).$mount();
  return vm;
}

function getRenderedText(items) {
  return createComponent(items).$el.textContent;
}

describe("GenericBoxes", () => {
  it("empty box", () => {
    expect(
      getRenderedText({
        items: {},
      })
    ).to.equal("");
  });

  it("boxes with no name and 2 lines of things", () => {
    expect(
      getRenderedText({
        items: {
          things: ["Thing 1", "Thing 2"],
        },
      })
    ).to.equal("Thing 1Thing 2");
  });

  it("boxes with name 0 things", () => {
    expect(
      getRenderedText({
        items: {
          name: "title",
        },
      })
    ).to.equal("title");
  });

  it("boxes with name and 2 lines of things", () => {
    expect(
      getRenderedText({
        items: {
          name: "title",
          things: ["Thing 1", "Thing 2"],
        },
      })
    ).to.equal("titleThing 1Thing 2");
  });
});
