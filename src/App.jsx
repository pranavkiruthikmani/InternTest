import Header from './Header';
import PhoneMockup from './PhoneMockup';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-oliveDark font-sans selection:bg-oliveLight selection:text-white p-3 md:p-6 lg:p-8 flex justify-center">
      
      <div className="w-full max-w-[1250px] bg-bgOffWhite rounded-[1rem] md:rounded-[1rem] overflow-hidden pb-20 border border-gray-100/50 shadow-sm">
        
        <Header />

        <main className="flex flex-col items-center text-center px-4 pt-12 md:pt-16 pb-4 w-full">
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-bgOffWhite object-cover" src="https://i.pravatar.cc/100?img=11" alt="User" />
              <img className="w-10 h-10 rounded-full border-2 border-bgOffWhite object-cover" src="https://i.pravatar.cc/100?img=12" alt="User" />
              <img className="w-10 h-10 rounded-full border-2 border-bgOffWhite object-cover" src="https://i.pravatar.cc/100?img=5" alt="User" />
              <img className="w-10 h-10 rounded-full border-2 border-bgOffWhite object-cover" src="https://i.pravatar.cc/100?img=9" alt="User" />
              <div className="w-10 h-10 rounded-full border-2 border-bgOffWhite bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-medium relative z-10">
                3k+
              </div>
            </div>
            <span className="text-gray-600 font-medium text-sm">
              Trusted by thousands of healthy families
            </span>
          </div>

          <h1 className="text-6xl md:text-[5rem] font-bold text-oliveDark tracking-tighter leading-[1.05] max-w-4xl mb-6">
            The Safest Way to <br className="hidden sm:block" /> Shop for Groceries
          </h1>

          <p className="text-[#6B7A6F] text-lg md:text-xl max-w-[650px] leading-relaxed mb-10">
            Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            
            <button className="bg-oliveDark text-white px-8 py-4 rounded-full text-base font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
              <svg viewBox="0 0 384 512" fill="currentColor" className="w-[22px] h-[22px] mb-1">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Download for iOS
            </button>

            <a href="#" className="flex items-center gap-2 text-gray-700 font-medium hover:text-oliveDark transition-colors group">
              Join the Olive Community
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

        </main>

        <div className="-mt-18 relative z-10">
          <PhoneMockup />
        </div>

      </div>
    </div>
  );
}