import React from 'react'
import Project from '../../components/Project'

const Sentika = () => {
    return (
        <div>
            <Project
                title='Sentika'
                publish_date='September 23, 2025'
                roles='Machine Learning Engineer, FullStack Web Developer'
                link='https://www.sentika.site/'
                content={
                    <>
                        <p className='flex-1 grow w-full text-sm leading-6 max-w-lg'>
                            Sentika is a real-time Indonesian sentiment analysis website powered by IndoBERT, FastAPI, and Next.js. This project was developed as a final project for the Artificial Intelligence course in the 3rd semester.
                        </p>
                        <img src="/photos/sentika/sentika-text.jpg" className='rounded-lg'/>
                        <img src="/photos/sentika/sentika-file.jpg" className='rounded-lg'/>
                        <p className='flex-1 grow w-full text-sm leading-6 max-w-lg'>
                            The frontend is built with Next.js, providing a seamless and responsive user interface. Users can input Indonesian text or upload files, and receive real-time sentiment analysis results, categorized as positive, negative, or neutral.
                        </p>
                        <p className='flex-1 grow w-full text-sm leading-6 max-w-lg'>
                            The backend of Sentika utilizes FastAPI to create a API that serves the sentiment analysis model. The model is built using IndoBERT, a pre-trained language model specifically designed for the Indonesian language. This allows Sentika to accurately analyze and classify sentiments in Indonesian text data.
                        </p>
                    </>
                }
            />
        </div>
    )
}

export default Sentika
