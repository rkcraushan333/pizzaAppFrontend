import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';

const Login = ({ setIsLogin }) => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState } = useForm();
    const { errors } = formState;
    const onSubmit = async (data) => {
        console.log(data);
        await axios.post('http://localhost:5000/api/login', data)
            .then(function (response) {
                // handle success
                navigate('/home')
                console.log(response);
                setIsLogin(true);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    return (
        <div className="form-demo ">
            <div className="flex justify-content-center w-5 mx-auto ">
                <div className="card">
                    <h5 className="text-center">Register</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <Controller name="email" control={control}
                                    rules={{ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' } }}
                                    render={({ field, fieldState }) => (
                                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>Email*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                                    <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
                            </span>
                        </div>
                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login