import React from 'react';

import img from '../../../assets/images/treatment.png'
const Terms = () => {
    return (
        <div className="hero bg-base-100 pt-6 shadow-lg">
            <div className="hero-content flex-col lg:flex-row lg:pl-20 lg:pr-20">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='ml-6'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its looking at its layout. The point distribution of letters. making it look like readable English. Many desktop publishing packages and web page.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Terms;