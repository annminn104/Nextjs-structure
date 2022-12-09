import React from 'react';

type SkeletonProps = React.ComponentPropsWithoutRef<'div'>;

const Skeleton = ({ className, ...rest }: SkeletonProps) => {
  return (
    <React.Fragment>
      <div
        className={`${className}`}
        style={{
          backgroundImage:
            'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
          backgroundSize: '700px 100%',
          backgroundRepeat: 'no-repeat',
        }}
        {...rest}
      />
    </React.Fragment>
  );
};

export { Skeleton };
