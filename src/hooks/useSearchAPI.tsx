import { useQuery } from '@tanstack/react-query';
import { useKeyword } from './useKeyword.tsx';
import { API_URL } from '../constants/constants.ts';
import { ParcelInfo } from '../types/parcel.ts';

export function useSearchAPI() {
    const keyword = useKeyword();
    return useQuery({
        queryKey: ['search', keyword],
        queryFn: async (): Promise<ParcelInfo> => {
            const response = await fetch(API_URL.replace(':keyword', keyword));
            return response.json();
        },
        enabled: keyword !== '',
        refetchInterval: 600000,
    });
}