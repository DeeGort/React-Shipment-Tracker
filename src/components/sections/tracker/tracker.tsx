import { useSearchAPI } from '../../../hooks/useSearchAPI.tsx';
import { TrackerHeader } from '../../ui/tracker-header/tracker-header.tsx';
import { TrackerBody } from '../../ui/tracker-body/tracker-body.tsx';
import { TrackerFooter } from '../../ui/tracker-footer/tracker-footer.tsx';

export function Tracker() {
    const { data } = useSearchAPI();

    if (!data) {
        return '';
    }

    return (
        <section className="container">
            <div className="tracker">
                <TrackerHeader trackNumber={data.ClientReference}/>
                <TrackerBody parcelStatusList={data.ParcelStatusList}/>
                <TrackerFooter/>
            </div>
        </section>
    );
}