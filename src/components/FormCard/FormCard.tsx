import React from 'react';
import style from './FormCard.module.css';

export interface FormCardProps {
  id: number;
  avatar: string;
  firstname: string;
  lastname: string;
  birthday: string;
  city: string;
  gender: string;
}

export class FormCard extends React.Component<FormCardProps> {
  render() {
    return (
      <div className={style.card} id={`${this.props.id}`}>
        <p>{this.props.avatar}</p>
        <h3 className={style.name}>
          {this.props.firstname} {this.props.lastname}
        </h3>
        <p className={style.birthday}>{this.props.birthday}</p>
        <p className={style.city}>{this.props.city}</p>
        <p className={style.gender}>{this.props.gender}</p>
      </div>
    );
  }
}
