import React from 'react'
import Project from '../../components/Project'

const Zapp = () => {
    return (
        <div>
            <Project
                title="ZAPP!"
                publish_date="February 26, 2026"
                roles="Full Stack Developer (Backend-focused)"
                links={[
                    { label: 'GitHub', url: 'https://github.com/darrentimotius/zapp-app' }
                ]}
                content={
                    <>
                    <p className="flex-1 grow w-full text-sm leading-6 max-w-lg">
                        ZAPP! is a mobile application designed to help users understand, calculate, and analyze household electricity usage in a simple and structured way.
                        <div/>
                        By allowing users to organize their home into rooms and assign electrical appliances to each room, ZAPP! provides accurate estimations of electricity consumption based on real usage patterns.
                    </p>
                    <img src="/photos/zapp/zapp-mockup.jpg" alt="" />
                    <p className="flex-1 grow w-full text-sm leading-6 max-w-lg">
                        The application records and visualizes electricity usage over daily, monthly, and yearly periods, enabling users to monitor trends and identify areas of excessive energy consumption.
                        <div/>
                        Through these insights, users are encouraged to make informed decisions to reduce unnecessary electricity usage and optimize energy efficiency in their homes.
                    </p>
                    <p className="flex-1 grow w-full text-sm leading-6 max-w-lg">
                        In addition to calculation and monitoring features, ZAPP! also aims to raise awareness about sustainable energy practices.
                        <div/>
                        By presenting clear data and historical comparisons, the app helps users understand the impact of their daily habits on overall energy consumption, supporting a more responsible and eco-friendly lifestyle.
                    </p>
                    <div className="grid grid-cols-3 w-full gap-8">
                        <img src="/photos/zapp/zapp-welcome.png" alt="" className="" />
                        <img src="/photos/zapp/zapp-login.png" alt="" className="" />
                        <img src="/photos/zapp/zapp-register.png" alt="" className="" />
                    </div>
                    <div className="grid grid-cols-3 w-full gap-8">
                        <img src="/photos/zapp/zapp-otp.png" alt="" className="" />
                        <img src="/photos/zapp/zapp-create_account.png" alt="" className="" />
                        <img src="/photos/zapp/zapp-forgot_password.png" alt="" className="" />
                    </div>
                    <div className="grid grid-cols-3 w-full gap-8">
                        <img src="/photos/zapp/zapp-new_password.png" alt="" className="" />
                        <img src="/photos/zapp/zapp-homepage.png" alt="" className="" />
                        <img src="/photos/zapp/zapp-simulation.png" alt="" className="" />
                    </div>
                    <hr />
                    <div className="grid grid-cols-3 gap-8">
                        <img src="/photos/zapp/zapp-history.png" alt="" className="" />
                        <img src="/photos/zapp/zapp-news.png" alt="" className="" />
                        <img src="/photos/zapp/zapp-news_content.png" alt="" className="" />
                    </div>
                    <hr />
                    <div className="grid grid-cols-3 gap-8">
                        <img src="/photos/zapp/zapp-profile.png" alt="" className="" />
                        <img src="/photos/zapp/zapp-account_details.png" alt="" className="" />
                        <img src="/photos/zapp/zapp-edit_account_details.png" alt="" className="" />
                    </div>
                    <p className="flex-1 grow w-full text-sm leading-6 max-w-lg">
                        From a technical perspective, the mobile application is built using Flutter, while Supabase is used for authentication and database management. The backend API is developed with NestJS to handle data processing and electricity calculations.
                    </p>
                    </>
                }
            />
        </div>
    )
}

export default Zapp
