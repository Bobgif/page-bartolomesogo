import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: '60vh', padding: '2rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};