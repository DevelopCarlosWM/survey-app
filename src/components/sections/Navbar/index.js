import React from 'react'
import {
    IconButton
} from '@material-ui/core'
import Menu from '../../ui-components/menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '../../ui-components/menu-item'
const Navbar = ( { title, navigate } ) => {
    const [ open, setOpen ] = React.useState( false )
    const handleOpen = () => {
        setOpen( !open )
    }
    return(
        <div className='nav'>
            <div className='nav--container'>
                <h2 className='nav--container__title'>{ title }</h2>
                <IconButton className='nav--container__menu-button' onClick={() => handleOpen()}>
                    <MenuIcon/>
                </IconButton>
                { open && 
                    <div className='nav--container__menu'>
                        <Menu>
                            <MenuItem navigate={ navigate } path='/home' open={ open } setOpen={ setOpen } >
                                Home
                            </MenuItem>
                            <MenuItem navigate={ navigate } path='/survey' open={ open } setOpen={ setOpen } >
                                Survey
                            </MenuItem>
                        </Menu>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar