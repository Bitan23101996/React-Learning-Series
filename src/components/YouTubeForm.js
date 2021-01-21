import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import * as yup from 'yup';
import TextError from "./TextError";

const initialValues = {
  name: 'Bitan',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['', ''],
  phNumbers: ['']
}
const loadData = {
  name: 'Bitan Das',
  email: 'bitan@gmail.com',
  channel: 'Bitan Channel',
  comments: 'I love React',
  address: 'Bauria, Howrah',
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['', ''],
  phNumbers: ['']
}


const onSubmit = (values, onSubmitProps) => {
  // console.log(values);
  console.log(onSubmitProps);
  //after get Successful API response then set it to false
  onSubmitProps.setSubmitting(false);
  //reset the form after reset
  onSubmitProps.resetForm();
}

//validation using yup library
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid Email').required('Email is required'),
  channel: yup.string().required('Channel is required')
})

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Comments is required"
  }
  return error;

}

function YouTubeForm() {
  const [formValues, setFormValue] = useState(null);
  return (

    <Formik
      initialValues={formValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize>
      {/* validateOnMount validateOnChange={false} validateOnBlur={false} */}

      {
        (formik) => {
          console.log("Formik Object:::", formik)
          return (
            <Form>
              <div className="form-control">
                <label>Name:</label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage name="name" component={TextError} />
              </div>
              <div className="form-control">
                <label>Email:</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email">
                  {
                    (errorMsg) => <div className="error">{errorMsg}</div>
                  }

                </ErrorMessage>
              </div>
              <div className="form-control">
                <label>Channel:</label>
                <Field type="text" name="channel" id="channel" />
                <ErrorMessage name="channel" component={TextError} />
              </div>
              <div className="form-control">
                <label>Comments:</label>
                <Field as="textarea" name="comments" id="comments" validate={validateComments} placeholder="Type your comments..." />
                <ErrorMessage name="comments" component={TextError} />
              </div>
              <div className="form-control">
                <label>Address</label>
                <FastField name="address">
                  {/*Rendering */}

                  {

                    (props) => {
                      // console.log("Rendered");
                      const { field, form, meta } = props;
                      // console.log("Props:::", props);
                      return (
                        <div>
                          <div>
                            <input type="text" id="address" {...field} />
                            {meta.error && meta.touched ? (<div className="error">{meta.error}</div>) : null}
                          </div>

                        </div>
                      )
                    }
                  }
                </FastField>
              </div>
              <div className="form-control">
                <label>Facebook Profile</label>
                <Field type="text" name="social.facebook" id="facebook" />
              </div>
              <div className="form-control">
                <label>Twitter Profile</label>
                <Field type="text" name="social.twitter" id="twitter" />
              </div>
              {/*------------------------------Phone Number Field------------------------ */}
              <div className="form-control">
                <label>Primary Mobile Number</label>
                <Field type="text" name="phoneNumbers[0]" id="primaryPhoneNumber" />
              </div>
              <div className="form-control">
                <label>Secondary Mobile Number</label>
                <Field type="text" name="phoneNumbers[1]" id="secondaryPhoneNumber" />
              </div>

              {/*-------------------Field Array Config----------------------- */}
              <div className="form-control">
                <label>Mobile Number</label>
                <FieldArray name="phNumbers">
                  {
                    (fieldArrayProps) => {
                      const { form, push, remove } = fieldArrayProps;
                      const { values } = form;
                      const { phNumbers } = values;
                      // console.log("Form Error:::", form.errors)
                      return (
                        <div>
                          {phNumbers.map((phNumber, index) => (
                            <div className="form-control" key={index}>
                              <Field type="text" name={`phNumbers[${index}]`} />
                              {
                                index > 0 && <button type="button" onClick={() => remove(index)}>Remove</button>
                              }
                            </div>
                          ))}
                          <button type="button" onClick={() => push('')}>Add</button>
                        </div>
                      )
                    }

                  }
                </FieldArray>
              </div>

              {/*  <button type="button" onClick={() => formik.validateField('comments')}>Valid Comments</button>
              <button type="button" onClick={() => formik.validateForm()}>Valid All</button>

              <button type="button" onClick={() => formik.setFieldTouched('comments')}>Set Touched Comments</button>
              <button type="button" onClick={() => formik.setTouched(
                {
                  name: true,
                  email: true,
                  channel: true,
                  comments: true
                }

              )}>Set Touched All</button> */}

              <button type="reset">Reset</button>
              <button type="button" onClick={() => setFormValue(loadData)}>Load Data</button>
              <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
              {/* disabled={!(formik.isValid && formik.dirty)}
              !formik.isValid
              */}
            </Form>
          )
        }
      }

    </Formik>
  )
}

export default YouTubeForm;
