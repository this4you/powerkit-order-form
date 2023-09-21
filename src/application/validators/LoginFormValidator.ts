import { CreateOrderFormValues } from '../models/CreateOrderFormValues.ts';
import { FormValidator } from '../../components/commons/form/types.ts';
//@ts-ignore
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { ValidatorFieldUtils } from './ValidatorUtils.ts';

export class OrderFormValidator implements FormValidator<CreateOrderFormValues> {
    validate(data: CreateOrderFormValues): FieldErrors<CreateOrderFormValues> {
        return {
            name: ValidatorFieldUtils.required(data.name) || ValidatorFieldUtils.maxLength(data.name, 50),
            sureName: ValidatorFieldUtils.required(data.sureName) || ValidatorFieldUtils.maxLength(data.sureName, 50),
            email: ValidatorFieldUtils.required(data.email) || ValidatorFieldUtils.email(data.email),
            instagram: ValidatorFieldUtils.required(data.instagram) || ValidatorFieldUtils.maxLength(data.militaryNumber, 50),
            phoneNumber: ValidatorFieldUtils.required(data.phoneNumber),
            militaryNumber: ValidatorFieldUtils.required(data.militaryNumber) || ValidatorFieldUtils.maxLength(data.militaryNumber, 50),
            region: ValidatorFieldUtils.required(data.region),
            postOffice: ValidatorFieldUtils.required(data.postOffice),
        };
    }
}