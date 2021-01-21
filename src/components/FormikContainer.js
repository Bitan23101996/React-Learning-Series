import React from 'react'
import { Formik, Form } from "formik";
import * as yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {
    //used for dropdown
    const dropDownItem = [
        {
            key: 'Select a topic',
            value: ''
        }, {
            key: 'Option 1',
            value: 1
        },
        {
            key: 'Option 2',
            value: 2
        },
        {
            key: 'Option 3',
            value: 3
        }
    ]
    //used for Radio Button
    const radioList = [
        {
            key: 'Male',
            value: 1
        },
        {
            key: 'Female',
            value: 2
        }

    ]

    //used for checkbox
    const checkBoxList = [
        {
            key: 'Angular',
            value: 'op1'
        },
        {
            key: 'React',
            value: "op2"
        }


    ]


    const initialValues = {
        email: '',
        description: '',
        topic: '',
        gender: '',
        language: [],
        dateOfBirth: null

    }
    const validationSchema = yup.object({
        email: yup.string().email('Invalid Email').required('Email is required!!!'),
        description: yup.string().required('Description is required!!!'),
        topic: yup.string().required('Topic is required!!!'),
        gender: yup.string().required('Gender Field is required!!!'),
        language: yup.array().min(1, "Select atleast 1 language!!!"),
        dateOfBirth: yup.date().required("Select Date of Birth!!!").nullable()
    })
    const onSubmit = (values) => {
        console.log('Form Data:', values);
        console.log('Saved Data:', JSON.parse(JSON.stringify(values)))
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            {
                formik => (
                    <Form>
                        <FormikControl control="input" type="email" label="Email" name="email" />
                        <FormikControl control="textarea" label="Description" name="description" />
                        <FormikControl control="select" label="Select Topic" name="topic" options={dropDownItem} />
                        <FormikControl control="radio" label="Choose Gender" name="gender" options={radioList} />
                        <FormikControl control="checkbox" label="Language Known" name="language" options={checkBoxList} />
                        <FormikControl control="date" label="Choose Date of Birth" name="dateOfBirth" />
                        <button type="submit">Submit</button>
                    </Form>
                )

            }
        </Formik>
    )
}

export default FormikContainer
