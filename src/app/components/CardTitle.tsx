import Link from 'next/link';
import { cn } from '@/lib/utils';

type CardTitleProps = {
    id: number;
    type?: string;
    title: string;
    linkClassName?: string;
    titleClassName?: string;
};

export default function CardTitle({ id, type, title, linkClassName, titleClassName }: CardTitleProps) {
    return (
        <Link href={`/${type}/${id}`} className={cn('hover:text-cyan-500 duration-300 w-fit', linkClassName)} scroll={false}>
            <h1 className={cn(titleClassName)}>{title}</h1>
        </Link>
    );
}
