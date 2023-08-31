import { CreateOrderFormValues } from '../models/CreateOrderFormValues.ts';
import { FormValidator } from '../../components/commons/form/types.ts';
//@ts-ignore
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { ValidatorFieldUtils } from './ValidatorUtils.ts';

export class OrderFormValidator implements FormValidator<CreateOrderFormValues> {
    validate(data: CreateOrderFormValues): FieldErrors<CreateOrderFormValues> {
        return {
            email: ValidatorFieldUtils.required(data.email) || ValidatorFieldUtils.email(data.email),
        };
    }
}