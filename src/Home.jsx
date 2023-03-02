import React from "react";
import { NavLink } from "react-router-dom"
import homeimg1 from "./Images/homeimg1.webp"
import homeimg2 from "./Images/homeimg2.webp"
import homeimg10 from "./Images/homeimg10.webp"
import homeimg12 from "./Images/homeimg12.webp"
import homeimg11 from "./Images/homeimg11.webp"
import homeimg8 from "./Images/homeimg8.webp"
import Footer from "./Footer";
import TrendingCategoryCard from "./TrendingCategoryCard";
import TrendingCategoryDetails from "./TrendingCategoryDetails";
import TrendingCategoryCard1 from "./TrendingCategoryCard1";
import TrendingCategoryDetails1 from "./TrendingCategoryDetails1";
import TrendingCategoryCard2 from "./TrendingCategoryCard2";
import TrendingCategoryDetails2 from "./TrendingCategoryDetails2";
import TrendingCategoryImg2 from "./TrendingCategoryImg2";

const Home = () => {
    return (
        <>
            <section id="homesection1">
                <div className="mt-2 HS1-div-img">
                    <NavLink to="/service"><img src={homeimg1} alt="img" /></NavLink>
                    <p className="HS1heading">winter wear essential</p>
                    <NavLink to="/" className="HS1imgbtn">For Her</NavLink>
                </div>
                <div className="mt-2 HS1-div-img">
                    <NavLink to="/service"><img src={homeimg2} alt="img" /></NavLink>
                    <p className="HS1heading">winter wear essential</p>
                    <NavLink to="/" className="HS1imgbtn">For Him</NavLink>
                </div>
            </section>

            <section id="homesection2">
                <div className="mt-4 HS2-div-img">
                    <NavLink to="/service"><img src={homeimg10} alt="img" /></NavLink>
                    <p className="HS2heading HS2-heading-hover">winter wear essential</p>
                    <div className="HS2buttondiv">
                        <NavLink to="/" className="HS2imgbtn">shop now</NavLink>
                    </div>
                </div>
            </section>

            <section id="homesection21">
                <div className="homesection21-trending-category-cards">
                    <div className="homesection21-trending-category-heading text-center mt-5">
                        <h2>trending category</h2>
                        <hr />
                    </div>
                    <div className='container homesection21-container mb-5'>
                        {TrendingCategoryDetails.map((value) => {
                            return (
                                <>
                                    <TrendingCategoryCard
                                        key={value.id}
                                        imgsrc={value.imgsrc}
                                    />
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section id="homesection3">
                <div className="mt-2 HS3-div-img">
                    <NavLink to="/service"><img src={homeimg11} alt="img" /></NavLink>
                    <div className="HS3heading-button-div">
                        <p className="HS3heading HS3-heading-hover">winter wear essential</p>
                        <NavLink to="/" className="HS3imgbtn">For Her</NavLink>
                    </div>
                </div>

                <div className="mt-2 HS3-div-img">
                    <NavLink to="/service"><img src={homeimg12} alt="img" /></NavLink>
                    <div className="HS3heading-button-div">
                        <p className="HS3heading HS3-heading-hover">winter wear essential</p>
                        <NavLink to="/" className="HS3imgbtn">For Him</NavLink>
                    </div>
                </div>
            </section>

            <section id="homesection31">
                <div className="homesection31-trending-category-cards">
                    <div className="homesection31-trending-category-heading text-center mt-5">
                        <h2>categories to bag</h2>
                        <hr />
                    </div>
                    <div className='container homesection31-container mb-5'>
                        {TrendingCategoryDetails1.map((value) => {
                            return (
                                <>
                                    <TrendingCategoryCard1
                                        key={value.id}
                                        imgsrc={value.imgsrc}
                                    />
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section id="homesection4">
                <div className="mt-5 HS4-div-img">
                    <NavLink to="/service"><img src={homeimg8} alt="img" /></NavLink>
                    <div className="HS4heading-button-div">
                        <NavLink to="/" className="HS4imgbtn">For Her</NavLink>
                    </div>
                </div>
            </section>


            <section id="homesection41">
                <div className="homesection41-trending-category-cards">
                    <div className="homesection41-trending-category-heading text-center">
                        <h2>top accessories</h2>
                        <hr />
                    </div>
                    <div className='container homesection41-container mb-5'>
                        {TrendingCategoryDetails2.map((value) => {
                            return (
                                <>
                                    <TrendingCategoryCard2
                                        key={value.id}
                                        imgsrc={value.imgsrc}
                                    />
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section id="homesection42">
                <div className="col-12 mt-2 mb-5">
                    <div className="container-img gy-5"><NavLink to='/'><img src={TrendingCategoryImg2.homeimg37} alt="img"></img></NavLink></div>
                </div>
            </section>
            <section id="homesection5">
                <Footer />
            </section>
        </>
    )
}

export default Home