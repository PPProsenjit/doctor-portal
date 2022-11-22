import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Terms from '../Terms/Terms';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Terms></Terms>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;