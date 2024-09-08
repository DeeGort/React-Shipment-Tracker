import { useState } from 'react';
import { ParcelStatus } from '../../../types/parcel.ts';
import { parseDate } from '../../../utils/date-parser.ts';
import { useTranslation } from 'react-i18next';
import { TIMELINE_LIMIT } from '../../../constants/constants.ts';

interface TimelineProps {
    parcelStatusList: ParcelStatus[];
}

export function Timeline({ parcelStatusList }: TimelineProps) {
    const { t } = useTranslation();
    const [showAll, setShowAll] = useState(parcelStatusList.length < TIMELINE_LIMIT);

    function onToggleMore(value: boolean) {
        setShowAll(value);
    }

    return (
        <div className="timeline-container">
            <div className={`timeline ${!showAll ? 'limited': 'all'}`}>
                {
                    parcelStatusList
                        .filter((_, index) => showAll ? true : index < TIMELINE_LIMIT)
                        .map((status) => {
                            const parsedDate = parseDate(status.StatusDate);
                            return (
                                <div className="entry" key={status.StatusCode}>
                                    <div className="date-time">
                                        <div className="date">{ parsedDate.date }</div>
                                        <div className="time">{ parsedDate.time }</div>
                                    </div>
                                    <div className="description">{status.StatusDescription}</div>
                                </div>
                            );
                        })
                }
            </div>
            {
                !showAll && (
                    <button className="show-all" onClick={() => onToggleMore(true)}>
                        {t('shopAll')}
                    </button>
                )
            }
        </div>
    );
}