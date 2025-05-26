import { SidebarLink, HealthTag, HealthCard, Appointment, ActivityData, CalendarDay } from '../types';
import { Heart, DivideIcon as LucideIcon, Calendar, BarChart3, History, MessageSquare, Phone, Settings, LayoutDashboard } from 'lucide-react';

// Sidebar links
export const sidebarLinks: SidebarLink[] = [
  {
    id: 'dashboard',
    icon: 'LayoutDashboard',
    label: 'Dashboard',
    section: 'general'
  },
  {
    id: 'history',
    icon: 'History',
    label: 'History',
    section: 'general'
  },
  {
    id: 'calendar',
    icon: 'Calendar',
    label: 'Calendar',
    section: 'general'
  },
  {
    id: 'appointments',
    icon: 'Calendar',
    label: 'Appointments',
    section: 'general'
  },
  {
    id: 'statistics',
    icon: 'BarChart3',
    label: 'Statistics',
    section: 'general'
  },
  {
    id: 'chat',
    icon: 'MessageSquare',
    label: 'Chat',
    section: 'tools'
  },
  {
    id: 'support',
    icon: 'Phone',
    label: 'Support',
    section: 'tools'
  },
  {
    id: 'settings',
    icon: 'Settings',
    label: 'Setting',
    section: 'tools'
  }
];

// Health tags
export const healthTags: HealthTag[] = [
  {
    id: 'heart',
    label: 'Healthy Heart',
    position: { x: 50, y: 30 },
    status: 'healthy'
  },
  {
    id: 'lungs',
    label: 'Lungs',
    position: { x: 30, y: 35 },
    status: 'warning'
  },
  {
    id: 'leg',
    label: 'Healthy Leg',
    position: { x: 40, y: 80 },
    status: 'healthy'
  }
];

// Health cards
export const healthCards: HealthCard[] = [
  {
    id: 'lungs',
    title: 'Lungs',
    date: '26 Oct 2021',
    status: 'warning',
    icon: 'lungs'
  },
  {
    id: 'teeth',
    title: 'Teeth',
    date: '26 Oct 2021',
    status: 'healthy',
    icon: 'teeth'
  },
  {
    id: 'bone',
    title: 'Bone',
    date: '26 Oct 2021',
    status: 'warning',
    icon: 'bone'
  }
];

// Calendar days for October 2021
export const calendarDays: CalendarDay[] = [
  { 
    day: 25, 
    dayName: 'Mon',
    isCurrentMonth: true, 
    appointments: [
      { time: '10:00', isBooked: true, appointmentId: 'app1' },
      { time: '11:00', isBooked: true, appointmentId: 'app2' },
      { time: '12:00', isBooked: true, appointmentId: 'app3' }
    ] 
  },
  { 
    day: 26, 
    dayName: 'Tues',
    isCurrentMonth: true, 
    appointments: [
      { time: '08:00', isBooked: true, appointmentId: 'app4' },
      { time: '10:00', isBooked: true, appointmentId: 'app5' },
    ] 
  },
  { 
    day: 27, 
    dayName: 'Wed',
    isCurrentMonth: true, 
    appointments: [
      { time: '12:00', isBooked: true, appointmentId: 'app6' },
      { time: '13:00', isBooked: true, appointmentId: 'app7' },
    ] 
  },
  { 
    day: 28, 
    dayName: 'Thurs',
    isCurrentMonth: true, 
    appointments: [
      { time: '10:00', isBooked: true, appointmentId: 'app8' },
      { time: '11:00', isBooked: true, appointmentId: 'app9' },
    ] 
  },
  { 
    day: 29, 
    dayName: 'Fri',
    isCurrentMonth: true, 
    appointments: [
      { time: '14:00', isBooked: true, appointmentId: 'app10' },
      { time: '16:00', isBooked: true, appointmentId: 'app11' },
    ] 
  },
  { 
    day: 30, 
    dayName: 'Sat',
    isCurrentMonth: true, 
    appointments: [
      { time: '12:00', isBooked: true, appointmentId: 'app12' },
      { time: '14:00', isBooked: true, appointmentId: 'app13' },
      { time: '15:00', isBooked: true, appointmentId: 'app14' },
    ] 
  },
  { 
    day: 31, 
    dayName: 'Sun',
    isCurrentMonth: true, 
    appointments: [
      { time: '09:00', isBooked: true, appointmentId: 'app15' },
      { time: '10:00', isBooked: true, appointmentId: 'app16' },
      { time: '11:00', isBooked: true, appointmentId: 'app17' },
    ] 
  }
];

// Appointments
export const appointments: Appointment[] = [
  {
    id: 'app1',
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    doctorTitle: 'Dentist',
    icon: 'teeth',
    date: new Date(2021, 9, 28), // Oct 28, 2021
    color: 'bg-indigo-600'
  },
  {
    id: 'app2',
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    doctorTitle: 'Physiotherapist',
    icon: 'physio',
    date: new Date(2021, 9, 28), // Oct 28, 2021
    color: 'bg-indigo-400'
  },
  {
    id: 'app3',
    title: 'Health checkup complete',
    time: '11:00 AM',
    doctor: '',
    doctorTitle: '',
    icon: 'checkup',
    date: new Date(2021, 9, 28), // Oct 28, 2021
  },
  {
    id: 'app4',
    title: 'Ophthalmologist',
    time: '14:00 PM',
    doctor: '',
    doctorTitle: '',
    icon: 'eye',
    date: new Date(2021, 9, 28), // Oct 28, 2021
  },
  {
    id: 'app5',
    title: 'Cardiologist',
    time: '12:00 AM',
    doctor: '',
    doctorTitle: '',
    icon: 'heart',
    date: new Date(2021, 9, 30), // Oct 30, 2021
  },
  {
    id: 'app6',
    title: 'Neurologist',
    time: '16:00 PM',
    doctor: '',
    doctorTitle: '',
    icon: 'brain',
    date: new Date(2021, 9, 30), // Oct 30, 2021
  }
];

// Activity data
export const activityData: ActivityData[] = [
  { day: 'Mon', count: 4, color: 'bg-indigo-600' },
  { day: 'Tues', count: 2, color: 'bg-indigo-600' },
  { day: 'Wed', count: 5, color: 'bg-indigo-600' },
  { day: 'Thurs', count: 3, color: 'bg-indigo-600' },
  { day: 'Fri', count: 2, color: 'bg-indigo-600' },
  { day: 'Sat', count: 4, color: 'bg-indigo-600' },
  { day: 'Sun', count: 1, color: 'bg-indigo-600' }
];