
import { useTranslation } from 'react-i18next';
import { StatusCard } from '../status-card/status-card.tsx';
import { Divider } from '../divider/divider.tsx';
import { ParcelStatus } from '../../../types/parcel.ts';
import { StatusContainer } from '../status-container/status-container.tsx';
import { useStatus } from '../../../hooks/useStatus.tsx';
import sentIcon from '../../../assets/sent.svg';
import packingIcon from '../../../assets/packing.svg';
import handedOverIcon from '../../../assets/handed-over.svg';
import underDeliveryIcon from '../../../assets/under-delivery.svg';
import deliveredIcon from '../../../assets/delivered.svg';

interface TrackerStatusProps {
    parcelStatusList: ParcelStatus[];
}

export function TrackerStatus({ parcelStatusList }: TrackerStatusProps) {
    const { t } = useTranslation();
    const [
        isSent,
        isPacking,
        isHandedOver,
        isUnderDelivery,
        isDelivered
    ] = useStatus(parcelStatusList);

    return (
        <div className="tracker-status">
            <StatusContainer isActive={isSent}>
                <StatusCard icon={sentIcon} status={t('status.sent')}/>
            </StatusContainer>
            <StatusContainer isActive={isPacking}>
                <Divider/>
                <StatusCard icon={packingIcon} status={t('status.packing')}/>
            </StatusContainer>
            <StatusContainer isActive={isHandedOver}>
                <Divider/>
                <StatusCard icon={handedOverIcon} status={t('status.handedOver')}/>
            </StatusContainer>
            <StatusContainer isActive={isUnderDelivery}>
                <Divider/>
                <StatusCard icon={underDeliveryIcon} status={t('status.underDelivery')}/>
            </StatusContainer>
            <StatusContainer isActive={isDelivered}>
                <Divider/>
                <StatusCard icon={deliveredIcon} status={t('status.delivered')}/>
            </StatusContainer>
        </div>
    );
}