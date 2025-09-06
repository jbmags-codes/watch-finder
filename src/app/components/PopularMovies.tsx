import { fetchTMDB } from '@/app/lib/fetchTMDB';
import PopularCard from '@/app/components/PopularCard';

export default async function PopularMovies() {
    const popularMoviesData: Promise<TMDBResponse> = fetchTMDB(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=1',
        {
            next: { revalidate: 3600 },
        }
    );

    const popularMovies = await popularMoviesData;

    return (
        <div className="flex flex-col w-full gap-y-4">
            <h2 className="font-semibold text-xl tracking-tight">Popular Movies</h2>

            <div className="flex flex-col md:flex-row md:flex-wrap justify-start xs:justify-between sm:justify-start md:justify-between w-full gap-y-3.5 xs:gap-y-4 md:gap-4">
                {popularMovies.results.map((item, index) => {
                    const id = item.id;
                    const src = item.poster_path === '' ? '/images/png/fallback.png' : `https://image.tmdb.org/t/p/original${item.poster_path}`;
                    const title = (item as Movie).title;
                    const date = (item as Movie).release_date;
                    const description = item.overview;
                    const score = item.vote_average;

                    return <PopularCard key={index} id={id} type="movie" src={src} title={title} date={date} description={description} score={score} />;
                })}
            </div>
        </div>
    );
}
