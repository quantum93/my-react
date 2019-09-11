import React from 'react';
import PropTypes from 'prop-types';

const Keg = (props) => { return (
  <div>
    <p>{props.kegName}</p>
    <p>{props.brand}</p>
    <hr/>
  </div>
)}

Keg.propTypes = {
  kegName: PropTypes.string,
  brand: PropTypes.string,
}
export default Keg;
