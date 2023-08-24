import React from 'react';
import { TextField } from '@mui/material';
import { FieldError, useFormContext } from 'react-hook-form';
import { FormTextFieldProps } from './types.ts';
import InputMask from 'react-input-mask';

export const FormTextField: React.FC<FormTextFieldProps> = ({ name, maskConfig, ...rest }) => {
    const { register, formState: { errors } } = useFormContext();

    const fieldError = errors[name] as FieldError;

    const registered = register(name);

    if (maskConfig) {
        return (
            <InputMask {...registered} {...maskConfig}>
                {
                    //@ts-ignore
                    (inputProps) => <TextField error={!!errors[name]} helperText={fieldError?.message} {...inputProps} {...rest}/>
                }
            </InputMask>
        );
    }

    return <TextField error={!!errors[name]} helperText={fieldError?.message} {...registered} {...rest}/>;
}