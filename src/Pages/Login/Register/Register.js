import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));
    return (
        <section className="login-box d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="mb-5">ShopGrids</h1>                            
                            <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                            <div className="form-floating mb-2">
                                <input {...register("email")} className="form-control" id="floatingInput" placeholder="name@example.com" autocomplete="off" />
                                <label for="floatingInput">Email address</label>
                            </div>

                            <div className="form-floating mb-2">
                                <input {...register("password")} placeholder="Your Password" className="form-control" id="floatingPassword" autocomplete="off" />
                                <label for="floatingPassword">Password</label>
                            </div>

                            <div className="form-floating mb-2">
                                <input {...register("password2")} placeholder="Your Password" className="form-control" id="floatingPassword" autocomplete="off" />
                                <label for="floatingPassword">Confirm Your Password</label>
                            </div>

                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            <p>{result}</p>
                            <p>Already Registered! <span><Link style={{ textDecoration: 'none' }} to='/login'>Please Login</Link></span></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;