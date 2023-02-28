import React from "react";
import { NavLink } from "react-router-dom"
import homeimg1 from "./Images/homeimg1.webp"
import homeimg2 from "./Images/homeimg2.webp"
import homeimg10 from "./Images/homeimg10.webp"
import homeimg12 from "./Images/homeimg12.webp"
import homeimg11 from "./Images/homeimg11.webp"
import homeimg8 from "./Images/homeimg8.webp"
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <section id="homesection1">
                <div className="mt-2 HS1-div-img1">
                    <NavLink to="/service"><img src={homeimg1} alt="img" /></NavLink>
                    <p className="HS1heading1 HS1-heading1-hover">winter wear essential</p>
                    <NavLink to="/" className="HS1imgbtn1">For Him</NavLink>
                </div>
                <div className="mt-2 HS1-div-img2">
                    <NavLink to="/service"><img src={homeimg2} alt="img" /></NavLink>
                    <p className="HS1heading2 HS1-heading2-hover">winter wear essential</p>
                    <NavLink to="/" className="HS1imgbtn2">For Her</NavLink>
                </div>
            </section>

            <section id="homesection2">
                <div className="mt-4 HS2-div-img1">
                    <NavLink to="/service"><img src={homeimg10} alt="img" /></NavLink>
                    <p className="HS2heading1 HS2-heading1-hover">winter wear essential</p>
                    <div className="HS2buttondiv">
                        <NavLink to="/" className="HS2imgbtn1">For Him</NavLink>
                        <NavLink to="/" className="HS2imgbtn2">For Her</NavLink>
                    </div>
                </div>
            </section>

            <section id="homesection3">
                <div className="mt-2 HS3-div-img1">
                    <NavLink to="/service"><img src={homeimg11} alt="img" /></NavLink>
                    <div className="HS3heading-button-div">
                        <p className="HS3heading1 HS3-heading1-hover">winter wear essential</p>
                        <NavLink to="/" className="HS3imgbtn1">For Her</NavLink>
                    </div>
                </div>

                <div className="mt-2 HS3-div-img2">
                    <NavLink to="/service"><img src={homeimg12} alt="img"/></NavLink>
                    <div className="HS3heading-button-div">
                        <p className="HS3heading2 HS3-heading2-hover">winter wear essential</p>
                        <NavLink to="/" className="HS3imgbtn2">For Him</NavLink>
                    </div>
                </div>
            </section>

            <section id="homesection4">
                <div className="mt-5 HS4-div-img1">
                    <NavLink to="/service"><img src={homeimg8} alt="img"/></NavLink>
                    <div className="HS4heading-button-div">
                    <NavLink to="/" className="HS4imgbtn1">For Her</NavLink>
                    </div>
                </div>
            </section>

            <section id="homesection5">
            <Footer/>
            </section>

        </>
    )
}

export default Home