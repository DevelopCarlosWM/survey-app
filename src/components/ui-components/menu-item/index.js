import React from 'react'
const MenuItem = ( { children, navigate, path, open, setOpen } ) => {
    return(
        <a 
            href='#' 
            className='menu--container__item' 
            onClick={ e => {
                navigate( path, e )
                setOpen( !open )
            }}
        >
            <div className='container--item__title'>
                { children }
            </div>
        </a>
    )
}
export default MenuItem