import InputForm from "./components/InputForm/InputForm";
import './App.css'
import Card from "./UI/Card/Card";
import ProductList from "./components/ProductList/ProductList";
import { useContext } from "react";
import FormContext from "./components/store/form-context";
function App() {
  const ctx = useContext(FormContext)

  return (
    <Card>
    <InputForm onSubmitForm={ctx.onSubmit}/>
    <ProductList Products={ctx.Product} onDeleteProduct={ctx.onDelete}/>
    </Card>
    
  );
}

export default App;
