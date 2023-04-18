import React, { useState } from 'react';
import style from './ProductCard.module.css';
import { Product } from '../../utils/api';
import { QuickView } from '../../components';

export function ProductCard({
  id,
  images,
  title,
  description,
  price,
  rating,
  category,
  stock,
}: Product) {
  const [quickView, setQuickView] = useState(false);

  const onClickHandler = () => {
    setQuickView(true);
  };

  return (
    <>
      {quickView && (
        <QuickView
          setQuickView={setQuickView}
          product={{ id, images, title, description, price, rating, category, stock }}
        />
      )}
      <div className={style.card} id={`${id}`}>
        <div className={style.imgContainer}>
          <a href="#" onClick={onClickHandler}>
            <img className={style.img} src={images[0]} alt={title} loading="lazy" />
          </a>
        </div>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
      </div>
    </>
  );
}
