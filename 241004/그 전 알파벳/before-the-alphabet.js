let c = require('fs').readFileSync(0).toString().trim()

if(c === 'a') {
    console.log('z')
} else {
    let code = c.charCodeAt()
    console.log(String.fromCharCode(code - 1))
}