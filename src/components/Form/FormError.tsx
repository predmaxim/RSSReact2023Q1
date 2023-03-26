/* eslint-disable prettier/prettier */
import React from 'react';

export interface FormErrorProps {
  isValid: boolean;
  text: string;
}

export class FormError extends React.Component<FormErrorProps> {
  render() {
    return (
      <p className={this.props.isValid ? 'hide' : 'error errorMessage'}>
        {this.props.text}
      </p>
    );
  }
}
