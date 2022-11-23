import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selected }) => {
    // treatment is just another name of appointmentOptions with name , slots _id
    const { name: treatmentName, slots } = treatment;
    const { user } = useContext(AuthContext);
    const date = format(selected, 'PP')
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledge) {
                    setTreatment(null);
                    toast.success('booking confirmed')
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="date" disabled value={date} className="input input-bordered  w-full mt-2" />
                        <select name='slot' className="select select-bordered w-full mt-2">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }

                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} readOnly className="input input-bordered  w-full mt-2" />
                        <input name='email' type="email" defaultValue={user?.email} readOnly className="input input-bordered  w-full mt-2" />
                        <input name='phone' type="text" placeholder="Phone no" className="input input-bordered  w-full mt-2" />
                        <button className="btn btn-wide-full mt-3 w-full">Submit</button>
                    </form>
                </div>

            </div>
        </>
    );
};

export default BookingModal;