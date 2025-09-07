import type { Metadata } from 'next';
import { fetchTMDB } from '@/app/lib/fetchTMDB';
import BackButton from '@/app/components/BackButton';
import MainInfo from './components/MainInfo';
import CastScroller from '@/app/components/CastScroller';
import CrewScroller from '@/app/components/CrewScroller';

type MovieProps = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata({ params }: MovieProps): Promise<Metadata> {
    const { id } = await params;
    const movieDetailsData: Promise<MovieDetails> = fetchTMDB(`https://api.themoviedb.org/3/movie/${id}`);
    const movieDetails = await movieDetailsData;

    return {
        title: `${movieDetails.title} | jbcodes | Movie and TV Show Search Web App`,
        description: movieDetails.overview,
    };
}

export default async function Movie({ params }: MovieProps) {
    const { id } = await params;
    const movieDetailsData: Promise<MovieDetails> = fetchTMDB(`https://api.themoviedb.org/3/movie/${id}`);
    const movieCreditsData: Promise<MovieCredits> = fetchTMDB(`https://api.themoviedb.org/3/movie/${id}/credits`);

    const [movieDetails, movieCredits] = await Promise.all([movieDetailsData, movieCreditsData]);

    return (
        <div className="flex flex-col w-full">
            <BackButton />

            {/* Spacer */}
            <div className="py-2.5 md:py-3" />

            <MainInfo movieDetails={movieDetails} />

            {/* Spacer */}
            <div className="py-3 md:py-4" />

            <CastScroller cast={movieCredits.cast} />

            {/* Spacer */}
            <div className="py-2.5 md:py-3" />

            <CrewScroller crew={movieCredits.crew} />
        </div>
    );
}
