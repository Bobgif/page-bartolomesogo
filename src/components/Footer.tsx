import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '2rem', borderTop: '1px solid #ccc', textAlign: 'center' }}>
      <p>Ucayali, Perú • [-8.348074, -74.576045]</p>
      <p>© {new Date().getFullYear()} bartolomesogo.com</p>
    </footer>
  );
};