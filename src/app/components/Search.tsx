'use client';

import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import SearchFormInput from '@/app/components/SearchFormInput';
import MovieOrTVSelect from '@/app/components/MovieOrTVSelect';
import useSearch from '@/app/hooks/useSearch';
import Loading from '@/app/loading';

export default function SearchWrapper() {
    return (
        <Suspense fallback={<Loading />}>
            <Search />
        </Suspense>
    );
}

function Search() {
    const { route, setRoute, searchKeywords, setSearchKeywords, handleSubmit, isSearching } = useSearch();

    if (!route) return <Skeleton className="h-10 w-full rounded-lg" />;

    return (
        <div className="flex w-full rounded-lg">
            <SearchFormInput
                onSubmit={handleSubmit}
                route={route}
                inputValue={searchKeywords}
                onInputValueChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeywords(e.target.value)}
                isSearching={isSearching}
            />

            <div className="relative inline-flex">
                <MovieOrTVSelect value={route} onValueChange={(value: 'movie' | 'tv') => setRoute(value)} />
            </div>
        </div>
    );
}
