import React from 'react';
import NewKegForm from './NewKegForm'
import ConfirmationQuestions from './ConfirmationQuestions';

class NewKegControl extends React.Component {

  constructor (props) {
    super(props);
    this.state = {formVisibleOnPage: false};
    // this.handleClick = this.handleClick.bind(this);
  }

  handleTroubleshootingConfirmation = () => { this.setState({formVisibleOnPage: true}); }

  render() {

    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewKegForm />;
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

export default NewKegControl;
