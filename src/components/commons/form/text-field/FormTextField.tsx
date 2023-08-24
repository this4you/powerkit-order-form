import React from 'react';
import { TextField } from '@mui/material';
import { FieldError, useFormContext } from 'react-hook-form';
import { FormTextFieldProps } from './types.ts';

export const FormTextField: React.FC<FormTextFieldProps> = ({ name,onChange, ...rest }) => {
    const { register, formState: { errors } } = useFormContext();

    const fieldError = errors[name] as FieldError;

    const registered = register(name);

    const onChangeDouble = (event) => {
        onChange && onChange(event);
        registered.onChange(event);
    }

    return <TextField error={!!errors[name]} helperText={fieldError?.message} {...registered} {...rest} onChange={onChangeDouble}/>;
}