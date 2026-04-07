'use client';

import './globals.css';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const metadata = {
  title: 'Bali Spa Nature Products',
  description: 'Natural spa and wellness products crafted in Bali.',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <LayoutGroup>
          <header className="p-6 bg-white shadow-md">
            <div className="max-w-6xl mx-auto text-2xl font-bold">
              🌿 Bali Spa Nature
            </div>
          </header>

          <main className="min-h-screen max-w-6xl mx-auto px-4">
            <AnimatePresence mode="wait" initial={false}>
              <div key={pathname}>{children}</div>
            </AnimatePresence>
          </main>

          <footer className="p-6 text-center text-gray-500 text-sm bg-white border-t">
            © {new Date().getFullYear()} Bali Spa Nature
          </footer>
        </LayoutGroup>
      </body>
    </html>
  );
}
