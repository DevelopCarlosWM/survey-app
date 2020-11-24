import React from 'react'
const Banner = ( { url } ) => {
    return(
        <div className='banner' style={{ backgroundImage: `url(${url})` }}></div>
    )
}
export default Banner