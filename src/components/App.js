import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';

function App() {
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route exact path='/newkeg' component={NewKegForm} />
      </Switch>
    </div>
  );
}

export default App;
