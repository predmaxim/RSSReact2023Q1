import React, { LegacyRef } from 'react';
import style from './Form.module.css';

export interface FormProps {
  avatar: string;
}
export class Form extends React.Component {
  fileInput: LegacyRef<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.fileInput = React.createRef<HTMLInputElement>();
  }

  render() {
    return (
      <>
        <h2>Enter your data</h2>
        <form className={style.form}>
          <div className={style.row}>
            <label htmlFor="avatar">
              <span>Avatar:</span>
              <input type="file" name="avatar" id="avatar" ref={this.fileInput} />
            </label>
          </div>

          <div className={style.row}>
            <label htmlFor="name">
              <span>Name:</span>
              <input type="text" name="name" id="name" placeholder="Name" required />
            </label>

            <label htmlFor="surname">
              <span>Surname:</span>
              <input type="text" name="surname" id="surname" placeholder="Surname" />
            </label>
          </div>

          <div className={style.row}>
            <label htmlFor="borthdate">
              <span>Borthdate:</span>
              <input type="date" name="borthdate" id="borthdate" required />
            </label>

            <label htmlFor="city">
              <span>City:</span>
              <select name="city" id="city" required>
                <option value="Moscow">Moscow</option>
                <option value="St.Petersburg">St.Petersburg</option>
                <option value="Minsk">Minsk</option>
                <option value="Kiev">Kiev</option>
              </select>
            </label>
          </div>

          <div className={style.row}>
            <div>
              <label htmlFor="female">
                <span>Female</span>
                <input type="radio" name="sex" id="female" value="true" />
              </label>

              <label htmlFor="male">
                <span>Male</span>
                <input type="radio" name="sex" id="male" value="false" />
              </label>
            </div>

            <label htmlFor="agreement">
              <span> I consent to my personal data:</span>
              <input type="checkbox" name="agreement" id="agreement" required />
            </label>
          </div>

          <button type="submit" className={style.button}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
