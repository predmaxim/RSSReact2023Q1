import React from 'react';
import style from './FormCard.module.css';

export interface FormCardProps {
  id: number;
  avatar: string;
  name: string;
  surname: string;
  borthdate: string;
  city: string;
  sex: string;
}

export class FormCard extends React.Component<FormCardProps> {
  render() {
    return (
      <div className={style.card} id={`${this.props.id}`}>
        <img className={style.img} src={this.props.avatar} alt={this.props.name} loading="lazy" />
        <h3 className={style.name}>{this.props.name}</h3>
        <p className={style.surname}>{this.props.surname}</p>
        <p className={style.borthdate}>{`$${this.props.borthdate}`}</p>
        <p className={style.city}>{`$${this.props.city}`}</p>
        <p className={style.sex}>{`$${this.props.sex}`}</p>
      </div>
    );
  }
}
