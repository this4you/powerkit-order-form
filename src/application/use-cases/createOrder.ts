import { CreateOrderFormValues } from '../models/CreateOrderFormValues.ts';
import { CreateOrder } from '../models/CreateOrder.ts';
import { createOrderHttp } from '../repositories/createOrderHttp.ts';
import { FormResult } from '../models/FormResult.ts';

const convertFileToByteArray = async (file: File): Promise<number[]> => {
    return new Promise((resolve) => {
        const reader = new FileReader();

        reader.readAsArrayBuffer(file);

        reader.onloadend = function (evt) {
            const fileByteArray: number[] = [];

            if (evt.target.readyState == FileReader.DONE) {
                const arrayBuffer = evt.target.result as ArrayBuffer;
                const array = new Uint8Array(arrayBuffer);
                for (let i = 0; i < array.length; i++) {
                    fileByteArray.push(array[i]);
                }
            }

            resolve(fileByteArray);
        }
    });
}

const mapFormValues = async (createOrderFormValues: CreateOrderFormValues): Promise<CreateOrder> => ({
    ...createOrderFormValues,
    file: {
        name: createOrderFormValues.approveDocument[0].name,
        approveDocument: await convertFileToByteArray(createOrderFormValues.approveDocument[0])
    },
    phoneNumber: createOrderFormValues.phoneNumber.replace(/\D/g, ''),
    region: createOrderFormValues.region.id,
    postOffice: createOrderFormValues.postOffice.id
});

export const createOrder = (setOrderResponse: (formResult: FormResult) => void) =>
    async (createOrderFormValues: CreateOrderFormValues) => {
        const createOrder = await mapFormValues(createOrderFormValues);

        const response = await createOrderHttp(createOrder);

        setOrderResponse({
            code: response.StatusCode,
            message: response.Message
        });
    }