import React from 'react';
import style from './Message.module.css';

export interface MessageProps {
  text?: string;
}

export function Message({ text }: MessageProps) {
  return (
    <div className={text ? `${style.show}` : style.hide}>
      <p className={style.text}>{text}</p>
    </div>
  );
}
