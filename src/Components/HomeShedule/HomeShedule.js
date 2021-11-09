import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './HomeShedule.css'

const HomeShedule = (props) => {
    // console.log(props);
    
    const {img, name ,_id, price, description, duretion}=props.shedule;
    const shedule=props.shedule;
    const {AllContexts, selectedService}= useAuth();
    const {user,logOut}=AllContexts;
    const {displayName,email,photoURL}=user;
   
    const handleAddToCart=()=>{
      const data=shedule;
      data.email=`${email}`
      delete shedule._id;
      
      fetch('https://mighty-dawn-03979.herokuapp.com/booking',{
          method:'post',
          headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(data),
      })
      console.log(data);
  }

        
    
        return (
        <div>
            
  
    <Col className='card'>
      <Card>
        <Card.Img variant="top" height='230px' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p className='text-dark fw-normal'>{description.slice(0,150)}</p>
          </Card.Text>
          <Card.Text>
            <p className='text-dark'>Cost Fee: {price}$</p>
          </Card.Text>
          <Card.Text>
            <p className='text-dark'>This Package for {duretion} days</p>
          </Card.Text>
          
        </Card.Body>
        <Link to={`/mybooking/${_id}`}>
            <button  onClick={()=>handleAddToCart(shedule)}>Book Now</button>
            </Link>
      </Card>
      
    </Col>
    

        </div>
    );
};

export default HomeShedule;