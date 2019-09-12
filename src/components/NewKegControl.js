import React from 'react';
import NewKegForm from './NewKegForm'
import ConfirmationQuestions from './ConfirmationQuestions';
import PropTypes from "prop-types";

class NewKegControl extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      // testState: 'hey!'
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleTroubleshootingConfirmation = () => {
    // this.state = {test: 'hey'};
    this.setState({formVisibleOnPage: true});
  }

  render() {

    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation} />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation} />;
    }

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation:PropTypes.func
};

export default NewKegControl;
