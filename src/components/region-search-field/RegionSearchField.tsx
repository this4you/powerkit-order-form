import React, { useEffect, useMemo, useState } from 'react';
import { AutocompleteTextField } from '../commons/form/autocomplete-field/AutocompleteTextField.tsx';
import { getRegions } from '../../application/use-cases/getRegions.ts';
import { debounce } from 'lodash';
import { inputStyle } from '../commons/styles.ts';

export const RegionSearchField: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [options, setOptions] = useState([]);

    const initOptions = useMemo(() => debounce((value: string) => {
        return getRegions(value).then((data) => {
            setLoading(false);
            setOptions(data);
        });
    }, 600), []);

    useEffect(() => {
        if (searchValue.length > 2) {
            setLoading(true);
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
                loading : loading,
                loadingText: 'Завантаження...',
                options: options,
                sx: inputStyle,
                noOptionsText: 'Введіть назву населеногу пункту'
            }}
            textFieldProps={{
                required: true,
                variant: 'standard',
                label: 'Населений пункт',
                onChange: onSearchFiledChange,
            }}
        />
    )
}
