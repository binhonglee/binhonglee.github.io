import { expect } from "chai";
import Vue from "vue";
import BulletedTextBox from "@/components/BulletedTextBox";

function createComponent(items) {
  const Constructor = Vue.extend(BulletedTextBox);
  const vm = new Constructor({
    propsData: items
  }).$mount();
  return vm;
}

function getRenderedText(items) {
  return createComponent(items).$el.textContent;
}

function getLineHeight(items) {
  return createComponent(items).lineHeight;
}

describe("BulletedTextBox", () => {
  it(`empty box`, () => {
    expect(
      getRenderedText({
        items: {}
      })
    ).to.equal("");
  });

  it(`1 item with 2 details`, () => {
    expect(
      getRenderedText({
        items: {
          name: "title",
          things: [
            {
              primary: "Primary string",
              secondary: "Secondary string",
              date: "Date string",
              details: ["Point 1", "Point 2"]
            }
          ]
        }
      })
    ).to.equal(
      "titlePrimary string - Secondary string(Date string)Point 1Point 2"
    );
  });

  it(`1 item with no detail`, () => {
    expect(
      getRenderedText({
        items: {
          name: "title",
          things: [
            {
              primary: "Primary string",
              secondary: "Secondary string",
              date: "Date string"
            }
          ]
        }
      })
    ).to.equal("titlePrimary string - Secondary string(Date string)");
  });

  it(`3 items with 2 details each`, () => {
    expect(
      getRenderedText({
        items: {
          name: "title",
          things: [
            {
              primary: "Primary string1",
              secondary: "Secondary string1",
              date: "Date string1",
              details: ["Point 1 of 1", "Point 2 of 1"]
            },
            {
              primary: "Primary string2",
              secondary: "Secondary string2",
              date: "Date string2",
              details: ["Point 1 of 2", "Point 2 of 2"]
            },
            {
              primary: "Primary string3",
              secondary: "Secondary string3",
              date: "Date string3",
              details: ["Point 1 of 3", "Point 2 of 3"]
            }
          ]
        }
      })
    ).to.equal(
      "titlePrimary string1 - Secondary string1(Date string1)Point 1 of 1Point 2 of 1Primary string2 - Secondary string2(Date string2)Point 1 of 2Point 2 of 2Primary string3 - Secondary string3(Date string3)Point 1 of 3Point 2 of 3"
    );
  });

  it(`'wide' box by default`, () => {
    expect(
      getLineHeight({
        items: {}
      })
    ).to.equal("wide");
  });

  it(`'wide' box by when specified`, () => {
    expect(
      getLineHeight({
        items: {},
        lineHeight: "wide"
      })
    ).to.equal("wide");
  });

  it(`'close' box by when specified`, () => {
    expect(
      getLineHeight({
        items: {},
        lineHeight: "close"
      })
    ).to.equal("close");
  });

  let threeItemObject = {
    name: "title",
    things: [
      {
        primary: "Primary string1",
        secondary: "Secondary string1",
        date: "Date string1"
      },
      {
        primary: "Primary string2",
        secondary: "Secondary string2",
        date: "Date string2"
      },
      {
        primary: "Primary string3",
        secondary: "Secondary string3",
        date: "Date string3"
      }
    ]
  };

  it(`3 items with no details (default)`, () => {
    let current = {
      items: threeItemObject
    };
    expect(getLineHeight(current)).to.equal("wide");
    expect(getRenderedText({ items: threeItemObject })).to.equal(
      "titlePrimary string1 - Secondary string1(Date string1)Primary string2 - Secondary string2(Date string2)Primary string3 - Secondary string3(Date string3)"
    );
  });

  it(`3 items with no details (wide)`, () => {
    let current = {
      items: threeItemObject,
      lineHeight: "wide"
    };
    expect(getLineHeight(current)).to.equal("wide");
    expect(getRenderedText(current)).to.equal(
      "titlePrimary string1 - Secondary string1(Date string1)Primary string2 - Secondary string2(Date string2)Primary string3 - Secondary string3(Date string3)"
    );
  });

  it(`3 items with no details (close)`, () => {
    let current = {
      items: threeItemObject,
      lineHeight: "close"
    };
    expect(getLineHeight(current)).to.equal("close");
    expect(getRenderedText(current)).to.equal(
      "titlePrimary string1 - Secondary string1(Date string1)Primary string2 - Secondary string2(Date string2)Primary string3 - Secondary string3(Date string3)"
    );
  });
});
