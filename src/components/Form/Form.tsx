import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { validateFirstLetter } from '../../utils';
import { FormCardProps } from '../../components/FormCard/FormCard';
import { setForms } from './FormSlice';
import style from './Form.module.css';

import { AnyType } from '../../utils/types';

import * as rtk from '@reduxjs/toolkit';
const { nanoid } = ((rtk as AnyType).default ?? rtk) as typeof rtk;

export interface FormProps {
  showMessage: () => void;
}

export function Form({ showMessage }: FormProps) {
  const dispatch = useDispatch();
  const [avatarFile, setAvatarFile] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormCardProps>();

  const onSubmitHandle: SubmitHandler<FormCardProps> = (data: FormCardProps): void => {
    const form = {
      ...data,
      id: nanoid(10),
      avatar: avatarFile,
      gender: data.gender,
    };
    dispatch(setForms(form));
    showMessage();
    reset();
  };

  const avatarOnChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAvatarFile(e.target?.files![0].name);
  };

  return (
    <>
      <h2>Enter your data</h2>
      <form className={style.form} onSubmit={handleSubmit(onSubmitHandle)}>
        <div className={style.row}>
          <label>
            <span>Your avatar:* </span>
            <input
              type="file"
              accept="image/*"
              {...register('avatar', {
                required: 'Choose an image',
                onChange: avatarOnChangeHandle,
              })}
            />
            {errors?.avatar?.message && <p className="error">{errors?.avatar?.message}</p>}
          </label>
        </div>

        <div className={style.row}>
          <label>
            <span>First name:* </span>
            <input
              type="text"
              placeholder="First name"
              {...register('firstName', {
                required: 'The field must not be empty',
                minLength: {
                  value: 3,
                  message: 'Enter minimum 3 letters',
                },
                validate: (value: string): boolean | string =>
                  validateFirstLetter(value) || 'First letter must be in Uppercase',
              })}
            />
            {errors?.firstName?.message && <p className="error">{errors?.firstName?.message}</p>}
          </label>

          <label>
            <span>Last name:* </span>
            <input
              type="text"
              placeholder="Last name"
              {...register('lastName', {
                required: 'The field must not be empty',
                minLength: {
                  value: 3,
                  message: 'Enter minimum 3 letters',
                },
                validate: (value: string): boolean | string =>
                  validateFirstLetter(value) || 'First letter must be in Uppercase',
              })}
            />
            {errors?.lastName?.message && <p className="error">{errors?.lastName?.message}</p>}
          </label>
        </div>

        <div className={style.row}>
          <label>
            <span>Birthday:* </span>
            <input
              type="date"
              {...register('birthday', {
                required: 'Select your birthday',
              })}
            />
            {errors?.birthday?.message && <p className="error">{errors?.birthday?.message}</p>}
          </label>

          <label>
            <span>Your city</span>
            <select
              {...register('city', {
                required: 'Select your city',
              })}
            >
              <option defaultValue="" value="">
                -- Select your city --
              </option>
              <option value="Moscow">Moscow</option>
              <option value="Minsk">Minsk</option>
              <option value="Kiev">Kiev</option>
            </select>
            {errors?.city?.message && <p className="error">{errors?.city?.message}</p>}
          </label>
        </div>

        <div className={style.row}>
          <div>
            Gender:*
            <label>
              <input
                type="radio"
                value="male"
                {...register('gender', {
                  required: 'Select your gender',
                })}
              />
              <span>Male</span>
            </label>
            <label>
              <input
                type="radio"
                value="female"
                {...register('gender', {
                  required: 'Select your gender',
                })}
              />
              <span>Female</span>
            </label>
            {errors?.gender?.message && <p className="error">{errors?.gender?.message}</p>}
          </div>
        </div>

        <label>
          <span>I consent to my personal data*</span>
          <input
            type="checkbox"
            {...register('agreement', {
              required: 'Accept the agreement!',
            })}
          />
          {errors?.agreement?.message && <p className="error">{errors?.agreement?.message}</p>}
        </label>

        <button className={style.button}>Submit</button>
      </form>
    </>
  );
}
