import { IFooterProps } from '@interfaces/layout';
import React from 'react';
import styles from './Footer.module.scss';

export const Footer = (props: IFooterProps) => {
  return (
    <React.Fragment>
      <footer className={styles.footer}>FOOTER</footer>
    </React.Fragment>
  );
};
