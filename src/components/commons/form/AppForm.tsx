
import { FormProvider, useForm } from 'react-hook-form';
import { FormWrapperProps } from './types.ts';

// @ts-ignore
import { FieldValues } from 'react-hook-form/dist/types';

const isEmptyObject = (obj: object): boolean => Object.entries(obj).every(([key, value]) => {
    if (value instanceof Object) return isEmptyObject(value)

    return !value
})

export const AppForm = <T extends FieldValues>({ children, submit, formValidator }: FormWrapperProps<T>) => {
    const form = useForm<T>({
        mode: 'onChange',
        resolver: async (data) => {
            if (!formValidator) {
                return {
                    values: data,
                    errors: {}
                };
            }

            const error = formValidator.validate(data);

            if (isEmptyObject(error)) {
                return {
                    values: data,
                    errors: {}
                };
            } else {
                return {
                    values: {},
                    errors: error
                }
            }
        }
    });

    const onSubmit = form.handleSubmit((data, e) => {
        e?.preventDefault();
        submit(data);
    })

    return (
        <FormProvider {...form}>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </FormProvider>
    )
}