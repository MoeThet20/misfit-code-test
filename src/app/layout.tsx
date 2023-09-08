import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '../components/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Code Test',
    description: 'Assignment'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Nav />
                <main className="d-flex flex-column justify-content-center align-items-center">{children}</main>
            </body>
        </html>
    );
}
