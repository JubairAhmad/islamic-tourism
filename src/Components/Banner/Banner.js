import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../images/kaba.jpg';
import pic2 from '../../images/madina.jpeg';
import pic3 from '../../images/aqsa.jpg';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='container mt-2'>
            <Carousel fade className='banner-title'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height='500px'
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption className="banner-title">
      <div >
      <h3>Al-Ka'ba</h3>
      <p>The first Mosque(Prayer house) of history</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height='500px'
      src={pic2}
      alt="Second slide"
    />

    <Carousel.Caption className="banner-title" >
      <div >
      <h3>Al Masjid An-Nabawi</h3>
      <p>This is the first school of  Muslim Ummah</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height='500px'
      src={pic3}
      alt="Third slide"
    />

    <Carousel.Caption className="banner-title">
      <div >
      <h3>Masjid Al Aqsa</h3>
      <p>The first Qibla of Muslim Ummah</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;