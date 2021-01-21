import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: ''
}
const onSubmit = (values) => {
  console.log(values)
}

//custom validate function
const validate = (values) => {

  let errors = {};

  if (!values.name) {
    errors.name = "Name is Required";
  }
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid Email"
  }
  if (!values.channel) {
    errors.channel = "Channel is Required";
  }
  return errors;
}

//validation using yup library
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid Email').required('Email is required'),
  channel: yup.string().required('Channel is required'),
})
function OldYouTubeForm() {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate
  })

  return (

    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label>Name:</label>
          <input type="text" name="name" id="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
          {formik.touched.name && formik.errors.name ? (<div className="error">{formik.errors.name}</div>) : null}
        </div>
        <div className="form-control">
          <label>Email:</label>
          <input type="email" name="email" id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
          {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}
        </div>
        <div className="form-control">
          <label>Channel:</label>
          <input type="text" name="channel" id="channel" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel} />
          {formik.touched.channel && formik.errors.channel ? (<div className="error">{formik.errors.channel}</div>) : null}
        </div>
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default OldYouTubeForm;
