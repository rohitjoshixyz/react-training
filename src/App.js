import React from 'react';
import Greet from './components/Greet'
import productList from './productList'
import ProductList from './components/ProductList'

function App() {
  console.log(productList)
  return (
    <div className="App">
      <Greet name="Rohit" surname="Joshi"/>
      {productList.map((product) => <h5>{product.name}</h5>)}
      <ProductList />
    </div>
  );
}

export default App;
