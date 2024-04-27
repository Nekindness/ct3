import React, { useState, useEffect } from 'react';
import ProductList from './Productlist';
import style from './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      const productsData = data.products;
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = (productToDelete) => {
    setProducts(products.filter((product) => product !== productToDelete));
  };

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <header class='flexbox'>
        <h1>Apel phones</h1>
        <button onClick={scrollToFooter}>Scroll to Footer</button>
      </header>
      <main>
        <ProductList products={products} onDelete={deleteProduct} />
      </main>
      <footer>
        <p>© 2024 магазин каких то телефонов.</p>
      </footer>
    </div>
  );
};

export default App;
