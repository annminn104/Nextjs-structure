import { NextImage } from '@components/shared';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import authService from '@services/authServices';
import React, { useCallback, useEffect, useState } from 'react';

const DashBoardPage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const [isLoanding, setIsLoanding] = useState(false);
  // const isAuthenticated = authService.isAuthenticated();

  const checkIsAuthenticated = useCallback(async () => {
    if (authService.isAuthenticated()) {
      authService
        .profile()
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoanding(true);
        });
    }
  }, []);

  useEffect(() => {
    checkIsAuthenticated();
  }, [checkIsAuthenticated]);

  return (
    <React.Fragment>
      <h1>DashBoard Page</h1>
      <p>{!isLoanding ? 'loading' : user.email}</p>

      <NextImage
        src="https://images.unsplash.com/photo-1671119725691-33ea61e73499"
        alt="Description of image"
        width={500}
        height={600}
      />
      {/* <NextImage
        src="https://images.unsplash.com/photo-1671119725691-33ea61e73499"
        alt="image"
        width={500}
        height={800}
        placeholder="empty"
        // layout="intrinsic"
        fallback="random thing"
        unoptimized={true}
      /> */}
    </React.Fragment>
  );
};

export default DashBoardPage;
