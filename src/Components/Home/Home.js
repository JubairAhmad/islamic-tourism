import React from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import useAuth from '../Hooks/useAuth';
import HomeShedule from '../HomeShedule/HomeShedule';
import pic from '../../images/kaba.jpg'

const Home = () => {
    const {useApi}=useAuth()
    return (
        <div>
            <img width='100%' height='650px' src={pic} alt="" />
            <div className='container mt-2'>
                
            
             <Row xs={1} md={2} lg={3} className="g-4">

                {
                    useApi.slice(0,6).map(shedule => <HomeShedule
                    key={shedule._id}
                    shedule={shedule}
                    ></HomeShedule>
                        )
                }
                </Row>
             
                <Banner></Banner>
         </div>
         <div className='container mt-3 '>
         <iframe width="100%" height="500" src="https://www.youtube.com/embed/qziiZwWRwgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
        </div>
    );
};

export default Home;