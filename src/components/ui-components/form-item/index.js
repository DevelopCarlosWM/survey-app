import React from 'react'
const FormItem = ({ children }) => {
    return(
        <>
            <div className='container--card__item'>
                { children }
            </div>
        </>
    )
}

export default FormItem