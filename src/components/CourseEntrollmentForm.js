import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import FormikControl from './FormikControl'

function CourseEntrollmentForm() {
    const courseList = [
        {
            key: 'Select',
            value: ''
        },
        {
            key: 'Web Development',
            value: 'webdev'
        },
        {
            key: 'Networking',
            value: 'networking'
        },
        {
            key: 'Radio Jockey',
            value: 'radioJockey'
        }
    ]

    const skillsetList = [{
        key: 'HTML',
        value: 'html'
    },
    {
        key: 'CSS',
        value: 'css'
    },
    {
        key: 'Java Script',
        value: 'js'
    }
    ]
    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skillset: [],
        courseDate: null
    }
    const validationSchema = yup.object({
        email: yup.string().email('Invalid Email Format').required('Email is required'),
        bio: yup.string().required('Bio is required'),
        course: yup.string().required('Course is required'),
        skillset: yup.array().min(1, 'Choose atleast one option'),
        courseDate: yup.date().required('Date is required').nullable()
    })
    const onSubmit = values => {
        console.log('Form Data', values)
    }


    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                (formik) => {
                    return (
                        <Form>
                            <FormikControl control="input" type="email" name="email" label="Email" />
                            <FormikControl control="textarea" name="bio" label="Bio" />
                            <FormikControl control="select" name="course" label="Course" options={courseList} />
                            <FormikControl control="checkbox" name="skillset" label="Skillset" options={skillsetList} />
                            <FormikControl control="date" type="text" name="courseDate" label="Course Date" />
                            <button type="submit" disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default CourseEntrollmentForm
