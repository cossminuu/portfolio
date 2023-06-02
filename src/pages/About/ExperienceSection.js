import React from 'react'
import Section from './Section'
import data from '../../data'

const ExperienceSection = () => {
    return (
        <Section title='work experience'>
            <div className='row g-4'>
                {data.work.map((item, index) =>
                    <div key={index} className='col-12'>
                        <div className="card h-100 bg-transparent border-dark mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{item.company}</h5>
                                <h6 className="card-subtitle mb-2">{item.position}</h6>
                                <h6 className='card-subtitle mb-2 text-muted'>{item.jobType}</h6>
                                <p className="card-text">{item.years}</p>
                                {item.responsabilities.map((responsability, index) =>
                                    <blockquote className="blockquote" key={index}>
                                        <div className="blockquote-footer mt-1">
                                            <cite className='fw-bold'></cite>
                                            {responsability}
                                        </div>
                                    </blockquote>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Section>
    )
}

export default ExperienceSection