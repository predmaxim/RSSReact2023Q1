import React, { useState } from 'react';
import style from './formPage.module.css';
import { Form, Message } from '../../components';

export function FormPage() {
  const [formCardsArr, setFormCardsArr] = useState<JSX.Element[]>([]);
  const [messageText, setMessageText] = useState('');

  const updateFormPageState = (form: JSX.Element): void => {
    setMessageText('Form has been saved!');
    setFormCardsArr(formCardsArr.concat(form));
    setTimeout(() => {
      setMessageText('');
    }, 3000);
  };

  return (
    <main className="form">
      <div className="container">
        <h1>Form Page</h1>
        <section className={style.formSection}>
          <Form updateFormPageState={updateFormPageState} />
          <Message text={messageText} />
        </section>
        <section className={style.formCardsSection}>
          {formCardsArr.map((formCard: JSX.Element) => formCard)}
        </section>
      </div>
    </main>
  );
}
