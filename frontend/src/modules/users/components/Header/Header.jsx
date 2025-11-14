import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <nav className="header-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/feedback" className="nav-link active">Feedback</a>
          <a href="/user/preferences" className="nav-link">Tastes</a>
          <div className="header-icon">
            <span><svg width="30" height="35" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.875 18.2084C28.8797 20.2982 28.4557 22.3597 27.6375 24.225C26.6673 26.4603 25.1759 28.3404 23.3302 29.6547C21.4846 30.9691 19.3576 31.6657 17.1875 31.6667C15.3727 31.6722 13.5824 31.1839 11.9625 30.2417L4.125 33.25L6.7375 24.225C5.91928 22.3597 5.49527 20.2982 5.5 18.2084C5.50084 15.7095 6.10584 13.2602 7.24724 11.1349C8.38864 9.00961 10.0213 7.29219 11.9625 6.17505C13.5824 5.23285 15.3727 4.7446 17.1875 4.75005H17.875C20.741 4.93212 23.4479 6.32508 25.4776 8.66224C27.5072 10.9994 28.7169 14.1165 28.875 17.4167V18.2084Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
          </div>
        </nav>
      </div>
    </header>
  );
};