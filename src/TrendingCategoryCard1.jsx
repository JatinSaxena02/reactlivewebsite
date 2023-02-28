import React from "react";
import { NavLink } from "react-router-dom";


const TrendingCategoryCard1 = (props) => {
    return (
        <>
            <div className="col-md-2 col-10">
                <div className="mt-5">
                    <NavLink>
                        <img src={props.imgsrc} alt="img"/>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default TrendingCategoryCard1