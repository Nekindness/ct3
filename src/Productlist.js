import React from 'react';
import ProductItem from './productitems';
import style from './App.css';

const ProductList = ({ products, onDelete }) => {
  // Функция для обработки удаления продукта
  const handleDelete = (product) => {
    onDelete(product);
  };

  return (
    <div className="product-list">
      {/* Отображение списка продуктов */}
      {products.map((product, index) => (
        <ProductItem key={index} product={product} onDelete={() => handleDelete(product)} />
      ))}
    </div>
  );
};

export default ProductList;