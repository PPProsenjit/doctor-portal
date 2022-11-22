import React from 'react';
import img from '../../../assets/images/chair.png'
import appointment from '../../../assets/images/appointment.png'
const Banner = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className=''>
            <div className="hero bg">

                <div className="hero-content flex-col lg:flex-row-reverse flex justify-between">
                    <img src={img} className="w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default Banner;