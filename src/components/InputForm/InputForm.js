 import React, {  useRef,useState } from "react";
 import './InputForm.css';
 const InputForm=(props)=>{
    // const[productId,changeProductId]=useState('');
    // const[productName,changeProductName]=useState('');
    // const[productPrice,changeProductPrice]=useState('');
    const[formIsValid,formValidation]=useState(true);
    const productNameRef=useRef()
    const productPriceRef=useRef();
    const productIdRef=useRef()
    const submitHandler=(e)=>{
        e.preventDefault();
        const productName=productNameRef.current.value;
        const productId=productIdRef.current.value;
        const productPrice=productPriceRef.current.value;        
        if(productId.trim().length<1){
            formValidation(false)
           return productIdRef.current.focus();
        }
        else if(productPrice.trim().length<1){
            formValidation(false)
           return productIdRef.current.focus()
        }
        else if(productName.trim().length<1){
            formValidation(false)
            return productNameRef.current.focus();
        }
        formValidation(true)
        const obj={
            productId:productId,
            productName:productName,
            productPrice:+productPrice
        }
        localStorage.setItem(productId,JSON.stringify(obj))
        props.onSubmitForm(obj);
        productNameRef.current.value='';
        productIdRef.current.value='';
       productPriceRef.current.value='';

        
    }
    // const productIdHandler=(e)=>{
    //     changeProductId(e.target.value)
    // }
    // const productNameHandler=(e)=>{
    //     changeProductName(e.target.value)
    // }

    // const productPriceHandler=(e)=>{
    //     changeProductPrice(e.target.value)
    // }
    return(
            <form className={formIsValid===false?'isInvalid':''} onSubmit={submitHandler}>
                <label>Product Id</label>
                <input type="number"
                ref={productIdRef}
                />
                <label>Selling Price</label>
                <input type="number"
                ref={productPriceRef}
                 />
                <label>Product Name</label>
                <input type="text"
                ref={productNameRef}
                />
                <button >Add Product</button>
            </form>
    )
 }
 export default InputForm; 