import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment,setTreatment, selected }) => {
// treatment is just another name of appointmentOptions with name , slots _id
    const { name , slots} = treatment;
    const Date = format(selected, 'PP')
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking ={
            appointmentDate: Date,
            name,
            slot,
            email,
            phone
        }
        console.log(booking);
        setTreatment(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="date" disabled value={Date} className="input input-bordered  w-full mt-2" />
                        <select name='slot' className="select select-bordered w-full mt-2">
                           {
                            slots.map((slot, index) =>  <option 
                            key = {index}
                            value={slot} 
                            >{slot}</option>)
                           }
                            
                        </select>
                        <input name='name' type="text" placeholder="Your name" className="input input-bordered  w-full mt-2" />
                        <input name='email' type="email" placeholder="Your email" className="input input-bordered  w-full mt-2" />
                        <input name='phone' type="text" placeholder="Phone no" className="input input-bordered  w-full mt-2" />
                        <button className="btn btn-wide-full mt-3 w-full">Submit</button>
                    </form>
                </div>

            </div>
        </>
    );
};

export default BookingModal;