import Link from 'next/link';
import Image from 'next/image';
import UserScore from '@/app/components/UserScore';
import { cn } from '@/lib/utils';

type CardImageProps = {
    id: number;
    type?: string;
    src: string;
    title: string;
    score: number;
    className?: string;
};

export default function CardImage({ id, type, src, title, score, className }: CardImageProps) {
    return (
        <Link
            href={`/${type}/${id}`}
            className={cn('relative flex items-center justify-center rounded-xl shadow-sm hover:opacity-80 duration-300 aspect-[7/10]', className)}
            scroll={false}
        >
            <Image
                src={src}
                alt={`${title} Cover`}
                fill={true}
                priority={true}
                sizes="33vw"
                style={{
                    objectFit: 'cover',
                    borderRadius: '12px',
                    border: '1px solid hsl(var(--border))',
                }}
            />

            <div className="absolute bottom-2 right-2 z-50">
                <UserScore value={score} width={40} height={40} background={true} />
            </div>

            <div className="absolute h-full rounded-xl top-0 inset-x-0 bg-gradient-to- bg-gradient-to-t from-black/60 via-transparent to-transparent z-30 pointer-events-none" />
        </Link>
    );
}
