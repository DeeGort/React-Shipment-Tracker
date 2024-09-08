import { useTranslation } from 'react-i18next';

interface TrackerHeaderProps {
    trackNumber: string;
}

export function TrackerHeader({
    trackNumber
}: TrackerHeaderProps) {
    const { t } = useTranslation();
    return (
        <div className="tracker-header">
            <h2>{t('trackerTitle')}</h2>
            <div className="tracker-info">
                <div className="track-number-title">
                    {t('trackNumber')}
                </div>
                <div>
                    { trackNumber }
                </div>
            </div>
        </div>
    );
}