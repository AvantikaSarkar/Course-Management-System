import React from 'react'
import About from './AboutPage'
import HomePage from './HomePage'
import Header  from './CommonComps/Header'
import Courses from './Courses'
import { Route , Switch} from 'react-router-dom'
import PageNotFound from './PageNotFound'
import ManageCourse from './ManageCourse'



function App(){

    return(
    <div className="container-fluid"
        style={{
            backgroundColor : "powderblue"
        }}
    >
        <Header />
        
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/about' exact component={About} />
            <Route path='/courses' exact component={Courses} />
            <Route path='/course/:slug' component={ManageCourse}/>
            <Route path='/course' component={ManageCourse}/>
            <Route component={PageNotFound} />
            
        </Switch>
    </div>
    )

}

export default App