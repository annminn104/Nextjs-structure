import { useAppDispatch, useAppSelector } from '@hooks/store';
import { mockupAuth } from '@mocks/auth';
import { userLogin } from '@stores/actions/auth';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(userLogin(mockupAuth))
      .unwrap()
      .then((res) => {
        console.log(user, res);
      })
      .catch((err) => {
        console.log(err.message, user.error);
      });
  };
  return (
    <React.Fragment>
      <h1>Test login redux</h1>
      <button onClick={onSubmit}>Login</button>
      <p>{user.loading == true ? 'loading...' : user.email}</p>
    </React.Fragment>
  );
};

export default Home;
