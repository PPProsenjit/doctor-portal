import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState("");
    const {signIn} = useContext(AuthContext);
    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user); 
        })
        .catch(error => {
            console.error(error.message);
            setLoginError(error.message);
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-6' >
                <h2 className='font-bold text-center text-2xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">password</span></label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: "password must be 6 character or longer" }
                                })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">forget password?</span></label>
                    </div>
                    <input className='btn btn-accent w-full' value='login' type="submit" />
                    <div >
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to doctor portal. <Link to='/signup' className='text-secondary'>Create new account?</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;