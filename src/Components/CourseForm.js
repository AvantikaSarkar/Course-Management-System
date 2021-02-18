import React from "react";
import TextInput from './CommonComps/TextInput'
import PropTypes from 'prop-types'
import './course-form.css'


function CourseForm(props) {
  return (
    <>
    <h2 className="text-center" style={{color : "whitesmoke"}}> <i>New Course Details</i></h2>
    <form className ="login-form" onSubmit={props.onSubmit}>
      
      
          <TextInput
            id="title"
            label="Book Title"
            name="title"
            onChange={props.onChange}
            value={props.course.title}
            error={props.errors.title}
          />


      <div className="form-group">
        <label   htmlFor="author"><b>Author</b></label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Avantika Sarkar</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId  && (
        <div className="alert alert-danger"> {props.errors.authorId} </div>
        )}
      </div>

      <TextInput
            id="category"
            label="Category"
            name="category"
            onChange={props.onChange}
            value={props.course.category}
            error={props.errors.category}
       />

      <input type="submit" value="Save" className="save-button btn btn-dark btn-block" />
    </form>
    </>
  );
}

CourseForm.propTypes={

  course : PropTypes.object.isRequired,
  onSubmit : PropTypes.func.isRequired,
  onChange : PropTypes.func.isRequired,
  errors :  PropTypes.object.isRequired

}

export default CourseForm;
