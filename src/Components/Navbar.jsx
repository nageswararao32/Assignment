import React from 'react';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#f5f5f5', padding: '1rem 0' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center' }}>
        <li style={{ margin: '0 1rem', backgroundColor: '#eee', padding: '0.5rem 1rem' }}>Home</li>
        <li style={{ margin: '0 1rem', backgroundColor: '#eee', padding: '0.5rem 1rem' }}>About</li>
        <li style={{ margin: '0 1rem', backgroundColor: '#eee', padding: '0.5rem 1rem' }}>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
