import React from 'react';
import style from './ProgressIndicator.module.css';

export function ProgressIndicator() {
  return (
    <div className={style.progressContainer}>
      <p>Loading...</p>
    </div>
  );
}
