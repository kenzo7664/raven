import { SolidButton } from 'components/Common/Button';
import React from 'react';
import HomePageStyle from './style';

const HomePage = () => {
  return (
    <HomePageStyle>
      {/* <h1>Welcome to Raven</h1> */}
      <SolidButton label="Welcome to Raven" />
    </HomePageStyle>
  );
};

export default HomePage;
