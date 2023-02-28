import React from 'react'

const AboutCommonCard = (props) => {

    return (
        <>
            <div className='col-md-3 col-10 mx-auto mt-5'>
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top aboutimg AS4img" alt="img" />
                    <div className="card-body about_cardbody">
                        <h5 className="card-title abouttitle">{props.title}</h5>
                        <p className="card-text about_cardtext">{props.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutCommonCard