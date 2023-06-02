import React from 'react'
import Section from './Section'

const AboutSection = () => {
    return (
        <Section title='about me'>
            <h5>hello,</h5>
            <h2 className='fw-bold mt-2 mb-4'>
                I'm Cosmin and I'm a Frontend Developer.
            </h2>
            <blockquote className="blockquote">
                <div className="blockquote-footer mt-4">
                    My primary focus is on building robust and intuitive Front End Web Applications using <cite className='fw-bold'>JavaScript, CSS3, and HTML5</cite>.
                    <br />
                    <br />
                    I have expertise in libraries and tools like <cite className='fw-bold'>React JS, React Native, Vue JS</cite> and popular UI component libraries such as  <cite className='fw-bold'> Bootstrap, Core-UI</cite> and <cite className='fw-bold'>Material-UI</cite>.
                    <br />
                    <br />
                    I find immense satisfaction in converting ideas into tangible digital solutions, honing my skills through continuous learning and experimentation with emerging technologies.
                    <br />
                    <br />
                    When not writing code, I enjoy playing video games, ping-pong, and expanding my knowledge in the ever-evolving tech space.
                </div>
            </blockquote>
        </Section>
    )
}

export default AboutSection