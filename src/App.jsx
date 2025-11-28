import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProjectsMain from './pages/projects/ProjectsMain'
import About from './pages/About'
import Palorant from './pages/Projects/Palorant'
import Sentika from './pages/Projects/Sentika'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<ProjectsMain/>}/>
                <Route path='/projects/palorant' element={<Palorant/>} />
                <Route path='/projects/sentika' element={<Sentika/>}/>
            </Routes>
        </Router>
    )
}

export default App