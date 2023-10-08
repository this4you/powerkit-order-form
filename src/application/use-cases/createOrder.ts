import { CreateOrderFormValues } from '../models/CreateOrderFormValues.ts';
import { CreateOrder } from '../models/CreateOrder.ts';
import { createOrderHttp } from '../repositories/createOrderHttp.ts';
import { FormResult } from '../models/FormResult.ts';

const convertFileToByteArray = async (file: File): Promise<string> => {
    return new Promise((resolve) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function () {
            resolve(
                reader?.result?.toString()
                    ?.replace('data:', '')
                    ?.replace(/^.+,/, '')
            );
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

export const createOrder = (setOrderResponse: (formResult: FormResult) => void, setLoading: (isLoading: boolean) => void) =>
    async (createOrderFormValues: CreateOrderFormValues) => {
        setLoading(true);
        try {
            const createOrder = await mapFormValues(createOrderFormValues);

            const response = await createOrderHttp(createOrder);

            setOrderResponse({
                code: response.StatusCode,
                message: response.Message
            });
        } catch (e) {
            setOrderResponse({
                code: "-1",
                message: "Виникла помилка в процесі створення замовлення. Будь ласка, напишіть нам в instagram"
            });
        } finally {
            setLoading(false);
        }
    }