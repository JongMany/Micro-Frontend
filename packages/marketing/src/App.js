import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default function App() {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
}
