import React from 'react';
import style from './Message.module.css';

export interface MessageProps {
  text?: string;
}

export class Message extends React.Component<MessageProps> {
  render() {
    return (
      <div
        className={this.props.text ? `${(style.active, style.textContainer)}` : style.textContainer}
      >
        <p className={style.text}>{this.props.text}</p>
      </div>
    );
  }
}
