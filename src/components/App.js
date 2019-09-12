import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';

import Error404 from './Error404';
import NewKegControl from './NewKegControl';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { masterKegList: [] };
  }

  render() {
    return(
      <div>
      <Header />
      <Switch>
      <Route exact path='/' component={KegList} />
      <Route exact path='/newkeg' component={NewKegControl} />
      <Route component={Error404} />
      </Switch>
      </div>
    );
  }
}

export default App;
