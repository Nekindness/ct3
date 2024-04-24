import React from 'react';
import Stars from './Stars';
import style from './App.css';

const ProductItem = ({ product, onDelete }) => {
  // Деструктуризация свойств продукта
  const { title, images, price, rating } = product;

  return (
    <div className="product-item" onDoubleClick={() => onDelete(product)}>
      {/* Отображение изображения продукта */}
      <img src={images[0]} alt={title} />
      {/* Отображение названия продукта */}
      <h3>{title}</h3>
      {/* Отображение цены продукта */}
      <p>{price}$</p>
      {/* Отображение рейтинга продукта с помощью компонента Stars */}
      <Stars rating={rating} />
    </div>
  );
};

export default ProductItem;