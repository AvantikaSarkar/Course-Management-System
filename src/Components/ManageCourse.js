import React from 'react'
import CourseForm from './CourseForm'

function ManageCourse(props){
    return(
        <>
            <h3> Manage Courses</h3>
            {props.match.params.slug}
            <CourseForm />
            
        </>
    )
}

export default ManageCourse