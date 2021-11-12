import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useGetData from '../../../Hooks/useGetData';

const MakeAdmin = () => {

    const { register, handleSubmit } = useForm();

    const [getData] = useGetData('http://localhost:5000/users');
    console.log(getData);

    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <div className="col-lg-4 col-sm-12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="h3 mb-3 fw-normal">Choose an user to make admin</h3>
                <div className="form-floating mb-2">
                    <select {...register("Select User ", { required: true })} className="form-control">
                        {
                            getData?.map(user => <option value={user.name}>{user.name}</option>)
                        }
                    </select>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Make Admin</button>
                <p>{result}</p>
            </form>
        </div>
    );
};

export default MakeAdmin;


            