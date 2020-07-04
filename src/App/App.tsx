import React from 'react'
import Navbar from './features/navbar/Navbar'
import { Route, Switch } from 'react-router-dom'
import Projects from './features/content/projects/Projects'
import About from './features/content/about/About'
import Footer from './features/footer/Footer'
import Services from './features/content/services/Services'
import Project from './features/content/projects/project/Project'

const App = () => {
    return (
        <div className='main'>
            <Navbar />
            <div className='container'>
                <Switch>
                    <Route exact path='/Portfolio' component={Projects} />
                    <Route path='/services' component={Services} />
                    <Route path='/about' component={About} />
                    <Route path='/project/:id' component={Project} />
                </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default App
