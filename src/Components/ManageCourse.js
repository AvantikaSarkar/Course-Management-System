import React, { useState } from 'react'
import CourseForm from './CourseForm'
import * as courseApi from '../api/courseApi'
import {toast} from 'react-toastify'

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

    function handleSubmit(event){
        event.preventDefault()
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success('Course Saved!')
        })
    }

    return(
        <>
            <h3> Manage Courses</h3>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit}/>
            
        </>
    )
}

export default ManageCourse