import React from 'react';
import { Product } from '../../utils/productsData';
import style from './ProductCard.module.css';

export function ProductCard({ id, images, title, description, price }: Product) {
  return (
    <div className={style.card} id={`${id}`}>
      <img className={style.img} src={images[0]} alt={title} loading="lazy" />
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <div className={style.cardFooter}>
        <p className={style.price}>{`$${price}`}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
