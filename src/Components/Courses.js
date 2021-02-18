import React, {useState,  useEffect} from 'react'
import { getCourses } from '../api/courseApi.js'
import CourseList from './CourseList'
import {Link} from 'react-router-dom'


//fetching the list of courses from MockAPI and passing as props to the markup component

function Courses(){
   const [courses, setCourse] = useState([])

   useEffect(() => {
       getCourses().then(_courses => setCourse(_courses))
    }, [])
    

    return (
            <>
               <h1 align="center" style={{color:'white', paddingBottom: '3%'}}>Course Library</h1>
                <div> 
                
                <CourseList courses={courses} />
                </div>
                <div class="text-center"> 
                <Link className="btn btn-dark" to='/course'>Add New Course</Link> 
                </div>
            </>
        )
    }


export default Courses 