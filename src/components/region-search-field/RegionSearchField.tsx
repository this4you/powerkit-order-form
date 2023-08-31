import React, { useEffect, useMemo, useState } from 'react';
import { AutocompleteTextField } from '../commons/form/autocomplete-field/AutocompleteTextField.tsx';
import { inputStyle } from '../../App.tsx';
import { getRegions } from '../../application/use-cases/getRegions.ts';
import { debounce } from 'lodash';

export const RegionSearchField: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [options, setOptions] = useState([]);

    const initOptions = useMemo(() => debounce((value: string) => {
        return getRegions(value).then((data) => {
            setOptions(data);
        });
    }, 600), []);

    useEffect(() => {
        if (searchValue.length > 2) {
            initOptions(searchValue)
        } else {
            setOptions([]);
        }
    }, [searchValue, initOptions])

    const onSearchFiledChange = (event: any) => {
        setSearchValue(event.target.value)
    }

    return (
        <AutocompleteTextField
            name="region"
            autocompleteProps={{
                disablePortal: true,
                options: options,
                sx: inputStyle,
                noOptionsText: 'Введіть назву населеногу пункту'
            }}
            textFieldProps={{
                variant: 'standard',
                label: 'Населений пункт',
                onChange: onSearchFiledChange,
            }}
        />
    )
}
