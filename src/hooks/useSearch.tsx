import { useContext } from 'react';
import { SearchAPI } from '../providers/search-provider.tsx';

export function useSearch() {
    return useContext(SearchAPI);
}