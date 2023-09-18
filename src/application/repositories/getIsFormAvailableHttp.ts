import axios from 'axios';
import { BASE_URL } from './axios.ts';
import { GetIsFormAvailableResponse } from './models/GetIsFormAvailableResponse.ts';
import { IsFormAvailable } from '../models/IsFormAvailable.ts';

const URL = `${BASE_URL}GetIsFormAvailable`;
export const getIsFormAvailableHttp = async (): Promise<IsFormAvailable> => {
    const response = await axios.create().get<{}, GetIsFormAvailableResponse, {}>(
        URL
    );

    return {
        //@ts-ignore
        isAvailable: response.data.GetIsFormAvailableResult?.IsAvailable || false,
        //@ts-ignore
        message: response.data.GetIsFormAvailableResult?.Message || ''
    };
}