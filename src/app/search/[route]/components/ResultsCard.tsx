import { formatDate } from '@/lib/utils';
import CardImage from '@/app/components/CardImage';
import CardTitle from '@/app/components/CardTitle';

type ResultsCardProps = {
    route: string;
    item: Movie | TVShow;
};

export default function ResultsCard({ route, item }: ResultsCardProps) {
    const id = item.id;
    const src = !item.poster_path ? '/fallback.png' : `https://image.tmdb.org/t/p/original${item.poster_path}`;
    const title = route === 'movie' ? (item as Movie).title : (item as TVShow).original_name;
    const date = route === 'movie' ? (item as Movie).release_date : (item as TVShow).first_air_date;
    const score = item.vote_average;

    return (
        <div
            style={{
                width: `calc((100% - ((var(--tmdbSearchColumns) - 1) * 16px)) / var(--tmdbSearchColumns))`,
                height: 'auto',
                aspectRatio: 224 / 320,
            }}
            className="self-start"
        >
            <div className="flex flex-col items-start justify-start gap-y-2 duration-300 hover:opacity-80 overflow-hidden relative z-10">
                <CardImage id={id} type={route} src={src} title={title} score={score} className="w-full" />

                <div className="flex flex-col w-full">
                    <CardTitle id={id} type={route} title={title} titleClassName="font-medium text-sm sm:text-[0.9375rem] line-clamp-2" />
                    <p className="text-xs text-muted-foreground">
                        {formatDate(date, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
}
