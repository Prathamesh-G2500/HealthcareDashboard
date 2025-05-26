export interface SidebarLink {
  id: string;
  icon: string;
  label: string;
  section: 'general' | 'tools';
}

export interface HealthTag {
  id: string;
  label: string;
  position: { x: number; y: number };
  status: 'healthy' | 'warning' | 'critical';
}

export interface HealthCard {
  id: string;
  title: string;
  date: string;
  status: 'healthy' | 'warning' | 'critical';
  icon: string;
}

export interface CalendarDay {
  day: number;
  dayName: string;
  isCurrentMonth: boolean;
  appointments: TimeSlot[];
}

export interface TimeSlot {
  time: string;
  isBooked: boolean;
  appointmentId?: string;
}

export interface Appointment {
  id: string;
  title: string;
  time: string;
  doctor: string;
  doctorTitle: string;
  icon: string;
  date: Date;
  color?: string;
}

export interface ActivityData {
  day: string;
  count: number;
  color: string;
}