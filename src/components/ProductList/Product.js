import './Product.css'
const Product=(props)=>{
    const deleteProduct=()=>{
        props.onDelete(props.product.productId)
}
    const product=props.product;
    return(
        <li> Id-{product.productId} Name-{product.productName}  Price-{product.productPrice} <button id={product.productId} onClick={deleteProduct}>Delete</button></li>
    )
}
export default Product;