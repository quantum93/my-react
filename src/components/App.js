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
    // this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList = (newKeg) => {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render() {
    return(
      <div>
      <Header />
      <Switch>
      <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
      <Route exact path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
      <Route component={Error404} />
      </Switch>
      </div>
    );
  }
}

export default App;
