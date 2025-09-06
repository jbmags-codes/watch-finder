import Image from 'next/image';

export default function Title() {
    return (
        <a href="/" className="flex flex-nowrap items-center justify-center w-fit gap-x-4">
            <span className="relative w-12 h-8 inline-block">
                <Image
                    src={'/tmdb.svg'}
                    alt="TMDB logo"
                    fill={true}
                    priority={true}
                    sizes="33vw"
                    style={{
                        objectFit: 'contain',
                    }}
                />
            </span>
            <span className="font-semibold text-xl text-center -tracking-[0.015625rem]">WatchFinder</span>
        </a>
    );
}
