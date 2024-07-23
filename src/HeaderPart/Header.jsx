import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../AddProduct/AddtoCart';

const Header = () => {
  const { getCartCount } = useContext(CartContext);

  return (
    <div className='Header-card'>
      <div className='Header-image'>
        <FontAwesomeIcon icon={faBagShopping} className='icon' />
        <span><p><Link to="/">Mart</Link></p></span>
      </div>
      <div className='Header-list'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><FontAwesomeIcon icon={faUser} /></li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className='cart-count'>{getCartCount()}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;


