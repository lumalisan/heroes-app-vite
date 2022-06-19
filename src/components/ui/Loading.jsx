import React from 'react'

const Loading = () => {
    const loadingUrl = `/assets/loading.svg`;

    return (
        <div className="d-flex flex-column min-vh-100 min-vw-100" style={{backgroundColor: '#000405'}}>
            <div className='d-flex flex-grow-1 justify-content-center align-items-center'>
                <img src={loadingUrl} alt="Loading..." />
            </div>
        </div>
    )
}

export default Loading