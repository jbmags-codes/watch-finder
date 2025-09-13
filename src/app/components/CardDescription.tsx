import Markdown from 'react-markdown';
import { cn } from '@/lib/utils';

type CardDescriptionProps = {
    description: string;
    className?: string;
};

export default function CardDescription({ description, className }: CardDescriptionProps) {
    return (
        description && (
            <Markdown className={cn('[&>*]:text-muted-foreground [&>p]:mb-2 [&>hr]:my-2 [&>ul]:text-sm [&>ul]:pl-3.5 [&>ul>li]:list-disc [&_*_a]:text-orange-600', className)}>
                {description}
            </Markdown>
        )
    );
}
