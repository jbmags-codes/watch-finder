import { fetchTMDB } from '@/app/lib/fetchTMDB';
import TrendingCarousel from '@/app/components/TrendingCarousel';

export default async function TrendingThisWeek() {
    const trendingThisWeekData: Promise<TMDBResponse> = fetchTMDB('https://api.themoviedb.org/3/trending/all/week', {
        next: { revalidate: 3600 },
    });

    const trendingThisWeek = (await trendingThisWeekData).results.filter((item) => item.media_type === 'movie' || item.media_type === 'tv');

    return <TrendingCarousel data={trendingThisWeek} />;
}
