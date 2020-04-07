import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';

function App () {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route render={() => <div>no encontrada</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
