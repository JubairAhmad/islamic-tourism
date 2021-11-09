import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';

const ManageAllBooking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {AllContexts, selectedService}= useAuth();
    const {user,logOut}=AllContexts;
    const {displayName,email,photoURL,}=user;
   const [orders,setOrders]=useState([])
   const [isDeleted,setIsDeleted]=useState(null)
   console.log(orders);
    useEffect(()=>{
        fetch(`https://mighty-dawn-03979.herokuapp.com/myOders/${email}`)
        .then(res=>res.json())


        .then(data=>
            setOrders(data))
    },[])


    const handleDelete=(id)=>{
        console.log(id);
        fetch(`https://mighty-dawn-03979.herokuapp.com/deleteProduct/${id}`,{
            method:"DELETE",
        })
       .then(res=>res.json())
       .then(data=>console.log(data))
       const remaining= orders.filter(order=>order._id !==id)
       setOrders(remaining)
    }
    
    return (
        <div className='container'>
               {
                   orders.map(order=> <Table responsive key={order._id} bordered size="sm">
                    <thead>
                        <tr>
                        <th>Image</th>
                        <th>UserName</th>
                        <th>UserEmail</th>
                        <th>Pakage Name</th>
                        <th>Order ID</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="w-2"><img width='100px' src={order.img} alt="" /></td>
                        <td>{user.displayName}</td>
                        <td>{user.email}</td>
                        <td>{order.name}</td>
                        <td>{order._id}</td>
                        <td><button onClick={()=>{handleDelete(order._id)}}>Cancel</button></td>
                        
                       
                        </tr>
                        
                        
                    </tbody>
                 </Table>)
               } 
        </div>
    );
};

export default ManageAllBooking;