import React from 'react';

const NewKegForm = () => {
  let _kegName = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _pints = null;

  const handleNewKegFormSubmission = (event) => {
    event.preventDefault();
    console.log(_kegName.value);
    console.log(_brand.value);
    console.log(_price.value);
    console.log(_alcoholContent.value);
    console.log(_pints.value);
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
        <input type='number' id='price' placeholder='Keg price' ref={(input) => {_price = input;}}/>
        <input type='number' id='alcoholContent' placeholder='%' ref={(input) => {_alcoholContent = input;}}/>
        <input type='number' id='pints' placeholder='Pints' ref={(input) => {_pints = input;}}/>
        <button type='submit'>Add new Keg!</button>
      </form>
    </div>
)}

export default NewKegForm;
