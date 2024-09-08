import { useEffect, useMemo, useState } from 'react';
import { parseStatus } from '../utils/status-parser.ts';
import { ParcelStatus } from '../types/parcel.ts';

export function useStatus(parcelStatusList: ParcelStatus[]) {
    const status = useMemo(() => parseStatus(parcelStatusList), [parcelStatusList]);

    /**
     * At first all the statuses are false.
     * Then update the values according to the status, to ensure animation.
     */
    const [isSent, setSent] = useState(false);
    const [isPacking, setPacking] = useState(false);
    const [isHandedOver, setHandedOver] = useState(false);
    const [isUnderDelivery, setUnderDelivery] = useState(false);
    const [isDelivered, setDelivered] = useState(false);

    useEffect(() => {
        setSent(status.includes('sent'));
        setPacking(status.includes('packing'));
        setHandedOver(status.includes('handedOver'));
        setUnderDelivery(status.includes('underDelivery'));
        setDelivered(status.includes('delivered'));
    }, [status]);

    return [
        isSent,
        isPacking,
        isHandedOver,
        isUnderDelivery,
        isDelivered
    ];
}