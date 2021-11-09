import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './UpdatePackage.css'
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const UpdatePakage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [update,setUpdate]=useState({});
    const {id}=useParams()

    useEffect(()=>{
        const url=`https://mighty-dawn-03979.herokuapp.com/shedules/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUpdate(data))
        },[])
        const {name, img, description, price, duretion}=update

        const handleNameChange = e => {
            const updatedName = e.target.value;
            console.log(updatedName);
            const updatedPackage = { name: updatedName, description:description, price:price, duretion:duretion, img:img  };
            setUpdate(updatedPackage);
        }

        const handledescriptionChange = e => {
            const updatedDiscription = e.target.value;
            const updatedPackage = { name: name, description:updatedDiscription, price:price, duretion:duretion, img:img  };
            setUpdate(updatedPackage);
        }
        const handlePriceChange = e => {
            const updatedprice = e.target.value;
            const updatedPackage = { name: name, description:description, price:updatedprice, duretion:duretion, img:img  };
            setUpdate(updatedPackage);
        }
        const handleDuretionChange = e => {
            const updatedDuretion = e.target.value;
            const updatedPackage = { name: name, description:description, price:price, duretion:updatedDuretion, img:img  };
            setUpdate(updatedPackage);
        }
        const handleUrlChange = e => {
            const updatedImg = e.target.value;
            const updatedPackage = { name: name, description:description, price:price, duretion:duretion, img:updatedImg  };
            setUpdate(updatedPackage);
        }

        const handleUpdateUser  = e => {
            const url = `https://mighty-dawn-03979.herokuapp.com/shedules/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(update)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Update Successful');
                        setUpdate({});
                        e.target.reset();
                    }
                })

            e.preventDefault();
        }


    return (
        <div className='container mt-3 d-flex'>
                <div>
                <Card className='updt-crd' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-dark fw-normal'>
                        {description}
                    </Card.Text>
                </Card.Body>
                </Card>
                </div>
                <div>


        <div className='myBooking'>
        <div className="add-seervice form">
            <form onSubmit={handleUpdateUser }>

                        <input   onChange={handleNameChange}   placeholder='name' {...register("name", )} /> 
                        <textarea   onChange={handledescriptionChange}  placeholder='description' {...register("email",  { required: true  })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input  onChange={handlePriceChange} placeholder='price' defaultValue="" {...register("address",  { required: true  })} />
                        <input onChange={handleDuretionChange} placeholder='package duretion' defaultValue="" {...register("city",  { required: true  })} />
                        <input onChange={handleUrlChange}  placeholder='image' defaultValue="" {...register("phone",  { required: true  })} />
                        
                        <input style={{width:"100px"}} type="submit" value='Update'  />
                       
                        </form>
                        
                        </div>
        </div>

                </div>
                
                
                
                
        </div>
    );
};

export default UpdatePakage;