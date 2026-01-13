import React from 'react'
import Project from '../../components/Project'

const Dana = () => {
    return (
        <div>
            <Project
                title='DANA'
                publish_date='May 10, 2025'
                roles='Project Leader, UI/UX Designer'
                link='https://medium.com/@syarifanaamaliaputri/ui-ux-case-study-redesign-aplikasi-dana-dbdd39128282'
                content={
                    <>
                        <p className='flex-1 grow w-full text-sm leading-6 max-w-lg'>
                            The DANA app redesign project aimed to enhance the user experience and interface of the popular digital wallet application. As the project leader and UI/UX designer, we focused on creating a more intuitive and visually appealing design that caters to the needs of our diverse user base.
                        </p>
                        <img src="/photos/dana/dana-main.jpg" className='rounded-lg'/>
                        <p className='flex-1 grow w-full text-sm leading-6 max-w-lg'>
                            The redesign process involved extensive user research, wireframing, and prototyping to ensure that the new design met user expectations. Key features such as easy navigation, quick access to essential functions, and a modern aesthetic were prioritized in the new design.
                        </p>
                        <img src="/photos/dana/dana-homepage.png" className='rounded-lg'/>
                        <img src="/photos/dana/dana-personal.png" className='rounded-lg'/>
                        <img src="/photos/dana/dana-send-money.png" className='rounded-lg'/>
                        <p className='flex-1 grow w-full text-sm leading-6 max-w-lg'>
                            The final design was implemented using Figma, allowing for seamless collaboration with the team. The redesigned DANA app not only improved user satisfaction but also contributed to increased user engagement and retention.
                        </p>
                        <p className='flex-1 grow w-full text-sm leading-6 max-w-lg'>
                            I recommend checking out the full case study on <a target='_blank' href="https://medium.com/@syarifanaamaliaputri/ui-ux-case-study-redesign-aplikasi-dana-dbdd39128282" className='underline'>Medium</a> for a detailed overview of the redesign process, challenges faced, and solutions implemented.
                        </p>
                        <p className='flex-1 grow w-full text-sm leading-6 max-w-lg'>
                            Additionally, this project was featured by SOCS BINUS University, where I study. You can view the publication <a target='_blank' href="https://socs.binus.ac.id/2025/10/06/ui-ux-redesign-aplikasi-dana/" className='underline'>here</a>.
                        </p>
                    </>
                }
            />
    </div>
  )
}

export default Dana
