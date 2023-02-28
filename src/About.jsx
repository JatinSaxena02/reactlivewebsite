import React from 'react'
import { NavLink } from "react-router-dom"
import AboutCommonCard from './AboutCommonCard'
import AboutDetails from "./AboutDetails"


const About = () => {
    return (
        <>
            <section id='aboutsection1'>
                <div className='my-5'>
                    <h1 className='text-center'>We Are JAAB</h1>
                </div>
                <div className='my-5'>
                    <p className='col-10 mx-auto text-center'>A hybrid business model with a holistic approach to online business. Web. eCommerce. Mobile App Development.</p>
                </div>
                <div className='my-5'>
                    <NavLink to="/" className="btn btn-primary d-flex text-center aboutbtn1">ENQUIRE</NavLink>
                </div>
            </section>
            <div className='container-fluid mb-5'>
                <div className="row">
                    <div className='col-10 mx-auto'>
                        <div className="row gy-4">
                            <img src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=1380&t=st=1676878395~exp=1676878995~hmac=5e1d08e7078e225b0f6addd8e99e2b6fefc535bdbd53f71cc61d6c628523f7f9" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <section id="aboutsection2">
                <div className='my-5'>
                    <div className='col-8 mx-auto'>
                        <h1 className='text-center AS2heading1'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit magnam nam, aliquid eos libero tenetur corrupti quisquam optio quibusdam repellendus et illum, fuga incidunt neque eaque earum accusantium nostrum. Qui!
                        </h1>
                    </div>
                </div>
                <div className='my-5'>
                    <div className='col-6 mx-auto'>
                        <p className='text-center AS2heading2'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit magnam nam, aliquid eos libero tenetur corrupti quisquam optio quibusdam repellendus et illum, fuga incidunt neque eaque earum accusantium nostrum. Qui!
                        </p>
                    </div>
                </div>
                <div className='my-5'>
                    <NavLink to="/" className="btn btn-primary d-flex text-center aboutbtn2 AS2button">MEET OUR TEAM</NavLink>
                </div>
            </section>
            <section id="aboutsection3">
                <div className='container-fluid mb-5 container_color '>
                    <div className="row">
                        <div className='col-10 mx-auto'>
                            <div className="row gy-4 my-5">
                                <h3 className='text-center my-5'>What's different when you work with us?</h3>
                                <div className="row mx-auto ">
                                    <p className='col-6 AS3col-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam aut quod? Atque necessitatibus corrupti laudantium unde deleniti quidem aliquam nobis et, quos, excepturi ratione quam laboriosam suscipit tempora nam!LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam aut quod? Atque necessitatibus corrupti laudantium unde deleniti quidem aliquam nobis et, quos, excepturi ratione quam laboriosam suscipit tempora nam!Loremlorem</p>
                                    <p className='col-6 AS3col-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam aut quod? Atque necessitatibus corrupti laudantium unde deleniti quidem aliquam nobis et, quos, excepturi ratione quam laboriosam suscipit tempora nam!LoremloremLorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam aut quod? Atque necessitatibus corrupti laudantium unde deleniti quidem aliquam nobis et, quos, excepturi ratione quam laboriosam suscipit tempora nam!Loremlorem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="aboutsection4">
                <div className='my-5'>
                    <div className='col-8 mx-auto'>
                        <h1 className='text-center AS4heading1'>
                            Our Process
                        </h1>
                    </div>
                </div>
                <div className='my-5'>
                    <div className='col-8 mx-auto'>
                        <p className='text-center AS4heading2'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit magnam nam, aliquid eos libero tenetur corrupti quisquam optio quibusdam repellendus et illum, fuga incidunt neque eaque earum accusantium nostrum. Quit!
                        </p>
                    </div>
                </div>
                <div className='container-fluid mb-5'>
                    <div className="row">
                        <div className='col-10 mx-auto'>
                            <div className="row gy-4">
                                {AboutDetails.map((value) => {
                                    return (
                                        <>
                                            <AboutCommonCard
                                                key={value.id}
                                                imgsrc={value.imgsrc}
                                                title={value.title}
                                                desc={value.desc}
                                            />
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About