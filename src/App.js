import React, { useState, useEffect } from 'react';
import ProductList from './Productlist';
import style from './App.css';

const App = () => {
  // Состояние products и функция setProducts для его обновления
  const [products, setProducts] = useState([]);

  // Эффект, который вызывается после первого рендера компонента
  useEffect(() => {
    fetchProducts();
  }, []);

  // Асинхронная функция для получения данных с API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      // Извлекаем массив products из данных API
      const productsData = data.products;
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Функция для удаления продукта из списка
  const deleteProduct = (productToDelete) => {
    setProducts(products.filter((product) => product !== productToDelete));
  };

  // Функция для прокрутки к футеру страницы
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