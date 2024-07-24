import React, { useState, useContext } from 'react';
import './Shop.css';
import { products } from '../Data/ProductsData.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../AddProduct/AddtoCart.jsx'; 
import Footer from '../BannerPages/Footer.jsx';

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  // Filter products based on search term and selected category
  const filteredProducts = products
    .filter(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product =>
      selectedCategory === '' || product.category.toLowerCase() === selectedCategory.toLowerCase()
    );

  return (
    <div>
      <div className='background_image'></div>
      <div className='inputs'>
        <h2>Products</h2>
        <input 
          type="text" 
          placeholder='Enter Product Name' 
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul className='filter'>
        <li onClick={toggleDropdown} className='filter-item'>
          Filter {selectedCategory ? `(${selectedCategory})` : ''} &#x25BE;
          <ul className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <li onClick={() => handleCategoryChange('sofa')}>Sofa</li>
            <li onClick={() => handleCategoryChange('mobiles')}>Mobiles</li>
            <li onClick={() => handleCategoryChange('chairs')}>Chairs</li>
            <li onClick={() => handleCategoryChange('watches')}>Watches</li>
          </ul>
        </li>
      </ul>
      <div className='Shop-Styling'>
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product, index) => (
            <div className='box' key={index}>
              <img src={product.imgUrl} alt={product.productName} />
              <h6>{product.productName}</h6>
              <p className='rating'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              <div className='price-plus'>
                <h3>₹{product.price}</h3>
                <FontAwesomeIcon icon={faPlus} className='plus' onClick={() => handleAddToCart(product)}/>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
