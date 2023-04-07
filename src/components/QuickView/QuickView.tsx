import React from 'react';
import { Product } from '../../utils/api';
import style from './QuickView.module.css';

export interface QuickViewProps {
  setQuickView: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
}

export function QuickView({
  setQuickView,
  product: { images, title, description, price, rating, category, stock },
}: QuickViewProps) {
  const closePopup = () => setQuickView(false);

  return (
    <>
      <div className={style.card}>
        <button className={style.close} onClick={closePopup}>
          x
        </button>
        <div className={style.imgContainer}>
          <img className={style.img} src={images[0]} alt={title} loading="lazy" />
        </div>
        <div>
          <h3 className={style.title}>{title}</h3>
          <p className={style.category}>{category}</p>
          <p className={style.description}>{description}</p>
          <p className={style.rating}>Rating: {rating}</p>
          <p className={style.stock}>Stock: {stock}</p>
          <div className={style.col1}>
            <p className={style.price}>${price}</p>
            <button className={style.addToCartBtn}>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className={style.overlay} onClick={closePopup} />
    </>
  );
}
