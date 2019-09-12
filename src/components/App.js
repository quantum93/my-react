import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';

import Error404 from './Error404';
import NewKegControl from './NewKegControl';
import Moment from 'moment';

import Admin from './Admin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { masterKegList: [] };
    // this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList = (newKeg) => {
    var newMasterKegList = this.state.masterKegList.slice();
    newKeg.formattedWaitTime = (newKeg.timeOpen).fromNow(true)
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  componentDidMount = () => {
    this.waitTimeUpdateTimer = setInterval( () => this.updateKegElapsedWaitTime(), 60000 );
  }

  updateKegElapsedWaitTime = () => {
     console.log("check");
     let newMasterKegList = this.state.masterKegList.slice();
     newMasterKegList.forEach( (keg) => keg.formattedWaitTime = (keg.timeOpen).fromNow(true) );
     this.setState({masterKegList: newMasterKegList})
   }

   componentWillUnmount = () => { clearInterval(this.waitTimeUpdateTimer); }

  render() {
    return(
      <div>
      <Header />
      <Switch>
      <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
      <Route exact path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
      <Route exact path='/admin' render={()=><Admin kegList={this.state.masterKegList} />} />
      <Route component={Error404} />
      </Switch>
      </div>
    );
  }
}

export default App;
