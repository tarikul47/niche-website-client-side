import React from 'react';
import { useParams } from 'react-router';
import useGetData from "../../Hooks/useGetData";


const Purchase = () => {
    const { pid } = useParams();
    const [getData] = useGetData(`http://localhost:5000/products/${pid}`);
    console.log(getData);

    return (
        <div>
            <h2>Purchase</h2>
            {pid}
        </div>
    );
};

export default Purchase;