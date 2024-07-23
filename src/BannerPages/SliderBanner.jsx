import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {SliderData} from '../Data/SliderData.jsx'
import './SliderBanner.css'


const SliderBanner = () => {
    return (
        <div>
            <Carousel>
                {SliderData.map((slide, index) => (
                    <Carousel.Item key={slide.id} interval={800}>
                        
                       
                            <div className='Carousel'>
                                <div className='Carousel-Desc'>
                                    <h3 dangerouslySetInnerHTML={{ __html: slide.title }}></h3>
                                    <p dangerouslySetInnerHTML={{ __html: slide.desc }}></p>
                                    <button>Visit Collections</button>
                                </div>
                                <div className='Carousel-img'>
                                <img src={slide.cover} alt={`Slide ${index}`} />
                                </div>
                            </div>
                        

                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default SliderBanner;
