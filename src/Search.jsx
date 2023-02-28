import React, { useState } from 'react'
import Sresult from './Sresult'

const Search = () => {
    const [img, setimg] = useState("")
    const InputEvent = (event) => {
        const data = event.target.value
        console.log(data)
        setimg(data)
    }




    return (
        <>
            <div>
                <input type="text"
                    placeholder='Type Something You Want To Search'
                    onChange={InputEvent}
                    value={img}
                />
            </div>

            <div>
                <Sresult name={img} />
            </div>
        </>
    )
}
export default Search