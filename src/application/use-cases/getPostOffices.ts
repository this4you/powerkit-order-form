import { Region } from '../models/Region.ts';
import { getRegionsByName } from '../repositories/getRegionsByName.ts';
import { getPostOfficesByRegionId } from '../repositories/getPostOfficesByRegionId.ts';

export const getPostOffices = async (regionId: string): Promise<Region[]> => {
    return await getPostOfficesByRegionId(regionId);
}