import React from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Package from '../Package/Package';

const Packages = () => {
    const {useApi}=useAuth()
    return (
        <div className='container mt-2'>

           
             <Row xs={1} md={2} lg={3} className="g-4">

                {
                    useApi.map(shedule => <Package
                    key={shedule._id}
                    shedule={shedule}
                    ></Package>
                        )
                }
                
                </Row>
             
            
         </div>
        
    );
};

export default Packages;