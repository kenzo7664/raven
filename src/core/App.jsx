import React, { Suspense } from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import history from 'routes/history';
import { landingRoutes, authRoutes, privateRoutes } from 'routes/routes-list';
import PublicRoute from 'routes/publicroute';
import PrivateRoute from 'routes/privateroute';
import Loading from 'components/Loading';
import Landing from 'modules/Landing';
import Authorization from 'modules/Auth';
import Main from 'modules/Main';
import GlobalStyles from './Global';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loading />}>
        <Router history={history}>
          <Switch>
            <PublicRoute
              path={[landingRoutes.homePage]}
              exact
              component={Landing}
            />
            <PublicRoute
              restricted
              path={[authRoutes.signIn]}
              exact
              component={Authorization}
            />
            <PrivateRoute path={privateRoutes.dashboard} component={Main} />
            {/* for the main time  */}
            <Redirect to={privateRoutes.dashboard} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
