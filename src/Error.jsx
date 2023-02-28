import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Error = () => {
    return (
        <>
            
                <h1>404 Error Page</h1>
                <p>Sorry We could not found right for you.</p>
                <NavLink to='/' className="btn btn-outline-success">Go Back</NavLink>
        </>
    )
}

export default Error