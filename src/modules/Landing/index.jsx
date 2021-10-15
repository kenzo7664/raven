import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { landingRoutes } from 'routes/routes-list';
import Loading from 'components/Loading';
const HomePage = React.lazy(() => import('./pages/HomePage'));

const Landing = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route
        path={landingRoutes.homePage}
        render={(props) => <HomePage {...props} />}
      />
      <Redirect to={landingRoutes.homePage} />
    </Switch>
  </Suspense>
);

export default Landing;
