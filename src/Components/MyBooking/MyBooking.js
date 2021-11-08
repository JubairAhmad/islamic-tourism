import React, { useEffect, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import { Card,Button,Container  } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './MyBooking.css'


const MyBooking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {AllContexts, selectedService}= useAuth();
    const {user,logOut}=AllContexts;
    const {displayName,email,photoURL,}=user;
   const [orders,setOrders]=useState([])
   const [isDeleted,setIsDeleted]=useState(null)
   console.log(orders);
    useEffect(()=>{
        fetch(`http://localhost:5000/myOders/${email}`)
        .then(res=>res.json())


        .then(data=>
            setOrders(data))
    },[])
   
    const onSubmit = data => {
        data.order=orders
        fetch(`http://localhost:5000/confrom`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.insertedId){
                alert('Order processed Successfully');
                reset();
            }
        })
    };



    const handleDelete=(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/deleteProduct/${id}`,{
            method:"DELETE",
        })
       .then(res=>res.json())
       .then(data=>console.log(data))
       const remaining= orders.filter(order=>order._id !==id)
       setOrders(remaining)
    }
    
    return (
        <div>
            <h3 className='text-center '>Total Booking: {orders.length}</h3>


             <div className="myBooking container">
                 <div className="add-seervice form">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input readOnly defaultValue={user.displayName} {...register("name", )} /> 
                        <input readOnly defaultValue={user.email} {...register("email",  { required: true  })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address",  { required: true  })} />
                        <input placeholder="City" defaultValue="" {...register("city",  { required: true  })} />
                        <input placeholder="phone number" defaultValue="" {...register("phone",  { required: true  })} />
                        
                        <input style={{width:"100px"}} type="submit"  />
                       
                        </form>
                 </div>

            {orders?.map((dr,index)=>(
                    
                    <div key={dr._id}>
                        
                        <div className="booking">
                        <Container>
                        
                        
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dr.img} />
                        <Card.Body>
                            <Card.Title>{dr.name}</Card.Title>
                            <h5>{dr.type}</h5>
                            <Card.Text className='fw-normal text-dark'>
                            {dr?.description.slice(0,150)}
                            </Card.Text>
                            <Card.Text className='d-flex justify-content-evenly'>
                            <span className='bg-info p-2 rounded'>{dr?.price} $</span> <span className='bg-info p-2 rounded'>{dr?.duretion.slice(0,150)} days Package</span>
                            </Card.Text>

                            <Button onClick={()=>handleDelete(dr._id)}  variant="primary">Cancel</Button>
                        </Card.Body>
                        </Card>
                        </Container>
                        </div>
                        
                    </div>
                    
                    ))}
                 </div>
        </div>
    );
};

export default MyBooking;