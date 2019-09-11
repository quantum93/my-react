import React from 'react';

const NewKegForm = () => {
  return (
    <div>
      <form>
        <input type='text' id='kegName' placeholder='Keg name'/>
        <input type='text' id='brand' placeholder='brand of Keg'/>
        <input type='number' id='price' placeholder='Keg price'/>
        <input type='number' id='alcoholContent' placeholder='%'/>
        <input type='number' id='pints' placeholder='Pints'/>
        <button type='submit'>Add new Keg!</button>
      </form>
    </div>
)}

export default NewKegForm;
