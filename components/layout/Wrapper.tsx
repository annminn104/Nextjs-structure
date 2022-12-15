import { IWrapperProps } from '@interfaces/layout';
import React from 'react';
import styles from './Wrapper.module.scss';

export const Wrapper = ({ children, ...props }: IWrapperProps) => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>{children}</div>
    </React.Fragment>
  );
};
