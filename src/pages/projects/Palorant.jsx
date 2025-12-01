import React from 'react'
import Project from '../../components/Project'

const Palorant = () => {
    return (
        <div>
            <Project
                title='PALORANT'
                publish_date='April 18, 2025'
                roles='UI/UX Designer, Frontend Web Developer'
                link='https://www.palorant.site/'
                content={
                    <>
                        <p className='flex-1 grow w-full text-sm leading-6 max-w-lg'>
                            PALORANT is a simple and responsive website built using vanilla HTML, CSS, and JavaScript. The project was developed as a final project for the Human and Computer Interaction course in the 2nd semester.
                        </p>
                        <img src="/photos/palorant/palorant-home.jpg" className='rounded-lg'/>
                        <p className='flex-1 grow w-full text-sm leading-6 max-w-lg'>
                            The website features a clean and modern design, with a focus on user experience and accessibility. It includes multiple sections such as Home, Agents, Maps, News, and Report Bug.
                        </p>
                        <img src="/photos/palorant/palorant-agents.jpg" className='rounded-lg'/>
                        <img src="/photos/palorant/palorant-maps.jpg" className='rounded-lg'/>
                        <img src="/photos/palorant/palorant-news.jpg" className='rounded-lg'/>
                        <img src="/photos/palorant/palorant-report-bug.jpg" className='rounded-lg'/>
                        <p className='flex-1 grow w-full text-sm leading-6 max-w-lg'>
                            The design process involved creating wireframes and prototypes to ensure a user-friendly interface. The website is fully responsive, ensuring optimal viewing across various devices.
                        </p>
                    </>
                }
            />
        </div> 
    )
}

export default Palorant
