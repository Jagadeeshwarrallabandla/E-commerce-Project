import React, { useContext } from 'react';
import { products } from '../Data/ProductsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons'
import './ArrivalBanner.css';
import { CartContext } from '../AddProduct/AddtoCart.jsx'; 

const ArrivalBanner = () => {
  const { addToCart } = useContext(CartContext); 
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div className='Arrival-Styling'>
      <h2>New Arrivals</h2>
      <div className='Mobile-Styling ' >
      {
        products.filter(items => items.category === "mobile" ||    items.category === "wireless")
        .map((mobiles,index)=>(
            <div className='box' key={index}>

            <div className='discount-heart'>
              {/* <div className='off'>{mobiles.discount}% off</div> */}
              <FontAwesomeIcon icon={faHeart} className='heart-icon' />
            </div>

            <img src={mobiles.imgUrl} alt={mobiles.productName} className='image-styling' />
            <h6>{mobiles.productName}</h6>



            <p className='rating'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <div className='price-plus'>
                  <h3>₹{mobiles.price}</h3>
                  <FontAwesomeIcon icon={faPlus} className='plus' onClick={() => handleAddToCart(mobiles)}/>
                </div>

              </div>


        ))
      }
      </div>
    </div>
  )
}


export default ArrivalBanner
