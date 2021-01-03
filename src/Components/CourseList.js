import React from 'react'
import { Link } from 'react-router-dom'


//for displaying the list of courses passed down by the course page component - markup
function CourseList(props){

    return(
        <>
             <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author ID</th>
                            <th>Category</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.courses.map(course => {
                            return (
                                <tr key={course.id}> 
                                    <td><Link to={'/course/'+ course.slug}>{course.title}</Link></td>
                                    <td>{course.authorId}</td>
                                    <td>{course.category}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </>
    )
}

export default CourseList