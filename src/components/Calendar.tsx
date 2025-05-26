import React from 'react';
import { calendarDays, appointments } from '../data/mockData';
import { ChevronLeft, ChevronRight, Bluetooth as Tooth, Activity } from 'lucide-react';
import '../style/Calendar.css';

const Calendar: React.FC = () => {
  return (
    <div className="calendar-wrapper">
      <div className="calendar-header-section">
        <h2 className="calendar-month-title">October 2021</h2>
        <div className="calendar-navigation">
          <button className="calendar-button-prev">
            <ChevronLeft size={16} />
          </button>
          <button className="calendar-button-next">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="calendar-days-grid">
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={index} className="calendar-day-name">
            {day}
          </div>
        ))}

        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`calendar-date-box ${day.day === 28 ? 'calendar-active-date' : 'calendar-hoverable-date'}`}
          >
            <div className="calendar-date-number">{day.day}</div>
          </div>
        ))}
      </div>

      <div className="calendar-time-grid">
        <div className="time-slot">10:00</div>
        <div className="time-slot">08:00</div>
        <div className="time-slot">12:00</div>
        <div className="time-slot time-highlight">10:00</div>
        <div className="time-slot time-dash">—</div>
        <div className="time-slot time-secondary">12:00</div>
        <div className="time-slot">09:00</div>

        <div className="time-slot">11:00</div>
        <div className="time-slot time-highlight">09:00</div>
        <div className="time-slot time-dash">—</div>
        <div className="time-slot time-secondary">11:00</div>
        <div className="time-slot">14:00</div>
        <div className="time-slot">14:00</div>
        <div className="time-slot">10:00</div>

        <div className="time-slot">12:00</div>
        <div className="time-slot">10:00</div>
        <div className="time-slot">13:00</div>
        <div className="time-slot time-dash">—</div>
        <div className="time-slot">16:00</div>
        <div className="time-slot">15:00</div>
        <div className="time-slot">11:00</div>
      </div>

      <div className="calendar-appointments-section">
        {appointments.slice(0, 2).map((appointment) => (
          <div key={appointment.id} className={`appointment-box ${appointment.color}`}>
            <div className="appointment-top">
              <h3 className="appointment-name">{appointment.title}</h3>
              {appointment.icon === 'teeth' ? (
                <Tooth size={18} />
              ) : (
                <Activity size={18} />
              )}
            </div>
            <div className="appointment-time-label">{appointment.time}</div>
            <div className="appointment-doctor-label">{appointment.doctor}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
