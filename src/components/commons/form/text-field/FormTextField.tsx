import React from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { FormTextFieldProps } from './types.ts';
import InputMask from 'react-input-mask';

export const FormTextField: React.FC<FormTextFieldProps> = ({ name, maskConfig, ...rest }) => {
    const { register, formState: { errors } } = useFormContext();

    const fieldError = errors[name]?.toString() || '';
    debugger
    const registered = register(name);

    if (maskConfig) {
        return (
            <InputMask {...registered} {...maskConfig}>
                {
                    //@ts-ignore
                    (inputProps) => <TextField {...inputProps} {...rest} error={!!errors[name]} helperText={fieldError}/>
                }
            </InputMask>
        );
    }

    return <TextField {...registered} {...rest} error={!!errors[name]} helperText={fieldError}/>;
}