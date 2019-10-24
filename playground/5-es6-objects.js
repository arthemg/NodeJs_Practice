const name = 'Artsem'
const userAge = 32

const user = {
    name,
    age: userAge,
    location: 'California'
}

console.log(user)


//Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock
const {label: productLabel, stock, rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating) //will be undefined since it's not in the object

const transaction = (type, {label, stock} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)