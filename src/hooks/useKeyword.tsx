import { useContext } from 'react';
import { SearchContext } from '../providers/search-provider.tsx';

export function useKeyword() {
    return useContext(SearchContext);
}