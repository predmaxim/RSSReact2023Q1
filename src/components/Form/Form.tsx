import React, { useRef, useState } from 'react';
import style from './Form.module.css';
import { FormCard } from '../';
import { FormError } from './FormError';
import { validateFirstLetter, validateEmpty, validateChecked } from '../../utils';

export interface FormProps {
  updateFormPageState: (form: JSX.Element) => void;
}

export function Form({ updateFormPageState }: FormProps) {
  let count = 0;
  const formRef = useRef<HTMLFormElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const birthdayRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const agreementRef = useRef<HTMLInputElement>(null);

  const [avatar, setAvatar] = useState(true);
  const [firstname, setFirstname] = useState(true);
  const [lastname, setLastname] = useState(true);
  const [birthday, setBirthday] = useState(true);
  const [city, setCity] = useState(true);
  const [gender, setGender] = useState(true);
  const [agreement, setAgreementr] = useState(true);

  const validateResult = [avatar, firstname, lastname, birthday, city, gender, agreement];

  const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateResult.every((el: boolean): boolean => el === true)) {
      count++;
      const formCardProps = {
        key: count,
        id: count,
        avatar: (avatarRef.current as HTMLInputElement).value,
        firstname: (firstnameRef.current as HTMLInputElement).value,
        lastname: (lastnameRef.current as HTMLInputElement).value,
        birthday: (birthdayRef.current as HTMLInputElement).value,
        city: (cityRef.current as HTMLSelectElement).value,
        gender: maleRef.current?.checked ? 'male' : femaleRef.current?.checked ? 'female' : '',
      };
      updateFormPageState(<FormCard {...formCardProps} />);
      formRef.current?.reset();
    }
  };

  const onClickHandle = () => {
    setAvatar(validateEmpty((avatarRef.current as HTMLInputElement).value));
    setFirstname(validateFirstLetter((firstnameRef.current as HTMLInputElement).value));
    setLastname(validateFirstLetter((lastnameRef.current as HTMLInputElement).value));
    setBirthday(validateEmpty((birthdayRef.current as HTMLInputElement).value));
    setCity(validateEmpty((cityRef.current as HTMLSelectElement).value));
    setAgreementr(validateChecked([(agreementRef.current as HTMLInputElement).checked]));
    setGender(
      validateChecked([
        (maleRef.current as HTMLInputElement).checked,
        (femaleRef.current as HTMLInputElement).checked,
      ])
    );
  };

  return (
    <>
      <h2>Enter your data</h2>
      <form className={style.form} onSubmit={onSubmitHandle} ref={formRef}>
        <div className={style.row}>
          <label htmlFor="avatar">
            <span>Your avatar:* </span>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/jpeg,image/png,image/gif"
              ref={avatarRef}
              required
            />
            <FormError isValid={avatar} text="The field must not be empty" />
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
              ref={firstnameRef}
              required
            />
            <FormError isValid={firstname} text="First letter must be in Uppercase" />
          </label>

          <label htmlFor="lastname">
            <span>Last name:* </span>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last name"
              ref={lastnameRef}
              required
            />
            <FormError isValid={lastname} text="First letter must be in Uppercase" />
          </label>
        </div>

        <div className={style.row}>
          <label htmlFor="birthday">
            <span>Birthday:* </span>
            <input type="date" id="birthday" name="birthday" ref={birthdayRef} required />
            <FormError isValid={birthday} text="The field must not be empty" />
          </label>

          <label htmlFor="city">
            <span>Your city</span>
            <select name="city" id="city" ref={cityRef} required>
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
            <FormError isValid={city} text="The field must not be empty" />
          </label>
        </div>

        <div className={style.row}>
          <div>
            Gender:*
            <label htmlFor="male">
              <input type="radio" id="male" name="gender" value="male" ref={maleRef} />
              <span>Male</span>
            </label>
            <label htmlFor="female">
              <input type="radio" id="female" name="gender" value="female" ref={femaleRef} />
              <span>Female</span>
            </label>
            <FormError isValid={gender} text="The field must not be empty" />
          </div>
        </div>

        <label htmlFor="agreement">
          <span>I consent to my personal data*</span>
          <input type="checkbox" id="agreement" required ref={agreementRef} />
          <FormError isValid={agreement} text="The field must not be empty" />
        </label>

        <button className={style.button} onClick={onClickHandle}>
          Submit
        </button>
      </form>
    </>
  );
}
