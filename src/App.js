import InputForm from "./components/InputForm/InputForm";
import './App.css'
import Card from "./UI/Card/Card";
import ProductList from "./components/ProductList/ProductList";
import { useState } from "react";
function App() {
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

  return (
    <Card>
    <InputForm onSubmitForm={formSubmit}/>
    <ProductList Products={newProduct} onDeleteProduct={deleteProduct}/>
    </Card>
    
  );
}

export default App;
