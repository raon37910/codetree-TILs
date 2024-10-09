class Product {
    constructor(name='codetree', code='50') {
        this.name = name
        this.code = code
    }
}

let [name, code] = require('fs').readFileSync(0).toString().trim().split(' ')
const p = new Product(name, code)
const defaultProduct = new Product()
const products = [defaultProduct, p]

for(const product of products) {
    console.log(`product ${product.code} is ${product.name}`)
}