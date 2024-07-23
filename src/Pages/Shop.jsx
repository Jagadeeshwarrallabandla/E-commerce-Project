import React from 'react';
import './Shop.css';
import { products } from '../Data/ProductsData.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
  return (
    <div>
      <div className='background_image'>
      </div>
      <div className='inputs'>
      <h2>Products</h2>
      <input type="text" placeholder='Enter Product Name'/>
      </div>
      <div className='Shop-Styling'>
      {
        products.filter(furniture => furniture.category === "sofa")
        .map((sofas,index) =>(
          <div className='box'>
            <img src={sofas.imgUrl} alt={sofas.productName} />
            <h6>{sofas.productName}</h6>
            <p className='rating'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <div className='price-plus'>
                  <h3>₹{sofas.price}</h3>
                  <FontAwesomeIcon icon={faPlus} className='plus'/>
                </div>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Shop;
