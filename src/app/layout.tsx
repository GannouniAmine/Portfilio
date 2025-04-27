import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; // Changed from Geist to Inter for a clean sans-serif look
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans', // Use --font-sans variable
});

export const metadata: Metadata = {
  title: 'My Portfolio', // Updated title
  description: 'Portfolio for a Computer Science student at ENSI.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <main>{children}</main>
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}
