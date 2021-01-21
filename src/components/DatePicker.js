import React from 'react'
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';

function DatePicker(props) {
    const { label, name, ...rest } = props
    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name}>
                {
                    ({ form, field }) => {
                        // console.log(form)
                        const { setFieldValue } = form
                        const { value } = field
                        // console.log(field)
                        return (
                            <DateView id={name} {...field} {...rest} selected={value} onChange={date => setFieldValue(name, date)} />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default DatePicker
