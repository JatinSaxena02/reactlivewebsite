import React from 'react'
import { NavLink } from "react-router-dom"

const CommonCard = (props) => {

    return (
        <>
        <div className='col-md-3 col-10 mx-auto mt-5'>
            <div className="card">
                <img src={props.imgsrc} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <NavLink to={props.link} target="_blank" className="btn btn-primary center btn1">MORE</NavLink>
                </div>
            </div>
            </div>
        </>
    )
}

export default CommonCard
