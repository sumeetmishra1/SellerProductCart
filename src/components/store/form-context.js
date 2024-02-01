
import React,{useState} from "react";
const FormContext=React.createContext({
    Product:[],
    onSubmit:()=>{},
    onDelete:()=>{}
})
export const FormContextProvider=(props)=>{
    const[newProduct,changeProduct]=useState([]);
  const deleteProduct=(Id)=>{
    localStorage.removeItem(Id)
    changeProduct((oldproduct)=>{
      const updatedProducts=oldproduct.filter((product)=>{
        return product.productId !== Id
      })
      return updatedProducts
    })
  }
  const formSubmit=(obj)=>{
    changeProduct((oldProduct)=>{
      return[obj,...oldProduct];
    })
  }
  return <FormContext.Provider value={{Product:newProduct,onSubmit:formSubmit,onDelete:deleteProduct}}>{props.children}</FormContext.Provider>
}
export default FormContext; 