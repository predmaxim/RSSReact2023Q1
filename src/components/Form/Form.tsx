import React from 'react';
import style from './Form.module.css';
import { FormCard } from '../';
import { FormError } from './FormError';
import { validateFirstLetter, validateEmpty, validateChecked } from '../../utils';

export interface FormProps {
  updateFormPageState: (form: JSX.Element) => void;
}

export interface FormStateProps {
  validateResult: { [key: string]: boolean };
}

export class Form extends React.Component<FormProps, FormStateProps> {
  avatarRef = React.createRef<HTMLInputElement>();
  firstnameRef = React.createRef<HTMLInputElement>();
  lastnameRef = React.createRef<HTMLInputElement>();
  birthdayRef = React.createRef<HTMLInputElement>();
  cityRef = React.createRef<HTMLSelectElement>();
  maleRef = React.createRef<HTMLInputElement>();
  femaleRef = React.createRef<HTMLInputElement>();
  agreementRef = React.createRef<HTMLInputElement>();
  count = 0;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      validateResult: {
        avatar: true,
        firstname: true,
        lastname: true,
        birthday: true,
        city: true,
        gender: true,
        agreement: true,
      },
    };
  }

  clearForm = (): void => {
    (this.avatarRef.current as HTMLInputElement).value = '';
    (this.firstnameRef.current as HTMLInputElement).value = '';
    (this.lastnameRef.current as HTMLInputElement).value = '';
    (this.birthdayRef.current as HTMLInputElement).value = '';
    (this.cityRef.current as HTMLSelectElement).value = '';
    (this.maleRef.current as HTMLInputElement).checked = false;
    (this.femaleRef.current as HTMLInputElement).checked = false;
    (this.agreementRef.current as HTMLInputElement).checked = false;
  };

  onSubmitHandle = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (Object.values(this.state.validateResult).some((el: boolean) => el === false)) {
      return;
    }
    this.count++;
    this.props.updateFormPageState(
      <FormCard
        key={this.count}
        id={this.count}
        avatar={(this.avatarRef.current as HTMLInputElement).value}
        firstname={(this.firstnameRef.current as HTMLInputElement).value}
        lastname={(this.lastnameRef.current as HTMLInputElement).value}
        birthday={(this.birthdayRef.current as HTMLInputElement).value}
        city={(this.cityRef.current as HTMLSelectElement).value}
        gender={this.maleRef.current?.checked ? 'male' : 'female'}
      />
    );
    this.clearForm();
  };

  onClickHandle = () => {
    this.setState({
      validateResult: {
        avatar: validateFirstLetter((this.avatarRef.current as HTMLInputElement).value),
        firstname: validateFirstLetter((this.firstnameRef.current as HTMLInputElement).value),
        lastname: validateFirstLetter((this.lastnameRef.current as HTMLInputElement).value),
        birthday: validateEmpty((this.birthdayRef.current as HTMLInputElement).value),
        city: validateEmpty((this.cityRef.current as HTMLSelectElement).value),
        gender: validateChecked([
          (this.maleRef.current as HTMLInputElement).checked,
          (this.femaleRef.current as HTMLInputElement).checked,
        ]),
        agreement: validateChecked([(this.agreementRef.current as HTMLInputElement).checked]),
      },
    });
  };

  render() {
    return (
      <>
        <h2>Enter your data</h2>
        <form className={style.form} onSubmit={this.onSubmitHandle}>
          <div className={style.row}>
            <label htmlFor="avatar">
              <span>Your avatar:* </span>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/jpeg,image/png,image/gif"
                ref={this.avatarRef}
                required
              />
              <FormError
                isValid={this.state.validateResult.avatar}
                text="The field must not be empty"
              />
            </label>
          </div>

          <div className={style.row}>
            <label htmlFor="firstname">
              <span>First name:* </span>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name"
                ref={this.firstnameRef}
                required
              />
              <FormError
                isValid={this.state.validateResult.firstname}
                text="First letter must be in Uppercase"
              />
            </label>

            <label htmlFor="lastname">
              <span>Last name:* </span>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last name"
                ref={this.lastnameRef}
                required
              />
              <FormError
                isValid={this.state.validateResult.lastname}
                text="First letter must be in Uppercase"
              />
            </label>
          </div>

          <div className={style.row}>
            <label htmlFor="birthday">
              <span>Birthday:* </span>
              <input type="date" id="birthday" name="birthday" ref={this.birthdayRef} required />
              <FormError
                isValid={this.state.validateResult.birthday}
                text="The field must not be empty"
              />
            </label>

            <label htmlFor="city">
              <span>Your city</span>
              <select name="city" id="city" ref={this.cityRef} required>
                <option defaultValue="" value="">
                  -- Select your city --
                </option>
                <option defaultValue="Moscow" value="Moscow">
                  Moscow
                </option>
                <option defaultValue="Minsk" value="Minsk">
                  Minsk
                </option>
                <option defaultValue="Kiev" value="Kiev">
                  Kiev
                </option>
              </select>
              <FormError
                isValid={this.state.validateResult.city}
                text="The field must not be empty"
              />
            </label>
          </div>

          <div className={style.row}>
            <div>
              Gender:*
              <label htmlFor="male">
                <input type="radio" id="male" name="gender" value="male" ref={this.maleRef} />
                <span>Male</span>
              </label>
              <label htmlFor="female">
                <input type="radio" id="female" name="gender" value="female" ref={this.femaleRef} />
                <span>Female</span>
              </label>
              <FormError
                isValid={this.state.validateResult.gender}
                text="The field must not be empty"
              />
            </div>
          </div>

          <label htmlFor="agreement">
            <span>I consent to my personal data*</span>
            <input type="checkbox" id="agreement" required ref={this.agreementRef} />
            <FormError
              isValid={this.state.validateResult.agreement}
              text="The field must not be empty"
            />
          </label>

          <button className={style.button} onClick={this.onClickHandle}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
