import React from 'react';
import chair from '../../../assets/images/chair.png'
import appointment from '../../../assets/images/appointment.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selected, setSelected}) => {

    return (
        <header style={{ background: `url(${appointment})` }}>
            <div className="hero text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='dentist Chair' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        
                        <DayPicker
                         mode = 'single'
                         selected = {selected}
                         onSelect ={setSelected}
                         />
                         <p>You picked {format(selected, 'PP')}.</p>
                           
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;