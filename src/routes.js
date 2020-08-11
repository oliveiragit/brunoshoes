import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ThankYou from './Pages/ThankYou';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />:
      <Route path="/thankyou" component={ThankYou} />
    </Switch>
  );
}
