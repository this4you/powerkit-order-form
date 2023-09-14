import { GetRegionsResponse } from './models/GetRegionsResponse.ts';
import { appAxios, BASE_URL } from './axios.ts';
import { PostOffice } from '../models/PostOffice.ts';

const URL = `${BASE_URL}GetPostOfficesByRegionId`;
export const getPostOfficesByRegionIdHttp = async (regionId: string): Promise<PostOffice[]> => {
    const response = await appAxios.get<{}, GetRegionsResponse, {}>(
        URL,
        {
            params: {regionId: regionId},
        }
    );

    //@ts-ignore
    return sortAddresses(response.data.GetPostOfficesByRegionIdResult?.map(it => ({
        id: it.Id,
        name: reformatAddress(it.Name),
    })) || []);
}


function reformatAddress(inputString: string): string {
    const match = inputString.match(/№\d+/);

    if (match) {
        const firstMatch = match[0];
        const updatedString = inputString.replace(firstMatch, '');
        const reformattedString = `${firstMatch.trim()} ${updatedString.trim()}`;
        return reformattedString.replace(',', '');
    } else {
        return inputString
    }
}

function sortAddresses(address: PostOffice[]): PostOffice[] {
    address.sort((a, b) => {
        const numberA = parseInt(a.name.match(/№(\d+)/)[1]);
        const numberB = parseInt(b.name.match(/№(\d+)/)[1]);

        return numberA - numberB;
    });

    return address;
}