import { IHeaderProps } from '@interfaces/layout';
import React from 'react';
import styles from './Header.module.scss';

export const Header = (props: IHeaderProps) => {
  return (
    <React.Fragment>
      <header className={styles.header}>HEADER</header>
    </React.Fragment>
  );
};
