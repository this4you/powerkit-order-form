export type CreateOrder = {
    name: string;
    sureName: string;
    email: string;
    instagram: string;
    phoneNumber: string;
    militaryNumber: string;
    region: string;
    postOffice: string;
    additionalInfo: string;
    file: ApproveDocument
};

export type ApproveDocument = {
    name: string;
    approveDocument: number[]
}