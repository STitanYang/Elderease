import './globals.css';
import type { Metadata } from 'next';
import { Inter, Nabla } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GreenCare | Elderly Home Care Services',
  description: 'Professional and compassionate home care services for the elderly',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className={inter.className}>
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex min-h-screen flex-col items-center">
        <div className="w-full justify-center">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  </body>
</html>


  );
}