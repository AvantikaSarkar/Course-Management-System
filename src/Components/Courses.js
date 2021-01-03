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
                <h2> <b>Course Library</b></h2>
                <CourseList courses={courses} />
                <Link className="btn btn-primary" to='/course'>Add Course</Link>
            </>
        )
    }


export default Courses 