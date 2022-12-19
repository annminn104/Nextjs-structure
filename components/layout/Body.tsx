import { IBodyProps } from '@interfaces/layout';
import { Container } from '@mui/material';
import React from 'react';
import styles from './Body.module.scss';

export const Body = ({ children, ...props }: IBodyProps) => {
  return (
    <React.Fragment>
      <Container maxWidth="xl" component="main" className={styles.main}>
        {children}
      </Container>
    </React.Fragment>
  );
};
