import React, { useContext } from 'react';
import './BestSales.css'
import { products } from '../Data/ProductsData'
import { CartContext } from '../AddProduct/AddtoCart.jsx'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons'

const BestSales = () => {
    const { addToCart } = useContext(CartContext); 
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div className='Best-Styling'>
      <h2>Best Sales</h2>
      <div className='B-style'>
        {
            products.filter(chairs => chairs.category === "sofa" || chairs.category === "chair" )
            .map((furniture,index)=>(
                <div className='box' key={index}>
                     <div className='discount-heart'>
                        <FontAwesomeIcon icon={faHeart} className='heart-icon' />
                     </div>
                    <img src={furniture.imgUrl} alt={furniture.productName} />
                    <h6>{furniture.productName}</h6>

                    <p className='rating'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                <div className='price-plus'>
                  <h3>₹{furniture.price}</h3>
                  <FontAwesomeIcon icon={faPlus} className='plus' onClick={() => handleAddToCart(furniture)}/>
                </div>

                </div>
            ))
        }
      </div>
    </div>
  )
}

export default BestSales

