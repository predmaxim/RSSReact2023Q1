import React from 'react';
import { Product } from '../../utils/productsData';
import style from './ProductCard.module.css';

export class ProductCard extends React.Component {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];

  constructor(props: Product) {
    super(props);
    const {
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    } = props;
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
    this.category = category;
    this.thumbnail = thumbnail;
    this.images = images;
  }

  render() {
    return (
      <div className={style.card}>
        <img className={style.img} src={this.images[0]} alt={this.title} loading="lazy" />
        <h3 className={style.title}>{this.title}</h3>
        <p className={style.description}>{this.description}</p>
      </div>
    );
  }
}
