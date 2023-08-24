import { CreateOrderRequest } from '../models/CreateOrderRequest.ts';

export const createOrder = async (createOrderRequest: CreateOrderRequest) => {
    console.log('CREATE ORDER', createOrderRequest);
}