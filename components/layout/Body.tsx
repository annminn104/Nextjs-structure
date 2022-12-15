import { IBodyProps } from '@interfaces/layout';
import React from 'react';
import styles from './Body.module.scss';

export const Body = ({ children, ...props }: IBodyProps) => {
  return (
    <React.Fragment>
      <main className={styles.main}>{children}</main>
    </React.Fragment>
  );
};
