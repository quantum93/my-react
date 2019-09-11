import React from 'react';

class NewKegControl extends React.Component {

  constructor (props) {
    super(props);
    this.state = {formVisibleOnPage: false};
  }

  handleClick = () => {
    console.log('Hey, you clicked me! I do not have code to change my state quite yet, but I will in a moment!');
  }

  render() {
    return (
      <div>
        <p>This is the NewKegControl component!</p>
        <strong onClick={this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default NewKegControl;
