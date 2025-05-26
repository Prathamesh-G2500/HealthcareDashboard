

import React from 'react';
import { activityData } from '../data/mockData';
import '../style/ActivityChart.css';

const ActivityChart: React.FC = () => {
  const maxCount = Math.max(...activityData.map(d => d.count));

  return (
    <div className="activity-chart-container">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <div className="activity-summary">
          {activityData.reduce((sum, item) => sum + item.count, 0)} appointments this week
        </div>
      </div>

      <div className="activity-bars">
        {activityData.map((item, index) => (
          <div key={index} className="activity-bar-group">
            <div className="activity-bar-stack">
              {/* Main bar */}
              <div 
                className={`activity-bar-main ${item.color}`}
                style={{ 
                  height: `${(item.count / maxCount) * 100}%`,
                  minHeight: '20px'
                }}
              />

              {/* Secondary bars */}
              {item.count > 1 && (
                <div 
                  className="activity-bar-secondary"
                  style={{ 
                    height: `${((item.count - 1) / maxCount) * 80}%`,
                    minHeight: '15px'
                  }}
                />
              )}

              {item.count > 2 && (
                <div 
                  className="activity-bar-tertiary"
                  style={{ 
                    height: `${((item.count - 2) / maxCount) * 60}%`,
                    minHeight: '10px'
                  }}
                />
              )}
            </div>

            {/* Day and count labels */}
            <div className="activity-day">{item.day}</div>
            <div className="activity-count">
              {item.count} {item.count === 1 ? 'appt' : 'appts'}
            </div>
          </div>
        ))}
      </div>

      {/* Grid lines */}
      <div className="activity-grid-lines">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="activity-grid-line"
            style={{ bottom: `${(i / 4) * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;

