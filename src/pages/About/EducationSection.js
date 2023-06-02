import React from 'react'
import Section from './Section'
import data from '../../data'

const EducationSection = () => {
    return (
        <Section title='education'>
            <div className='row g-4'>
                {data.education.map((item, index) =>
                    <div key={index} className='col-12 col-xl-6'>
                        <div className="card h-100 bg-transparent border-dark mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{item.universityName}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{item.specialization}</h6>
                                <p className="card-text">{item.years}</p>
                                {item.descriptionList.map((description, index) =>
                                    <blockquote className="blockquote" key={index}>
                                        <div className="blockquote-footer mt-1">
                                            <cite className='fw-bold'>{description.title}</cite> {description.description}
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

export default EducationSection