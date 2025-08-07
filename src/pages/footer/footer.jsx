import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '10px 20px', textAlign: 'center', marginTop: '20px' }}>
      <p>&copy;2025 Nesto. All rights reserved.</p>
      <p>
        Follow us on 
        <a href="https://twitter.com" style={{ margin: '0 5px', color: '#1DA1F2', textDecoration: 'none' }}>Twitter</a> | 
        <a href="https://facebook.com" style={{ margin: '0 5px', color: '#4267B2', textDecoration: 'none' }}>Facebook</a>
      </p>
    </footer>
  );
};

export default Footer;
