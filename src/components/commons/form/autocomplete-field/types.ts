import { AutocompleteProps } from '@mui/material/Autocomplete/index';
import { TextFieldProps } from '@mui/material/TextField/TextField';

export type AutocompleteTextFieldProps = {
    name: string;
    autocompleteProps: Partial<AutocompleteProps<any, any, any, any>>;
    textFieldProps?: TextFieldProps
};