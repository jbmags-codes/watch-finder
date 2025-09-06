import { formatDate } from '@/lib/utils';
import CardImage from '@/app/components/CardImage';
import CardTitle from '@/app/components/CardTitle';
import CardDescription from '@/app/components/CardDescription';

type PopularCardProps = {
    id: number;
    type: string;
    src: string;
    title: string;
    date: string;
    description: string;
    score: number;
};

export default function PopularCard({ id, type, src, title, date, description, score }: PopularCardProps) {
    return (
        <div className="flex items-start w-full md:w-[calc(50%-0.5rem)] gap-x-3.5 xs:gap-x-4">
            <CardImage id={id} src={src} type={type} title={title} score={score} className="w-24 xs:w-28 sm:w-32" />

            <div className="flex flex-col w-[calc(100%-6rem-0.875rem)] xs:w-[calc(100%-7rem-1rem)] sm:w-[calc(100%-8rem-1rem)]">
                <CardTitle id={id} type={type} title={title} titleClassName="font-medium text-sm sm:text-[0.9375rem] line-clamp-1 xs:line-clamp-2" />

                <p className="text-xs text-muted-foreground">
                    {formatDate(date, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </p>

                <CardDescription description={description} className="line-clamp-6 mt-1.5 md:mt-2 [&>*]:text-xs sm:[&>*]:text-sm" />
            </div>
        </div>
    );
}
