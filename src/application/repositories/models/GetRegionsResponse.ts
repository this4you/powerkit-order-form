export type GetRegionsResponse = {
    GetRegionByNameResult: RegionResponse[]
}

export type RegionResponse = {
    Id: string;
    Name: string;
}