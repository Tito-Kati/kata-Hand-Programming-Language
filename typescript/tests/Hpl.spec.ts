import { Hpl as Hpl } from '../src/Hpl'

describe('HPL', () => {
  it('should interpretate A', () => {
    const hpl = Hpl.create();

    expect(hpl.run('👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👊'))
        .toBe('A')
  })
})
