import React, { createElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, FormCard, Message } from '../../components';
import { RootState } from '../../store';
import style from './formPage.module.css';
import { FormCardProps } from '../../components/FormCard/FormCard';

export function FormPage() {
  const { forms } = useSelector((state: RootState) => state);
  const [messageText, setMessageText] = useState('');

  const showMessage = (): void => {
    setMessageText('Form has been saved!');
    setTimeout(() => {
      setMessageText('');
    }, 3000);
  };

  return (
    <main className="form">
      <div className="container">
        <h1>Form Page</h1>
        <section className={style.formSection}>
          <Form showMessage={showMessage} />
          <Message text={messageText} />
        </section>
        <section className={style.formCardsSection}>
          {forms.map((formCard: FormCardProps) => {
            return createElement(FormCard, { ...formCard, key: formCard.id, id: formCard.id });
          })}
        </section>
      </div>
    </main>
  );
}
