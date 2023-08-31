import axios from 'axios';
import { GetRegionsResponse } from './models/GetRegionsResponse.ts';
import { Region } from '../models/Region.ts';

const URL = 'https://uapowerkit.creatio.com/0/ServiceModel/PKitCreateOrderService.svc/GetRegionByName'
export const getRegionsByName = async (name: string): Promise<Region[]> => {
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