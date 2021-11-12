import React from "react";
import useGetData from "../../../Hooks/useGetData";

const MyOrders = () => {
  const [getData, setGetData] = useGetData("http://localhost:5000/orders");

  const orderDeleteHandle = (id) => {

  } 

  return (
    <div className="container">
      <div className="row g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {!getData.length ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 mx-auto">
                  <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {getData.map((order) => (
              <div key={order._id} className="col d-flex align-items-start">
                <div className="shadow-sm p-3 border">
                  <h4 className="fw-bold mb-0">{order.product_name}</h4>
                  <p>Order Price: {order.price}</p>
                  <p>Order Status: {order.status}</p>
                  <button
                    onClick={() => orderDeleteHandle(order._id)}
                    className="btn btn-warning"
                  >
                    Order Delete
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
