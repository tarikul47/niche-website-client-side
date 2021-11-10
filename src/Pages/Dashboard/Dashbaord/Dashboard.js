import React from 'react';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <section class="dashboard-box">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2 col-sm-12 text-white bg-dark sidebar-box px-0">
                        <ul class="nav flex-column">
                            <li>
                                <a href="#" class="nav-link" aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-white">
                                    Manage All products
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-white">
                                    Add A Product
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-white">
                                    Make Admin
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-white">
                                    Manage Products
                                </a>
                            </li>
                            <hr/>
                            <li>
                            <a href="#" class ="nav-link text-white">
                            My orders
                            </a>
                            </li>
                            <li>
                            <a href="#" class ="nav-link text-white">
                            Reviews
                            </a>
                            </li>
                            <li>
                            <a href="#" class ="nav-link text-white">
                            Pay
                            </a>
                            </li>
                            <li>
                            <a href="#" class ="nav-link text-white">
                            Logout
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-10 col-sm-12 d-flex align-items-center justify-content-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 mx-auto col-sm-12">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, beatae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;