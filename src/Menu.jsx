import React from "react";
import { NavLink } from "react-router-dom"


const Menu = () => {
    return (
        <>

            <div className="container-fluid nav_bg sticky-top bg-light">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">JAAB</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink  to='/' className="nav-link" aria-current="page">Home</NavLink> </li>
                                        <li className="nav-item">
                                            <NavLink  to='/service' className="nav-link">Service </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  to='/contact' className="nav-link">Contact Us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  to='/about' className="nav-link"> About Us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  to='/product' className="nav-link"> Product</NavLink>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Menu


