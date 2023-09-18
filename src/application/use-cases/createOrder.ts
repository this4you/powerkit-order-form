import { CreateOrderFormValues } from '../models/CreateOrderFormValues.ts';
import { CreateOrder } from '../models/CreateOrder.ts';
import { createOrderHttp } from '../repositories/createOrderHttp.ts';
import { FormResult } from '../models/FormResult.ts';

const mapFormValues = (createOrderFormValues: CreateOrderFormValues): CreateOrder => ({
    ...createOrderFormValues,
    phoneNumber: createOrderFormValues.phoneNumber.replace(/\D/g, ''),
    region: createOrderFormValues.region.id,
    postOffice: createOrderFormValues.postOffice.id
});

export const createOrder = (setOrderResponse: (formResult: FormResult) => void) =>
    async (createOrderFormValues: CreateOrderFormValues) => {
        const createOrder = mapFormValues(createOrderFormValues);

        const response = await createOrderHttp(createOrder);

        setOrderResponse({
            code: response.StatusCode,
            message: response.Message
        });
    }