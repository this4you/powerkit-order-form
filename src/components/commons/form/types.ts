import { FieldValues } from 'react-hook-form/dist/types';
import { PropsWithChildren } from 'react';
import { FieldErrors } from 'react-hook-form/dist/types/errors';

export type FormWrapperProps<Form extends FieldValues> = {
    submit(data: Form): void
    formValidator?: FormValidator<Form>,
} & PropsWithChildren

export interface FormValidator<Form extends FieldValues> {
    validate(data: Form): FieldErrors<Form>
}