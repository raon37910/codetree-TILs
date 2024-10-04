let c = require('fs').readFileSync(0).toString().trim()

if(c === 'z') {
    console.log('a')
} else {
    let code = c.charCodeAt()
    console.log(String.fromCharCode(code + 1))
}