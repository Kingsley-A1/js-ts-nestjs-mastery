//Spread Operator

import { console } from "inspector/promises"

//This means open and pour
type Product = {
    id: number,
    name: string,
    price: number,
    category: string
    instock: boolean
}
const products: Product[] =[
     {
    id: 1,
    name: "Laptop",
    price: 150000,
    category: "Electronics and Gadgets", 
instock: true}, {
    id: 2,
    name: "Samsung Galaxy S26 Utra",
    price: 120000,
    category: "Electronics and Gadgets", 
instock: true}, {
    id: 3,
    name: "Iphone 15 Pro Max",
    price: 250000,
    category: "Electronics and Gadgets", 
instock: true
}
    ]

    if(products.length === 0){
        throw new Error("No products available")
    }
    const firstProduct = products[0]!;

const createProductDto ={
    name: "Iphone 15 Pro Max",
    price: 250000,
    category: "Electronics and Gadgets", 
    instock: true
}

const newProduct: Product ={
    id: firstProduct.id + 1,
    ...createProductDto
}
const updatedProduct = [firstProduct, newProduct]
const discountedPrice = {
    ...firstProduct,
    price: firstProduct.price * 0.9
}
products.push(newProduct)
console.log("Updated Products:", products)
console.log("Discounted Price:", discountedPrice)
console.log("New Product:", newProduct)
console.log("Updated Product List:", updatedProduct)
    
