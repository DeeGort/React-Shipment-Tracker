import { TrackerStatus } from '../tracker-status/tracker-status.tsx';
import { Timeline } from '../timeline/timeline.tsx';
import { ParcelStatus } from '../../../types/parcel.ts';

interface TrackerBodyProps {
    parcelStatusList: ParcelStatus[];
}

export function TrackerBody({
   parcelStatusList
}: TrackerBodyProps) {
    return (
        <div className='tracker-body'>
            <TrackerStatus parcelStatusList={parcelStatusList}/>
            <Timeline parcelStatusList={parcelStatusList}/>
        </div>
    );
}