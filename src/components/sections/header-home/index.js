import React from 'react'
const Header = ( props ) => {
    React.useEffect(() => {
        stars()
    }, [] )
    const stars = () => {
        let count = 500
        let scene = document.getElementById('header')
        let i = 0
        while( i < count ) {
            let star = document.createElement('i')
            let x = Math.floor( Math.random() * window.innerWidth )
            let y = Math.floor( Math.random() * window.innerHeight )
            let duration = Math.random() * 100
            let size = Math.random() * 2

            star.style.right = x + 'px'
            star.style.top = y + 'px'
            star.style.width = 1 + 'px'
            star.style.height = 1 + size + 'px'
            star.style.animationDuration = 5 + duration + 's'
            star.style.animationDelay = duration + 's'

            scene.appendChild( star )
            i++
        }
    }
    return(
        <>
            <div className='header--container' id='header'>
                <h1 className='header--container__title' >
                    Survey App.
                </h1>
                <div className='header--container__logo'></div>
            </div>
        </>
    )
}
export default Header