import { Region } from './Region.ts';
import { PostOffice } from './PostOffice.ts';

export type CreateOrderFormValues = {
    name: string;
    sureName: string;
    email: string;
    instagram: string;
    phoneNumber: string;
    militaryNumber: string;
    region: Region;
    postOffice: PostOffice;
    additionalInfo: string;
    approveDocument: FileList
};