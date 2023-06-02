import React from 'react'

const Section = ({ children, title }) => {
    return (
        <>
            <div className='text-center mb-3 mt-5'>
                <h2 className='fw-bold d-inline section-title px-2'>{title}</h2>
            </div>
            {children}
        </>
    )
}

export default Section