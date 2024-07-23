
import React, { useContext } from 'react';
import { discoutProducts } from '../Data/DiscountData.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import './DiscountBanner.css';
import { CartContext } from '../AddProduct/AddtoCart'; 

const DiscountBanner = () => {
  const { addToCart } = useContext(CartContext); 
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className='Discount-Styling'>
      <h2>Big Discounts</h2>
      <div className='Card-Style'>
        {discoutProducts.map((product, index) => (
          <div className='box' key={index}>
            <div className='discount-heart'>
              <div className='off'>{product.discount}% off</div>
              <FontAwesomeIcon icon={faHeart} className='heart-icon' />
            </div>
            <img src={product.imgUrl} alt={product.productName} className='image-styling' />
            <h6>{product.productName}</h6>
            <p className='rating'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <div className='price-plus'>
              <h3>₹{product.price}</h3>
              <FontAwesomeIcon 
                icon={faPlus} 
                className='plus' 
                onClick={() => handleAddToCart(product)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountBanner;


