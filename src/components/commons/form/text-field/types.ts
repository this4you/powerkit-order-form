import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { TextFieldProps } from '@mui/material/TextField/TextField';

export type FormTextFieldProps = {
    name: string;
} & TextFieldProps;