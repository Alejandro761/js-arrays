const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(element => element.id == '🍕')
if (productIndex != -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1) //splice quita un elmento, le dice de que indice al cual quieres eliminar
}
console.log("myProducts", myProducts);
console.log("products", products);


const newProducts = products.slice(productIndex, 1) //slice no modifica el original
console.log(newProducts);
console.log("products", products);

const updates = {
    id: '🥞',
    changes: {
        price: 2584,
        description: 'joder que rico'
    }
}

const index = products.findIndex(element => element.id == updates.id)
products[index] = {
    ...products[index],
    ...updates.changes  
} 
console.log(products)

//reto
const updates2 = {
    id: '🍔',
    changes: {
        price: 761,
        description: 'wacala'
    }
}
const indexHamburguesa = products.findIndex(element => element.id == updates2.id);

const newProduct = {
    ...products[indexHamburguesa],
    ...updates2.changes
}

products.push(newProduct);
console.log(products)