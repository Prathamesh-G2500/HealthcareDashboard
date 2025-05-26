
import React from 'react';
import { healthCards } from '../data/mockData';
import { Settings as Lungs, Bluetooth as Tooth, Bone, ChevronRight } from 'lucide-react';
import '../style/HealthCards.css';

const HealthCards: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'lungs':
        return <Lungs className="icon-lungs" size={24} />;
      case 'teeth':
        return <Tooth className="icon-teeth" size={24} />;
      case 'bone':
        return <Bone className="icon-bone" size={24} />;
      default:
        return null;
    }
  };

  const getStatusColorClass = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bar-healthy';
      case 'warning':
        return 'bar-warning';
      case 'critical':
        return 'bar-critical';
      default:
        return 'bar-default';
    }
  };

  return (
    <div className="card-list">
      {healthCards.map((card) => (
        <div key={card.id} className="card-item">
          <div className="card-header">
            <div className="card-info">
              <div className="card-icon">{renderIcon(card.icon)}</div>
              <div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-date">Date: {card.date}</p>
              </div>
            </div>
          </div>

          <div className="card-bar-wrapper">
            <div className={`card-bar ${getStatusColorClass(card.status)}`} style={{ width: card.status === 'healthy' ? '70%' : '40%' }}></div>
          </div>
        </div>
      ))}

      <div className="card-footer">
        <button className="details-button">
          Details
          <ChevronRight size={16} className="details-icon" />
        </button>
      </div>
    </div>
  );
};

export default HealthCards;
