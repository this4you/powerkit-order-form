import { CreateOrderFormValues } from '../models/CreateOrderFormValues.ts';
import { CreateOrder } from '../models/CreateOrder.ts';
import { CreateOrderResponse } from '../repositories/models/CreateOrderResponse.ts';
import { createOrderHttp } from '../repositories/createOrderHttp.ts';

const mapFormValues = (createOrderFormValues: CreateOrderFormValues): CreateOrder => ({
    ...createOrderFormValues,
    phoneNumber: createOrderFormValues.phoneNumber.replace(/\D/g, ''),
    region: createOrderFormValues.region.id,
    postOffice: createOrderFormValues.postOffice.id
});

export const createOrder = (setOrderResponse: (orderResponse: CreateOrderResponse) => void) =>
    async (createOrderFormValues: CreateOrderFormValues) => {
        const createOrder = mapFormValues(createOrderFormValues);

        const response = await createOrderHttp(createOrder);

        setOrderResponse(response);
    }