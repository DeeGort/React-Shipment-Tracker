import React from 'react';

export const SearchContext = React.createContext<string>('');
export const SearchAPI = React.createContext<React.Dispatch<React.SetStateAction<string>>>(() => {});

export function SearchProvider({ children }: {
    children: React.ReactNode;
}) {
    const [searchTerm, setSearchTerm] = React.useState('');

    return (
        <SearchContext.Provider value={searchTerm}>
            <SearchAPI.Provider value={setSearchTerm}>
                { children }
            </SearchAPI.Provider>
        </SearchContext.Provider>
    );
}