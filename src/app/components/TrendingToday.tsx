import { fetchTMDB } from '@/app/lib/fetchTMDB';
import TrendingCarousel from '@/app/components/TrendingCarousel';

export default async function TrendingToday() {
    const trendingTodayData: Promise<TMDBResponse> = fetchTMDB('https://api.themoviedb.org/3/trending/all/day', {
        next: { revalidate: 3600 },
    });

    const trendingToday = (await trendingTodayData).results.filter((item) => item.media_type === 'movie' || item.media_type === 'tv');

    return <TrendingCarousel data={trendingToday} />;
}
