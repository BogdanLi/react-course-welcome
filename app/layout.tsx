import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/nav/Navbar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material';
import theme from '@/lib/theme';
import StoreProvider from '@/lib/redux/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Добро пожаловать на курс',
  description: 'Здесь вы узнаете всё, что вам нужно для начала курса',
  openGraph: {
    title: 'Добро пожаловать на курс',
    description: 'Здесь вы узнаете всё, что вам нужно для начала курса',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} min-h-[100vh]`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <StoreProvider>
              <main className="flex min-h-screen">
                <Navbar />
                {children}
              </main>
            </StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
