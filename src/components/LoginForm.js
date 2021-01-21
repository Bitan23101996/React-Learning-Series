import React from 'react'
import FormikControl from './FormikControl'
import { Form, Formik} from 'formik'
import * as yup from 'yup'

function LoginForm() {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = yup.object({
        email: yup.string().email('Invalid Email Format').required('Email is required'),
        password: yup.string().required('Password is required')
    })

    const onSubmit = (values) => {
        console.log('Form Values:', values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                (formik) => {
                    console.log(formik)
                    return (
                        <Form>
                            <h2>Login Form</h2>
                            <FormikControl control="chakrainput" type="email" name="email" label="Email" />
                            <FormikControl control="chakrainput" type="password" name="password" label="Password" />
                            {/* <FormikControl control="input" type="email" name="email" label="Email" />
                            <FormikControl control="input" type="password" name="password" label="Password" /> */}
                           
                          
                            <button type="submit" disabled={!formik.isValid}>Login</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default LoginForm
