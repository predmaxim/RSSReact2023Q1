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

export function FormCard({
  id,
  avatar,
  firstname,
  lastname,
  birthday,
  city,
  gender,
}: FormCardProps) {
  return (
    <div className={style.card} id={`${id}`}>
      <p>{avatar}</p>
      <h3 className={style.name}>
        {firstname} {lastname}
      </h3>
      <p className={style.birthday}>{birthday}</p>
      <p className={style.city}>{city}</p>
      <p className={style.gender}>{gender}</p>
    </div>
  );
}
