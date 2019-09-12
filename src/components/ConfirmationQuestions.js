import React from 'react';
import PropTypes from 'prop-types';

const ConfirmationQuestions = (props) => {
  return (
    <div>
      <p>Have you gone through all the current keg list on the main page?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
