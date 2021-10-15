import { SolidButton } from 'components/Common/Button';
import React from 'react';
import Spacer from 'utils/spacer';
import Message  from './message/Message';
import DashboardStyle from './style';

const Dashboard = () => {
  return (
    <DashboardStyle>
      {/* <SolidButton label="Welcome to Raven" onClick={() => {}} /> */}
      <Message />
    </DashboardStyle>
  );
};

export default Dashboard;
