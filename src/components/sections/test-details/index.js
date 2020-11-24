import React from 'react'
const TestDetails = ( { navigate } ) => {
    return(
        <>
            <div className='details--container'>
                <div className='details--container__card'>
                    <h3 className='container--card__title'>Description of this test</h3>
                    <p className='container--card__content'>This test have the purpose to write a React App that can create fake surveys consuming a json</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <a href='#' className='neon-button' onClick={ e => navigate('/survey', e)}>
                            Go to Survey
                        </a>    
                    </div>
                </div>
            </div>
        </>
    )
}
export default TestDetails