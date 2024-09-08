import { Status } from '../types/status.ts';
import { ParcelStatus } from '../types/parcel.ts';

const STATUS_MAP = {
    sent: ['52'],
    packing: ['51'],
    handedOver: ['01', '27', '03'],
    underDelivery: ['04'],
    delivered: ['05']
};

/**
 * Parse the status of the parcel to a mutli-status list.
 * Note: The status list is ordered from the first status to the last status.
 * @param parcelStatusList
 * @returns Status[]
 */
export const parseStatus = (parcelStatusList: ParcelStatus[]): Status[] => {
    for (const status of parcelStatusList) {
        if (STATUS_MAP['delivered'].includes(status.StatusCode)) {
            return ['', 'sent', 'packing', 'handedOver', 'underDelivery', 'delivered'];
        } else if (STATUS_MAP['underDelivery'].includes(status.StatusCode)) {
            return ['', 'sent', 'packing', 'handedOver', 'underDelivery'];
        } else if (STATUS_MAP['handedOver'].includes(status.StatusCode)) {
            return ['', 'sent', 'packing', 'handedOver'];
        } else if (STATUS_MAP['packing'].includes(status.StatusCode)) {
            return ['', 'sent', 'packing'];
        } else if (STATUS_MAP['sent'].includes(status.StatusCode)) {
            return ['', 'sent'];
        }
    }
    return [''];
};