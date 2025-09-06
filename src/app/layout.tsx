import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { techStack } from '@/app/constants/tech-stack';
import Header from '@/app/components/Header';
import Title from '@/app/components/Title';
import Search from '@/app/components/Search';
import Credits from '@/app/components/Credits';
import TechStack from '@/app/components/TechStack';
import GitHubRepo from '@/app/components/GitHubRepo';
import Footer from '@/app/components/Footer';
import '@/app/globals.css';

const inter = Inter({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'WatchFinder | jbcodes | Web Development and Embedded Systems',
    icons: {
        icon: '/tmdb.svg',
    },
    description: 'WatchFinder helps you discover the best movies and TV shows. Search, explore trending titles, and find what to watch next with ease.',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    <Header />

                    <main className="flex flex-col w-full min-h-[100svh] sm:min-h-[100dvh] py-10 xs:py-12 sm:py-14 md:py-20 px-6">
                        <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
                            <Title />

                            {/* Spacer */}
                            <div className="py-2.5" />

                            <Search />

                            {/* Spacer */}
                            <div className="py-4 md:py-5" />

                            {children}

                            {/* Spacer */}
                            <div className="py-3 xs:py-4 sm:py-5" />

                            <Credits />

                            {/* Spacer */}
                            <div className="py-3 xs:py-4 sm:py-5" />

                            <TechStack techStack={techStack} />

                            {/* Spacer */}
                            <div className="py-3 xs:py-4 sm:py-5" />

                            <GitHubRepo link="https://github.com/jbmags-codes/watch-finder-nextjs" />
                        </div>
                    </main>

                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
