export type ParcelStatus = {
    DepotCity: string;
    DepotNumber: string;
    StatusCode: string;
    StatusDate: string;
    StatusDescription: string;
    StatusInfo: string;
};

export type ParcelInfo = {
    ClientReference: string;
    DeliveryCountryCode: string;
    DeliveryZipCode: string;
    GetParcelStatusErrors: string[];
    ParcelNumber: number;
    ParcelStatusList: ParcelStatus[];
    Weight: number;
};