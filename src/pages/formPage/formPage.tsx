import React from 'react';
import style from './formPage.module.css';
import { Form, Message } from '../../components';

export interface FormPageProps {
  [key: string]: string;
}

export interface FormPageStateProps {
  formCardsArr: JSX.Element[];
  messageText: string;
}

export class FormPage extends React.Component<FormPageProps, FormPageStateProps> {
  constructor(props: FormPageProps) {
    super(props);
    this.updateFormPageState = this.updateFormPageState.bind(this);
    this.state = {
      formCardsArr: [],
      messageText: '',
    };
  }

  updateFormPageState(form: JSX.Element): void {
    this.setState({
      formCardsArr: this.state.formCardsArr.concat(form),
      messageText: 'Form has been saved!',
    });
    setTimeout(() => {
      this.setState({ messageText: '' });
    }, 3000);
  }

  render() {
    return (
      <main className="form">
        <div className="container">
          <h1>Form Page</h1>
          <section className={style.formSection}>
            <Form updateFormPageState={this.updateFormPageState} />
            <Message text={this.state.messageText} />
          </section>
          <section className={style.formCardsSection}>
            {this.state.formCardsArr.map((formCard: JSX.Element) => formCard)}
          </section>
        </div>
      </main>
    );
  }
}
