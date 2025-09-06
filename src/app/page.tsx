import Trending from '@/app/components/Trending';
import PopularMovies from '@/app/components/PopularMovies';
import PopularTVShows from '@/app/components/PopularTVShows';

export default function Home() {
    return (
        <div className="flex flex-col w-full gap-y-7 md:gap-y-8 pb-8 sm:pb-20">
            <Trending />

            <div className="flex flex-col w-full gap-y-7 md:gap-y-8">
                <PopularMovies />
                <PopularTVShows />
            </div>
        </div>
    );
}
