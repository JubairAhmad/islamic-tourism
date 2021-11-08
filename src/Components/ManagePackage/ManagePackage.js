import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './ManagePackage.css'



const ManagePackage = () => {
    const [pakes,setpakes]=useState([])
    const {useApi,setUseApi}=useAuth()


useEffect(()=>{
    fetch(`http://localhost:5000/shedules`)
        .then(res=>res.json())
        .then(data=> setpakes(data))
},[])
 
    
        const handelDeleteUser= id =>{
            const url=`http://localhost:5000/shedules/${id}`;
            fetch(url , {
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    if(window.confirm("are you sure to delete ???")){
                        
                    alert('deleted successfully')
                    const remainingPackage= pakes.filter(pack=>pack._id!==id)
                    setpakes(remainingPackage)
                    ;
                    }
                }
            })
        }
        
    return (
        <div >
            <h2 className='text-center'> Manage All Pakage</h2>
            
            {
                pakes.map(pack=>
                <div >
                <Col >
                <Card key={pack._id} className="manage-card">
                  <Card.Img variant="top" height='230px' src={pack.img} />
                  <Card.Body>
                    <Card.Title>{pack.name}</Card.Title>
                    <Card.Text>
                      <p className='text-dark fw-normal'>{pack.description}</p>
                    </Card.Text>
                    <Card.Text>
                      <p className='text-dark'>Cost Fee: {pack.price}$</p>
                    </Card.Text>
                    <Card.Text>
                      <p className='text-dark'>This Package for {pack.duretion} days</p>
                    </Card.Text>
                    
                  </Card.Body>
                  <Link to={'/addnewshedule'} className='text-decoration-none'>
                      <div className='d-flex justify-content-between '>
                      <Link to={`/shedules/updatepackage/${pack._id}`}><button >Update</button></Link>
                      <button onClick={()=>{handelDeleteUser(pack._id)}}>Delete</button>
                      </div>
                      </Link>
                </Card>
                
              </Col> 
              </div>
              )

            }
             
        </div>
    );
};

export default ManagePackage;