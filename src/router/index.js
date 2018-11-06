import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from '../components/pages/home';
import Blog from '../components/pages/blog';
import Work from '../components/pages/work';
import Contact from '../components/pages/contact';
import NotFound from '../components/pages/notfound';

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/work/" component={Work} />
        <Route path="/contact/" component={Contact} />
        <Route render={() => <NotFound />} />
      </Switch>
    </Router>
  )
}

export default Navigation;
