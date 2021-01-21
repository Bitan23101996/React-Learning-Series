import React from 'react'
import { Field } from 'formik'
import {
    FormControl,
    Input,
    FormLabel,
    FormErrorMessage
} from "@chakra-ui/react"
function ChakraInput(props) {
    const { name, label, ...rest } = props
    return (
        <Field name={name}>
            {
                ({ field, form }) => {
                    return (
                        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                            <FormLabel htmlFor={name}>{label}</FormLabel>
                            <Input name={name} id={name} {...rest} {...field} />
                            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                        </FormControl>
                    )
                }
            }

        </Field>
    )
}

export default ChakraInput
