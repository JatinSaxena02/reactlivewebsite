import React from "react";
import { NavLink } from "react-router-dom";


const TrendingCategoryCard1 = (props) => {
    return (
        <>
           <div className="container-item mt-5">
                <NavLink>
                    <img src={props.imgsrc} alt="img" />
                </NavLink>
            </div>
        </>
    )
}

export default TrendingCategoryCard1