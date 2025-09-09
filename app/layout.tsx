// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'QuickMenuX – Smart Dining',
  description: 'Scan, browse, and order — QuickMenuX transforms restaurant menus into a seamless digital experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        <main>{children}</main>
        
      </body>
    </html>
  );
}
