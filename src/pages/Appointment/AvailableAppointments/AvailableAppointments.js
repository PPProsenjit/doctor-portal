import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';


const AvailableAppointments = ({ selected }) => {
    // const [appointmentOptions,setAppointmentOptions ] = useState([]);
    const[treatment, setTreatment] = useState(null);
    const date = format(selected, 'PP');
    const {data : appointmentOptions = []} = useQuery({
        queryKey:['appointmentOptions',date],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }
    })
    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => 
    //         setAppointmentOptions(data)
    //         );
    // },[])


    return (
        <section className='my-16'>
            <p className="text-center text-cold text-secondary "> Available Appointments on {format(selected, 'PP')}.</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                   
                    appointmentOptions.map(option => <AppointmentOption 
                    key = {option._id}
                    option = {option}
                    setTreatment = {setTreatment}
                    ></AppointmentOption> )
                }
            </div>
            { treatment && 
            <BookingModal
            selected={ selected}
            treatment = {treatment}
            setTreatment = {setTreatment}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;