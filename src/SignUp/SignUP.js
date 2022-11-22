import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const SignUP = () => {
    const { register, formState:{errors}, handleSubmit } = useForm();
    const {createUser} = useContext(AuthContext);
    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-6' >
                <h2 className='font-bold text-center text-2xl'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">name</span> </label>
                        <input type="text"{...register('name',{
                            required:'Name is required'
                        })} className="input input-bordered w-full"/>
                         {errors.name && <span className='text-red-600'>{errors.name.message}</span>}
                        
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type="email" {...register('email',{
                           required:'email is required'
                        })} className="input input-bordered w-full" />
                        {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">password</span></label>
                        <input type="password" {...register('password',{
                            required:'password is required',
                            minLength: {value: 6, message:'password must be 6 character'},
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full"  />
                        {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                    </div>
                    <input className='btn btn-accent w-full mt-6' value='Sign Up' type="submit" />
                </form>
                <p>Already have an account !<Link to='/login' className='text-secondary'>Please Sign in </Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUP;