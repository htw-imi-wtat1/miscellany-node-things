const keygen = require('keygenerator')
describe('keygenerator',()=>{
  it("generates session key",()=>{
    const key = keygen.session_id()
    console.log('your key: ' + key)
    expect(key.length).toBe(32)
  })
})
