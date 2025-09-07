import Image from 'next/image';

export default function CastScroller({ cast }: { cast: MovieCastMember[] | TVShowCastMember[] }) {
    return (
        cast.length > 0 && (
            <div className="flex flex-col w-full gap-y-4">
                <h1 className="text-xl font-semibold">
                    Cast <span className="bg-black dark:bg-white text-white dark:text-black text-lg px-2 py-1 rounded-sm">{cast.length}</span>
                </h1>

                <div className="flex items-center gap-x-4 w-full overflow-x-scroll no-scrollbar">
                    {cast.map((cast, index) => {
                        const src = cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}` : '/fallback.png';
                        const name = cast.name;
                        const character = cast.character;

                        return (
                            <div key={index} className="flex flex-col self-start gap-y-2">
                                <div className="relative flex items-center justify-center rounded-xl shadow-sm hover:opacity-80 duration-300 w-36 aspect-[7/10]">
                                    <Image
                                        src={src}
                                        alt={name}
                                        fill={true}
                                        priority={true}
                                        sizes="33vw"
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: '12px',
                                            border: '1px solid hsl(var(--border))',
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col w-full">
                                    <span className="font-medium text-sm">{name}</span>
                                    <span className="text-xs text-muted-foreground">{character}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    );
}
