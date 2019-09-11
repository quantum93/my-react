import React from 'react';
import PropTypes from 'prop-types';

const Keg = (props) => {

  let myStyle = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    textAlign: 'center'
  }

  return (
  <div style={myStyle}>
    <p>{props.kegName}</p>
    <p>{props.brand}</p>
    <p>{props.price}</p>
    <p>{props.alcoholContent}</p>
    <p>{props.pints}</p>
    <hr/>
  </div>
)}

Keg.propTypes = {
  kegName: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number,
}
export default Keg;
