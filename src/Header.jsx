import React from "react"
import logo from "./Images/logo.jpg"

const Header = () => {
    return <>
        <div className="header">
            <img src={logo} alt="logo" width="90px" height="80px"/>
            <span className="header_heading">Google Keep Clone</span>
        </div>
    </>

}

export default Header