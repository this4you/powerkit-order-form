import { CreateOrderRequest } from '../models/CreateOrderRequest.ts';
import { FormValidator } from '../../components/commons/form/types.ts';
//@ts-ignore
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { ValidatorFieldUtils } from './ValidatorUtils.ts';

export class OrderFormValidator implements FormValidator<CreateOrderRequest> {
    validate(data: CreateOrderRequest): FieldErrors<CreateOrderRequest> {
        return {
            email: ValidatorFieldUtils.required(data.email) || ValidatorFieldUtils.email(data.email),
        };
    }
}