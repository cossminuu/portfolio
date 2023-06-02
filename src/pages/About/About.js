import React from 'react'
import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection'
import SkillSection from './SkillsSection'
import EducationSection from './EducationSection'

const About = () => {

    return (
        <div className='about p-3'>
            <AboutSection />

            <ExperienceSection />

            <SkillSection />

            <EducationSection />
        </div>
    )
}

export default About