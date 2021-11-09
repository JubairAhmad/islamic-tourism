import axios from 'axios';
import { Card, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../Hooks/useAuth';
import ManagePackage from '../ManagePackage/ManagePackage';
import "./AddNewShedule.css"
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const {useApi ,setuseApi}=useAuth()







  const onSubmit = data => {
    //   console.log(data)

      axios.post('https://mighty-dawn-03979.herokuapp.com/shedules', data)
        .then(res=>{
            if (res.data.insertedId) {
                alert('data, database a gece mama...akhon chil koro!!!')
                reset()
            }
        })
};


    return (
    <div>
        <div className='add-service mt-3'>
      
        <h1 className='text-center'>Add New Shedule</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name'  />
          <textarea {...register("description", )} placeholder='Description' />
          <input type="number" {...register("price")} placeholder='Price'/>
          <input type="number" {...register("duretion")} placeholder='package duretion'/>
          <input {...register("img", )} placeholder='Image Url'/>
          <input type="submit" />
      </form>
  </div>


        
            <div className='manage-package container'>
            <Row xs={1} md={2} lg={3} className="g-4">
              <ManagePackage></ManagePackage>
            </Row>
            </div>


    </div>
    );
};

export default AddService