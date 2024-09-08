import {SearchBar} from '../../ui/search-bar/search-bar.tsx';
import {useTranslation} from 'react-i18next';

export function Banner() {
    const { t } = useTranslation();
    return (
        <section className="banner">
            <div className="container">
                <div className="left-content">
                    <h1>{t('heading')}</h1>
                    <SearchBar/>
                </div>
                <div className="right-content">
                    <img src="https://dummyimage.com/600x400/000/fff" alt=""/>
                </div>
            </div>
        </section>
    );
}