import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Package = (props) => {
    const {img, name ,_id, price, description, duretion}=props.shedule;
    const packageToCart=props.shedule;
    const handlebooking=()=>{
      console.log(packageToCart._id);
    }
    return (
        <div>
            <Col className='card'>
      <Card>
        <Card.Img variant="top" height='200px' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p className='text-dark fw-normal'>{description.slice(0,140)}</p>
          </Card.Text>
          <Card.Text>
            <p className='text-dark'>Cost Fee: {price}$</p>
          </Card.Text>
          <Card.Text>
            <p className='text-dark'>This Package for {duretion} days</p>
          </Card.Text>
          
        </Card.Body>
       
            
            <button  onclick={()=>handlebooking(packageToCart._id)}>Book Now</button>
           
      </Card>
      
    </Col>
        </div>
    );
};

export default Package;