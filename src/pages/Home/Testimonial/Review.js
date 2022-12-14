import React from 'react';

const Review = ({ review }) => {
    const { name, img, location, review: userReview } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex items-center mt-4" >
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                   <div>
                   <h2 className="text-xl">{name}</h2>
                   <p>{location}</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Review;