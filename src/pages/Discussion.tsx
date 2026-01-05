
import Sidebar from '@/components/Sidebar';

const Discussion = () => {
  return (
    <div className="min-h-screen bg-theme-dark text-white">
      <Sidebar />
      <div className="pl-20 md:pl-64 p-6">
        <h1 className="text-2xl font-bold mb-6">Discussion</h1>
        <div className="bg-theme-darkgray p-8 rounded-lg border border-gray-800 text-center">
          <p className="text-lg text-gray-300">Discussion forum coming soon!</p>
          <p className="text-gray-400 mt-2">Connect with other learners and discuss core concepts.</p>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
