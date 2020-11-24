import React from 'react'
const Form = ({ children }) => {
    return(
        <div className='form--container'>
            <div className='form--container__card'>
                { children }
            </div>
        </div>
    )
}

export default Form