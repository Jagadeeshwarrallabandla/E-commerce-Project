import React from 'react';
import { IonIcon } from '@ionic/react';
import { serviceData } from '../Data/CardsData';
import './CardsBanner.css';

const CardsBanner = () => {
  return (
    <div className='Cards'>
      {serviceData.map((item, id) => (
        <div key={id} style={{ backgroundColor: item.bg }} className='Card-Child'>
          <IonIcon icon={item.icon} className='icon-style' />
          <h5>{item.title}</h5>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsBanner;
