
import Sidebar from '@/components/Sidebar';

const Notes = () => {
  return (
    <div className="min-h-screen bg-theme-dark text-white">
      <Sidebar />
      <div className="pl-20 md:pl-64 p-6">
        <h1 className="text-2xl font-bold mb-6">Notes</h1>
        <div className="bg-theme-darkgray p-8 rounded-lg border border-gray-800 text-center">
          <p className="text-lg text-gray-300">Notes feature coming soon!</p>
          <p className="text-gray-400 mt-2">Here you'll be able to take and review your study notes.</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
