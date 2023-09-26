import { PropsWithChildren } from 'react';
export type FieldValues = Record<string, any>;

export type FormWrapperProps<Form extends FieldValues> = {
    submit(data: Form): void
    formValidator?: FormValidator<Form>,
} & PropsWithChildren

export interface FormValidator<Form extends FieldValues> {
    validate(data: Form): any
}