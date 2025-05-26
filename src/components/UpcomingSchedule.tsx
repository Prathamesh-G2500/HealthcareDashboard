
import React from 'react';
import { appointments } from '../data/mockData';
import { Appointment } from '../types';
import { Eye, Heart, Activity, Brain } from 'lucide-react';
import '../style/UpcomingSchedule.css';

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const renderIcon = () => {
    switch (appointment.icon) {
      case 'eye':
        return <Eye size={18} className="icon-eye" />;
      case 'checkup':
        return <Activity size={18} className="icon-checkup" />;
      case 'heart':
        return <Heart size={18} className="icon-heart" />;
      case 'brain':
        return <Brain size={18} className="icon-brain" />;
      default:
        return <Activity size={18} className="icon-default" />;
    }
  };

  return (
    <div className="appointment-card">
      <div className="appointment-header">
        <div>
          <h3 className="appointment-title">{appointment.title}</h3>
          <p className="appointment-time">{appointment.time}</p>
        </div>
        <div>{renderIcon()}</div>
      </div>
    </div>
  );
};

const UpcomingSchedule: React.FC = () => {
  const thursdayAppointments = appointments.filter(
    app => app.date.getDay() === 4
  );

  const saturdayAppointments = appointments.filter(
    app => app.date.getDay() === 6
  );

  return (
    <div className="schedule-wrapper">
      <h2 className="schedule-title">The Upcoming Schedule</h2>

      <div className="schedule-day-section">
        <h3 className="schedule-day-title">On Thursday</h3>
        <div className="schedule-grid">
          {thursdayAppointments.slice(0, 2).map(appointment => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </div>

      <div className="schedule-day-section">
        <h3 className="schedule-day-title">On Saturday</h3>
        <div className="schedule-grid">
          {saturdayAppointments.slice(0, 2).map(appointment => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;