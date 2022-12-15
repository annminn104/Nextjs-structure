import { Login } from '@components/auth';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Login />
    </React.Fragment>
  );
};

export default Home;
