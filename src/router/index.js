import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import NProgress from 'nprogress';

import Home from '../components/pages/home';
import Work from '../components/pages/work';
import Contact from '../components/pages/contact';

Router.onRouteChangeStart = (url) => {
  console.log(`Loading ${url}`)
  NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work/" component={Work} />
        <Route path="/contact/" component={Contact} />
      </Switch>
    </Router>
  )
}

export default Navigation;
