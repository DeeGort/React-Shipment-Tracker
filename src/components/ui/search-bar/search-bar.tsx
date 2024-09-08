import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { useSearch } from '../../../hooks/useSearch.tsx';
import playIcon from '../../../assets/play.svg';
import searchIcon from '../../../assets/search.svg';

export function SearchBar() {
    const { t } = useTranslation();
    const term = useRef<HTMLInputElement>(null);
    const search = useSearch();

    function onSearch() {
        search(term.current?.value ?? '');
    }

    function onType(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            onSearch();
        }
    }

    function focusClick() {
        term.current?.focus();
    }

    return (
        <div onClick={focusClick}>
            <div className="search-bar">
                <img src={searchIcon} alt="" className="pre-icon"/>
                <input type="text" placeholder={t('searchPlaceholder')} ref={term} onKeyUp={onType}/>
                <button onClick={onSearch} className="search-button">
                    <img src={playIcon} alt=""/>
                </button>
            </div>
        </div>
    );
}