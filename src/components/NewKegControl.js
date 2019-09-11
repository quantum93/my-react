import React from 'react';

class NewKegControl extends React.Component {

  constructor (props) {
    super(props);
    this.state = {formVisibleOnPage: false};
  }

  render() {
    return (
      <div>
        <p>This is the NewKegControl component!</p>
      </div>
    );
  }
}

export default NewKegControl;
