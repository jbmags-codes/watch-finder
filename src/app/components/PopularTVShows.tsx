import { fetchTMDB } from '@/app/lib/fetchTMDB';
import PopularCard from '@/app/components/PopularCard';

export default async function PopularTVShows() {
    const popularTVShowsData: Promise<TMDBResponse> = fetchTMDB(
        'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=1',
        {
            next: { revalidate: 3600 },
        }
    );

    const popularTVShows = await popularTVShowsData;

    return (
        <div className="flex flex-col w-full gap-y-4">
            <h2 className="font-semibold text-xl tracking-tight text-[#0d253f]">Popular TV Shows</h2>

            <div className="flex flex-col md:flex-row md:flex-wrap justify-start xs:justify-between sm:justify-start md:justify-between w-full gap-y-3.5 xs:gap-y-4 md:gap-4">
                {popularTVShows.results.map((item, index) => {
                    const id = item.id;
                    const src = item.poster_path === '' ? '/images/png/fallback.png' : `https://image.tmdb.org/t/p/original${item.poster_path}`;
                    const title = (item as TVShow).original_name;
                    const date = (item as TVShow).first_air_date;
                    const description = item.overview;
                    const score = item.vote_average;

                    return <PopularCard key={index} id={id} type="tv" src={src} title={title} date={date} description={description} score={score} />;
                })}
            </div>
        </div>
    );
}
