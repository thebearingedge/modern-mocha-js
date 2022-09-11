import { expect } from 'chai'
import { add } from './index.js'

describe('add(x, y)' , () => {

  it('returns the sum of x and y', () => {
    expect(add(2, 3)).to.equal(5)
  })

})
