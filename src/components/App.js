import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import NewKegControl from './NewKegControl';

function App() {
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route exact path='/newkeg' component={NewKegForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
