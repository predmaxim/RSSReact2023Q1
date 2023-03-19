import React from 'react';
import { Product } from '../../utils/productsData';
import style from './ProductCard.module.css';

export class ProductCard extends React.Component<Product> {
  render() {
    return (
      <div className={style.card}>
        <img
          className={style.img}
          src={this.props.images[0]}
          alt={this.props.title}
          loading="lazy"
        />
        <h3 className={style.title}>{this.props.title}</h3>
        <p className={style.description}>{this.props.description}</p>
        <div className={style.cardFooter}>
          <p className={style.price}>{`$${this.props.price}`}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  }
}
