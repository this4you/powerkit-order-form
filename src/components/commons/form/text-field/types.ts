import { TextFieldProps } from '@mui/material/TextField/TextField';
import { Props as MaskConfigProps } from 'react-input-mask';

export type FormTextFieldProps = {
    name: string;
    maskConfig?: MaskConfigProps
} & TextFieldProps;