

import React from 'react';
import { sidebarLinks } from '../data/mockData';
import * as LucideIcons from 'lucide-react';
import '../style/Sidebar.css';

const Sidebar: React.FC = () => {
  const renderIcon = (iconName: string) => {
    
    const Icon = (LucideIcons as Record<string, React.ComponentType<any>>)[iconName];
    return Icon ? <Icon size={20} className="sidebar-icon" /> : null;
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h1 className="sidebar-title">
          <span className="sidebar-title-highlight">Health</span>
          <span className="sidebar-title-normal">care.</span>
        </h1>
      </div>

      <div className="sidebar-sections">
     
        <div className="sidebar-section">
          <h3 className="sidebar-section-title">General</h3>
          <nav className="sidebar-nav">
            {sidebarLinks
              .filter(link => link.section === 'general')
              .map(link => (
                <a
                  key={link.id}
                  href="#"
                  className={`sidebar-link ${
                    link.id === 'dashboard' ? 'sidebar-link-active' : 'sidebar-link-default'
                  }`}
                >
                  <span className="sidebar-icon-wrapper">{renderIcon(link.icon)}</span>
                  {link.label}
                </a>
              ))}
          </nav>
        </div>

     
        <div className="sidebar-section">
          <h3 className="sidebar-section-title">Tools</h3>
          <nav className="sidebar-nav">
            {sidebarLinks
              .filter(link => link.section === 'tools')
              .map(link => (
                <a
                  key={link.id}
                  href="#"
                  className="sidebar-link sidebar-link-default"
                >
                  <span className="sidebar-icon-wrapper">{renderIcon(link.icon)}</span>
                  {link.label}
                </a>
              ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;