import React from 'react'
import { Formik, Form } from "formik";
import * as yup from 'yup';
import FormikControl from './FormikControl';

function Registration() {
    const modeOfContactList = [
        {
            key: 'Email',
            value: 'emailmoc'
        },
        {
            key: 'Telephone',
            value: 'telephonmoc'
        }
    ]
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phNumber: ''
    }

    const validationSchema = yup.object({
        email: yup.string().email('Invalid Email Format').required('Email is Required'),
        password: yup.string().required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), ''], 'Password Missmatch').required('Confirm Password is required'),
        modeOfContact: yup.string().required('Choose mode of contact'),
        phNumber: yup.string().when('modeOfContact', {
            is: 'telephonmoc',
            then: yup.string().required('Telephone is required')
        })

    })

    const onSubmit = (values) => {
        console.log('Form Data:', values)
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                (formik) => {
                    return (
                        <Form>
                            <FormikControl control="input" type="email" name="email" label="Email" />
                            <FormikControl control="input" type="password" name="password" label="Password" />
                            <FormikControl control="input" type="password" name="confirmPassword" label="Confirm Password" />
                            <FormikControl control="radio" name="modeOfContact" label="Mode of Contact" options={modeOfContactList} />
                            <FormikControl control="input" type="text" name="phNumber" label="Phone Number" />
                            <button type="submit" disabled={!formik.isValid}> Register</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default Registration
