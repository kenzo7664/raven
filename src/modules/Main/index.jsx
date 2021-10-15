import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes } from 'routes/routes-list';
import Loading from 'components/Loading';
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

const Main = () => (
  <>
    {/* <Header />
    <Sidebar /> */}
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          path={privateRoutes.dashboard}
          render={(props) => <Dashboard {...props} />}
        />
        <Redirect to={privateRoutes.dashboard} />
      </Switch>
    </Suspense>
  </>
);

export default Main;
