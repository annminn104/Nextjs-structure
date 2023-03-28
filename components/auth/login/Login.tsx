import { useAppDispatch, useAppSelector } from '@hooks/store';
import { mockupAuth } from '@mocks/auth';
import { userLogin } from '@stores/actions/auth';
import { useRouter } from 'next/router';
import React from 'react';
import './Login.module.scss';

export const Login = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = () => {
    dispatch(userLogin(mockupAuth))
      .unwrap()
      .then((res) => {
        console.log('dev-test');
        router.push('/dashboard');
      })
      .catch((err) => {
        console.log(err.message, user.error);
      });
  };

  return (
    <React.Fragment>
      <h3>Login</h3>
      <button onClick={onSubmit}>Login</button>
      <p>{user.loading ? 'loading...' : user.email}</p>
    </React.Fragment>
  );
};
