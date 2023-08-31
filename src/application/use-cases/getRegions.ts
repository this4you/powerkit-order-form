import { Region } from '../models/Region.ts';
import { getRegionsByName } from '../repositories/getRegionsByName.ts';

export const getRegions = async (name: string): Promise<Region[]> => {
    return await getRegionsByName(name);
}