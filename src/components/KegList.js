import React from 'react';
import Keg from './Keg';

// let masterKegList = [
//   {kegName: "Ginger Fixx", brand: "Lion Heart", price: 4.50, alcoholContent: 3, pints: 3},
//   {kegName: "Lemon Ginger", brand: "Humm", price: 3.50, alcoholContent: 0, pints: 86},
//   {kegName: "Original", brand: "Kevita Master Brew", price: 5.00, alcoholContent: 0, pints: 124},
//   {kegName: "Ginger Devil", brand: "Brew Dr.", price: 3.79, alcoholContent: 10, pints: 30},
// ]

const KegList = () => {

  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg kegName={keg.kegName}
             brand={keg.brand}
             price={keg.price}
             alcoholContent={keg.alcoholContent}
             pints={keg.pints}
             key={index} />
      )}
    </div>
)}

export default KegList;
