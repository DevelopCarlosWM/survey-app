import React from 'react'
const TechnologiesSummary = ( props ) => {
    return(
        <>
            <div className='tech--container'>
                <div className='tech--container__card'>
                    <h3 className='container--card__title'>Technologies Summary.</h3>
                    <p className='container--card__content'>
                        For this test I used React, Redux and some other libraries for ReactJS
                        <br/>
                        I used the Container - component pattern design for all components and a css preproccesor ( scss )
                    </p>
                </div>
            </div>
        </>
    )
}

export default TechnologiesSummary