import { Region } from '../models/Region.ts';
import { getRegionsByNameHttp } from '../repositories/getRegionsByNameHttp.ts';

export const getRegions = async (name: string): Promise<Region[]> => {
    return await getRegionsByNameHttp(name);
}