import React from "react";
import Images, { Title, Sname, Link } from "./Images,Title,Sname,Link";

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <Images imgsrc={props.imgsrc} />
                    <div className="card_info">
                        <Title title={props.title} />
                        <Sname sname={props.sname} />
                        <Link link={props.link}/>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Card;