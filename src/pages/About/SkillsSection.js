import React from 'react'
import Section from './Section'
import data from '../../data'

const SkillSection = () => {
    return (
        <Section title='skills'>
            <div className='row g-4 skills'>
                {data.skills.map((item, index) =>
                    <div key={index}>
                        <h5 className='card-title mb-2'>{item.title}</h5>
                        <div className='row g-2'>
                            {item.list.map((skill, index) =>
                                <span key={index} className="w-auto border-dark py-2 px-3  me-2"><small>{skill}</small></span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Section>
    )
}

export default SkillSection