import { CreateOrderFormValues } from '../models/CreateOrderFormValues.ts';

export const createOrder = async (createOrderRequest: CreateOrderFormValues) => {
    console.log('CREATE ORDER', createOrderRequest);
}