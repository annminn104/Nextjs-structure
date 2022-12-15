import { useAppDispatch, useAppSelector } from '@hooks/store';
import authService from '@services/authServices';
import React, { useCallback, useEffect, useState } from 'react';

const DashBoardPage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const [isLoanding, setIsLoanding] = useState(false);
  // const isAuthenticated = authService.isAuthenticated();

  const checkIsAuthenticated = useCallback(async () => {
    if (typeof window !== 'undefined') {
      console.log('You are on the browser');
      if (authService.isAuthenticated()) {
        await authService
          .profile()
          .then((res) => {})
          .catch((err) => {})
          .finally(() => {
            setIsLoanding(true);
          });
      }
    } else {
      console.log('You are on the server');
      // ⛔️ Don't use window here
    }
  }, []);

  useEffect(() => {
    checkIsAuthenticated();
  }, [checkIsAuthenticated]);

  return (
    <React.Fragment>
      <h1>DashBoard Page</h1>
      <p>{!isLoanding ? 'loading' : user.email}</p>
    </React.Fragment>
  );
};

export default DashBoardPage;
