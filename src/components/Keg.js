import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';

const Keg = (props) => {

  let myStyle = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    textAlign: 'center'
  }

  const kegInformation =
  <div style={myStyle}>
  <style jsx global> { `div {background-color: lightgreen;}` } </style>
  <p>{props.kegName}</p>
  <p>{props.brand}</p>
  <p>{props.price}</p>
  <p>{props.alcoholContent}</p>
  <p>{props.pints}</p>
  <h5>{props.formattedWaitTime} ago</h5>
  <hr/>
  </div>;

  console.log("This is kegInformation: ", kegInformation);

  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {alert('hey, you just clicked the keg belonging to ' + props.kegName);}}>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}

// const displayTimeOpen = (timeOpen) => { timeOpen.from(new Moment(), true); }

Keg.propTypes = {
  kegName: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
}

export default Keg;
