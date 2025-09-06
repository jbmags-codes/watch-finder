'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { formatDate } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import CardImage from '@/app/components/CardImage';
import CardTitle from '@/app/components/CardTitle';

export default function TrendingTodayCarousel({ data }: { data: (Movie | TVShow)[] }) {
    return (
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="w-full max-w-5xl"
        >
            <CarouselContent>
                {data.length > 0 &&
                    data.map((item, index) => {
                        const id = item.id;
                        const type = item.media_type;
                        const src = item.poster_path === '' ? '/images/png/fallback.png' : `https://image.tmdb.org/t/p/original${item.poster_path}`;
                        const title = type === 'movie' ? item.title : type === 'tv' ? item.original_name : (item as Movie).title || (item as TVShow).original_name;
                        const date = type === 'movie' ? item.release_date : type === 'tv' ? item.first_air_date : (item as Movie).release_date || (item as TVShow).first_air_date;
                        const score = item.vote_average;

                        return (
                            <CarouselItem key={index} className="basis-1/2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                                <div className="flex flex-col w-full gap-x-2.5 sm:gap-x-5 md:gap-x-3.5 lg:gap-x-4 xl:gap-x-4 gap-y-1.75">
                                    <CardImage id={id} src={src} type={type} title={title} score={score} className="w-full" />

                                    <div className="flex flex-col w-full">
                                        <CardTitle id={id} type={type} title={title} titleClassName="font-medium text-sm sm:text-[0.9375rem] line-clamp-1" />
                                        <p className="text-xs text-muted-foreground">
                                            {formatDate(date, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        );
                    })}
            </CarouselContent>
            <CarouselPrevious className="-top-[1.95rem] left-auto right-12" />
            <CarouselNext className="-top-[1.95rem] right-0" />
        </Carousel>
    );
}
