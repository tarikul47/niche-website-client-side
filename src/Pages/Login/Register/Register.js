import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));
    return (
        <section class="login-box d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-12 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                            <h1 class="h3 mb-3 fw-normal">Please Register</h1>

                            <div class="form-floating mb-2">
                                <input {...register("email")} class="form-control" id="floatingInput" placeholder="name@example.com" autocomplete="off" />
                                <label for="floatingInput">Email address</label>
                            </div>

                            <div class="form-floating mb-2">
                                <input {...register("password")} placeholder="Your Password" className="form-control" id="floatingPassword"autocomplete="off" />
                                <label for="floatingPassword">Password</label>
                            </div>

                            <div class="form-floating mb-2">
                                <input {...register("password2")} placeholder="Your Password" className="form-control" id="floatingPassword"autocomplete="off" />
                                <label for="floatingPassword">Confirm Your Password</label>
                            </div>

                            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            <p>{result}</p>
                            <p>Already Registered! <span><Link style={{textDecoration:'none'}} to ='/login'>Please Login</Link></span></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;