import axios from 'axios';
import { GetRegionsResponse } from './models/GetRegionsResponse.ts';
import { Region } from '../models/Region.ts';
import { BASE_URL } from './axios.ts';

const URL = `${BASE_URL}GetRegionByName`;
export const getRegionsByNameHttp = async (name: string): Promise<Region[]> => {
    const response = await axios.create().get<{}, GetRegionsResponse, {}>(
        URL,
        {
            params: {name: name},
        }
    );

    //@ts-ignore
    return response.data.GetRegionByNameResult?.map(it => ({
        id: it.Id,
        name: it.Name,
    })) || [];
}