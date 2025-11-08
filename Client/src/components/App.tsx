import { useEffect, useState } from "react";
import { IProduct } from "../model/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";
import  ButtonUsage  from "./ButtonUsage";




function App() {

   const [products, setProducts] = useState<IProduct[]> ([]);
  

  useEffect(() => {
    fetch("http://localhost:5080/api/products")
   .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
    .then(setProducts)
    .catch(err => console.error('API error:', err));
  }, []);
 
  function addProduct() {
    setProducts([...products, 
      {
         id:Date.now(), 
         name: "product 4", 
         price :4000, 
         isActive:true
        }])
  }
  
  return (
    <>
     <Header products={products}/>
     <ProductList products={products} addProduct={addProduct}/>
     <ButtonUsage/>
    </>
    
  )
}
export default App
