import React, { useState, useEffect } from 'react'
import CourseForm from './CourseForm'
import * as courseApi from '../api/courseApi'
import {toast} from 'react-toastify'

function ManageCourse(props){


    const [errors, setErrors] = useState({})    
    const [course, setCourse] = useState({
        id : null,
        slug: "",
        title : "",
        authorId : null,
        category :""
    })

    useEffect(() => {
        //getting the slug from the path when the component is mounted
        const slug = props.match.params.slug
        if(slug){
            courseApi.getCourseBySlug(slug).then( _course => {
                setCourse( _course)
            })
        }
    }, [props.match.params.slug])


    function handleChange(event){
        const updatedCourse = {
            ...course,
            [event.target.name] : event.target.value
        }
        setCourse(updatedCourse)
    }

    function formIsValid(){

        const _errors = {}

        if (!course.title) _errors.title = "Title is required"
        if (!course.authorId) _errors.authorId = "AuthorId is required"
        if (!course.category) _errors.category = "Category is required"

        setErrors(_errors)
        //The form is not valid if the error object's length is greater than 0
        return Object.keys(_errors).length === 0
    }

    function handleSubmit(event){
        event.preventDefault()
        if(!formIsValid()) return;
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success('Course Saved!')
        })
    }

    return(
        <>
            <h3> Manage Courses</h3>
            <CourseForm 
            course={course} 
            errors={errors}
            onChange={handleChange} 
            onSubmit={handleSubmit}/>
            
        </>
    )
}

export default ManageCourse