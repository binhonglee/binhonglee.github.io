import { expect } from "chai";
import Vue from "vue";
import ImageLabel from "@/components/ImageLabel";

function createComponent(items) {
  const Constructor = Vue.extend(ImageLabel);
  const vm = new Constructor({
    propsData: items,
  }).$mount();
  return vm;
}

function getRenderedText(items) {
  return createComponent(items).$el.textContent;
}

describe("ImageLabel", () => {
  it(`empty box`, () => {
    expect(
      getRenderedText({
        items: {},
      })
    ).to.equal("");
  });

  it(`1 image with info`, () => {
    expect(
      getRenderedText({
        items: {
          name: "title",
          things: [
            {
              url: "https://breakups.life",
              image: "https://binhong.me/images/breakups.PNG",
              primary: "Primary string",
              secondary: "Secondary string",
            },
          ],
        },
      })
    ).to.equal("titlePrimary stringSecondary string");
  });

  it(`1 image with no info`, () => {
    expect(
      getRenderedText({
        items: {
          name: "title",
          things: [
            {
              url: "https://breakups.life",
              image: "https://binhong.me/images/breakups.PNG",
            },
          ],
        },
      })
    ).to.equal("title");
  });

  it(`3 images with info`, () => {
    expect(
      getRenderedText({
        items: {
          name: "title",
          things: [
            {
              url: "https://breakups.life",
              image: "https://binhong.me/images/breakups.PNG",
              primary: "Primary string1",
              secondary: "Secondary string1",
            },
            {
              url: "https://breakups.life",
              image: "https://binhong.me/images/breakups.PNG",
              primary: "Primary string2",
              secondary: "Secondary string2",
            },
            {
              url: "https://breakups.life",
              image: "https://binhong.me/images/breakups.PNG",
              primary: "Primary string3",
              secondary: "Secondary string3",
            },
          ],
        },
      })
    ).to.equal(
      "titlePrimary string1Secondary string1Primary string2Secondary string2Primary string3Secondary string3"
    );
  });

  it(`3 images with no info`, () => {
    expect(
      getRenderedText({
        items: {
          name: "title",
          things: [
            {
              url: "https://breakups.life",
              image: "https://binhong.me/images/breakups.PNG",
            },
            {
              url: "https://breakups.life",
              image: "https://binhong.me/images/breakups.PNG",
            },
            {
              url: "https://breakups.life",
              image: "https://binhong.me/images/breakups.PNG",
            },
          ],
        },
      })
    ).to.equal("title");
  });
});
