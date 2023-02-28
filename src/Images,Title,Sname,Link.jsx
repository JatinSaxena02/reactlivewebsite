
// Component for images //
import React from "react";

function Images(props) {
    return (<img src={props.imgsrc} alt="img" className="card_img" />)
}

// Component for Title //

function Title(props) {
    return (<span className="card_category">{props.title}</span>)
}

// Component for Series Name //

function Sname(props) {
    return (<h3 className="card_title">{props.sname}</h3>)
}

// Component for Link //
function Link(props) {
    return (<a href={props.link} target="_blank"><button>Watch Now</button></a>)
}

export default Images
export { Title, Sname, Link }