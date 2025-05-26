
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AnatomySection from './components/AnatomySection';
import HealthCards from './components/HealthCards';
import Calendar from './components/Calendar';
import UpcomingSchedule from './components/UpcomingSchedule';
import ActivityChart from './components/ActivityChart';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="h-full">
        <Sidebar />
      </aside>
      
      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <Header title="Dashboard" />
        
        {/* Main grid layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Anatomy section - 5 columns */}
          <div className="col-span-5">
            <AnatomySection />
          </div>
          
          {/* Health cards section - 3 columns */}
          <div className="col-span-3">
            <HealthCards />
          </div>
          
          {/* Calendar section - 4 columns */}
          <div className="col-span-4">
            <Calendar />
          </div>
          
          {/* Upcoming schedule - 6 columns */}
          <div className="col-span-6">
            <UpcomingSchedule />
          </div>
          
          {/* Activity chart - 6 columns */}
          <div className="col-span-6">
            <ActivityChart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;