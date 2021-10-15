import React from 'react';
import Loader from 'react-loaders';
import LoadingStyle from './style';

const Loading = () => {
  return (
    <LoadingStyle>
      <Loader type="ball-pulse" />
    </LoadingStyle>
  );
};

export default Loading;
