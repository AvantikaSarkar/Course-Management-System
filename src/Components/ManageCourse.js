import React, { useState } from 'react'
import CourseForm from './CourseForm'

function ManageCourse(props){

    const [course, setCourse] = useState({
        id : null,
        slug: "",
        title : "",
        authorId : null,
        category :""
    })

    function handleChange(event){
        const updatedCourse = {
            ...course,
            [event.target.name] : event.target.value
        }
        setCourse(updatedCourse)

    }
    return(
        <>
            <h3> Manage Courses</h3>
            <CourseForm course={course} onChange={handleChange}/>
            
        </>
    )
}

export default ManageCourse