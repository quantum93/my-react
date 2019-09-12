import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const NewKegForm = (props) => {
  let _kegName = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _pints = null;

  const handleNewKegFormSubmission = (event) => {
    event.preventDefault();

    props.onNewKegCreation({
      kegName: _kegName.value,
      brand: _brand.value,
      price: _price.value,
      alcoholContent: _alcoholContent.value,
      pints: _pints.value,
      id: v4()
    });

    _kegName.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _pints.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input type='text' id='kegName' placeholder='Keg name' ref={(input) => {_kegName = input;}}/>
        <input type='text' id='brand' placeholder='brand of Keg' ref={(input) => {_brand = input;}}/>
        <input type='number' step="0.01" id='price' placeholder='Keg price' ref={(input) => {_price = input;}}/>
        <input type='number' step="0.01" id='alcoholContent' placeholder='%' ref={(input) => {_alcoholContent = input;}}/>
        <input type='number' id='pints' placeholder='Pints' ref={(input) => {_pints = input;}}/>
        <button type='submit'>Add new Keg!</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
