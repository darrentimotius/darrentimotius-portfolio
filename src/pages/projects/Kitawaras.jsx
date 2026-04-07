import React from 'react'
import Project from '../../components/Project'

const Kitawaras = () => {
    return (
        <div>
            <Project
                title="Kita Waras"
                publish_date="February 18, 2026"
                roles="Machine Learning Engineer"
                links={[
                    { label: 'Visit Site', url: 'https://kitawaras.streamlit.app/' },
                    {
                        label: 'GitHub', url: 'https://github.com/darrentimotius/kitawaras'
                    }
                ]}
                content={
                    <>
                    <p className="flex-1 grow w-full text-sm leading-6 max-w-lg">
                        Kita Waras is a web-based application developed to help users assess and predict their mental health conditions using machine learning. The platform focuses on early detection of stress levels by analyzing various factors such as emotional state, physical condition, daily activities, and environmental influences. By transforming subjective experiences into structured data, the system provides a more objective and data-driven approach to understanding mental well-being.
                    </p>
                    <p className="flex-1 grow w-full text-sm leading-6 max-w-lg">
                        The application allows users to answer a series of structured questions related to their mental and daily conditions. These inputs are then processed and converted into numerical features, which are used by the machine learning model to classify users into different stress categories, including non-stress, positive stress, and negative stress. This approach enables users to gain insights into their mental state in a simple and accessible way without requiring professional assessment at the initial stage.
                    </p>
                    <img src="/photos/kitawaras/kitawaras-home.jpeg" alt="" />
                    <p className="flex-1 grow w-full text-sm leading-6 max-w-lg">
                        From a technical perspective, the system is built using a data-driven machine learning pipeline that includes preprocessing, feature selection, model training, and evaluation. Multiple algorithms such as Logistic Regression, Support Vector Machine, Random Forest, and AdaBoost were explored and compared to identify the most effective approach. 
                    </p>
                    <p className="flex-1 grow w-full text-sm leading-6 max-w-lg">
                        The final model uses XGBoost, which was further optimized through hyperparameter tuning to achieve better generalization and stability in predicting mental health conditions. The application is deployed using Streamlit, providing a simple and interactive interface for users to input data and receive real-time predictions.
                    </p>
                    </>
                }
            />
        </div>
    )
}

export default Kitawaras
