import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProjectsMain from './pages/projects/ProjectsMain'
import About from './pages/About'
import Palorant from './pages/projects/Palorant'
import Sentika from './pages/projects/Sentika'
import Dana from './pages/projects/Dana'
import Zapp from './pages/projects/Zapp'
import Kitawaras from './pages/projects/Kitawaras'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<ProjectsMain/>}/>
                <Route path='/projects/palorant' element={<Palorant/>} />
                <Route path='/projects/sentika' element={<Sentika/>}/>
                <Route path='/projects/dana' element={<Dana/>}/>
                <Route path='/projects/zapp' element={<Zapp/>}/>
                <Route path='/projects/kitawaras' element={<Kitawaras/>}/>
            </Routes>
        </Router>
    )
}

export default App