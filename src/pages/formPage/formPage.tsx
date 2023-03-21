// import { Header } from '../../components';
import React from 'react';
import style from './formPage.module.css';
import { Form } from '../../components';

export class FormPage extends React.Component {
  render() {
    return (
      <main className="form">
        <div className="container">
          <h1>Form Page</h1>
          <section className={style.formSection}>
            <Form />
          </section>
          <section className={style.formCardsSection}></section>
        </div>
      </main>
    );
  }
}
