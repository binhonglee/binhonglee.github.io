import Vue from 'vue'
import Heading from '@/components/Heading'

describe('Infobox', () => {
  const Constructor = Vue.extend(Heading)
  const vm = new Constructor({
  }).$mount()

  it('Just Heading', () => {
    expect(vm.$el.textContent).to.equal('Top Bottom | Blog PDF')
  })
})
