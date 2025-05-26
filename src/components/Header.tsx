
import React from 'react';
import { Bell, Plus, Search } from 'lucide-react';
import '../style/Header.css';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="header-container">
      <div>
        <h1 className="header-title">{title}</h1>
      </div>

      <div className="header-actions">
      
        <div className="search-wrapper">
          <div className="search-icon">
            <Search size={18} className="search-icon-svg" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>

        
        <div className="filter-wrapper">
          <button className="filter-button">
            This Week
            <svg className="filter-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      
        <button className="notification-button">
          <Bell size={20} className="notification-icon" />
          <span className="notification-dot"></span>
        </button>

    
        <button className="avatar-button">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User avatar"
            className="avatar-image"
          />
        </button>

      
        <button className="add-button">
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
