
import React from 'react';
import { healthTags } from '../data/mockData';
import { Heart, Maximize } from 'lucide-react';
import '../style/AnatomySection.css';
const AnatomySection: React.FC = () => {
  return (
    <div className="anatomy-box">
   
      <div className="expand-icon">
        <button className="expand-button">
          <Maximize size={20} />
        </button>
      </div>

      <div className="anatomy-wrapper">
   
        <div className="image-section">
          <img 
            src="./public/HumanAnatomy.png"
            alt="Human anatomy" 
            className="anatomy-image"
          />

        
          {healthTags.map((tag) => (
            <div
              key={tag.id}
              className="tag-wrapper"
              style={{ 
                left: `${tag.position.x}%`, 
                top: `${tag.position.y}%` 
              }}
            >
              {tag.id === 'heart' && (
                <div className="heart-tag">
                  <Heart size={14} className="heart-icon" />
                  {tag.label}
                </div>
              )}

              {tag.id === 'leg' && (
                <div className="leg-tag">
                  {tag.label}
                </div>
              )}
            </div>
          ))}

       
          <div className="slider-bar">
            <div className="slider-track">
              <div className="slider-fill">
                <div className="slider-thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
