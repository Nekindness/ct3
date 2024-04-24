import React from 'react';
import style from './App.css'

const Stars = ({ rating }) => {
  // Создаем пустой массив для хранения звезд
  const stars = [];
  // Используем цикл для создания звезд в соответствии с рейтингом
  for (let i = 1; i <= 5; i++) {
    // Если текущий индекс меньше или равен рейтингу, добавляем активную звезду
    if (i <= rating) {
      stars.push(<span key={i} className="fa fa-star active"></span>);
    } else {
      // Иначе добавляем неактивную звезду
      stars.push(<span key={i} className="fa fa-star"></span>);
    }
  }
  // Возвращаем JSX-код с звездами, обернутыми в div
  return <div>{stars}</div>;
};

export default Stars;