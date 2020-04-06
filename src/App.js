import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

function App () {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route render={() => <div>no encontrada</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
