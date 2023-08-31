import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Controller, FieldError, useFormContext } from 'react-hook-form';
import { AutocompleteTextFieldProps } from './types.ts';
import { Region } from '../../../../application/models/Region.ts';
export const AutocompleteTextField: React.FC<AutocompleteTextFieldProps> = ({ name, autocompleteProps, textFieldProps }) => {
    const { formState: { errors }, control} = useFormContext();

    const fieldError = errors[name] as FieldError;

    return <Controller
        render={({ field: {onChange}, ...props }) =>
            <Autocomplete
                options={[]}
                onChange={(e, data) => onChange(data)}
                getOptionLabel={(option:Region) => option.name}
                {...autocompleteProps}
                renderInput={(params) => <TextField {...params} error={!!errors[name]} helperText={fieldError?.message} {...textFieldProps}  />}
            />
        }
        name={name}
        control={control}
        defaultValue={{ code: "AF", label: "Afghanistan", phone: "93" }}
    />
}