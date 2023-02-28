import React from 'react'
import CommonCard from './CommonCard'
import ServiceDetails from './ServiceDetails'

const Service=()=>{
    return (
        <>
        <div className='my-5'>
            <p className='text-center serviceheading'>Our Services</p>
        </div>
        <div className='my-5'>
            <h1 className='text-center  serviceheading'>Our Features & Services</h1>
        </div>
        <div className='container-fluid mb-5'>
            <div className="row">
                <div className='col-10 mx-auto'>
                    <div className="row gy-4">
                        {ServiceDetails.map((value)=>{
                                return(
                                    <>
                                        <CommonCard
                                            key={value.id}
                                            imgsrc={value.imgsrc}
                                            title={value.title}
                                            desc={value.desc}
                                            link={value.link}

                                        />
                                    </>
                                )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    
    )
}

export default Service