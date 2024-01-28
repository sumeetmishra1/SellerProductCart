import Product from "./Product"
import'./Product.css';
import React from "react";
const ProductList=(props)=>{
    let totalPrice=0;
    return (
        <React.Fragment>
            <h1>Product List</h1>
        <ul className="list-item">
        {props.Products.map((product)=>{
             totalPrice+=product.productPrice;
            return <Product key={product.productId} product={product} onDelete={props.onDeleteProduct} />
           
        })}
        </ul>
        <h2>Total Price - ${totalPrice}</h2>
        </React.Fragment>
    )
}
export default ProductList;