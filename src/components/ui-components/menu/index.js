import React from 'react'
import {
    Paper
} from '@material-ui/core'
const Menu = ( { children } ) => {
    return(
        <>
            <Paper
                square
                className='menu--container'
            >
                { children }
            </Paper>
        </>
    )
}
export default Menu