import React from 'react'
import SliderBanner from '../BannerPages/SliderBanner';
import CardsBanner from '../BannerPages/CardsBanner';
import DiscountBanner from '../BannerPages/DiscountBanner';
import ArrivalBanner from '../BannerPages/ArrivalBanner';

const Home = () => {
  return (
    <div>
      <SliderBanner />
      <CardsBanner />
      <DiscountBanner />
      <ArrivalBanner />
      
    </div>
  )
}

export default Home
