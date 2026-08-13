import React from 'react';
import pkg from '../../package.json';

export const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '2rem', borderTop: '1px solid #ccc', textAlign: 'center' }}>
      <p>Ucayali, Perú • [-8.348074, -74.576045]</p>
      <a href="/underconstruction" target="_blank" rel="noopener noreferrer" className="hover:text-barto-gold hover:underline">
        © {new Date().getFullYear()} Desarrollado por Bartolomé Sogo v{pkg.version}
      </a>
    </footer>
  );
};