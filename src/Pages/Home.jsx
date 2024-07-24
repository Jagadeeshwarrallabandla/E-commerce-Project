import React from 'react'
import SliderBanner from '../BannerPages/SliderBanner';
import CardsBanner from '../BannerPages/CardsBanner';
import DiscountBanner from '../BannerPages/DiscountBanner';
import ArrivalBanner from '../BannerPages/ArrivalBanner';
import BestSales from '../BannerPages/BestSales';
import Footer from '../BannerPages/Footer';

const Home = () => {
  return (
    <div>
      <SliderBanner />
      <CardsBanner />
      <DiscountBanner />
      <ArrivalBanner />
      <BestSales />
      <Footer />
      
    </div>
  )
}

export default Home
