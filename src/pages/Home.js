import React from 'react'
import portrait from '../portrait-rounded.png'
import data from '../data'


const Home = () => {
    return (
        <div>
            <div className='homepage'>
                <img className='fadeLeftMini' src={portrait} alt="Cosmin Dumitriu" />
                <div className='name-title fadeRightMini'>
                    <h1>Cosmin Dumitriu</h1>
                    <h2>Frontend Developer </h2>
                    <blockquote className="blockquote">
                        <div className="blockquote-footer mt-2 fw-bold">Currently learning <cite title="Apple development">Swift</cite></div>
                    </blockquote>
                    <div className='contacts d-flex align-items-center justify-content-center'>
                        {data.socials.map((contact, index) => {
                            return (
                                <a href={contact.link} rel="noreferrer" target='_blank' key={index} className='contact'>
                                    <img src={contact.icon} alt={contact.alt} />
                                </a>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home