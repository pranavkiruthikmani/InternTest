import { ChevronDown, ArrowRight, LogOutIcon } from 'lucide-react';
import logo from './assets/logo.png';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto w-full">
      
      <div className="flex items-center gap-1 text-2xl font-bold tracking-tighter cursor-pointer">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
        <a href="#" className="flex items-center gap-1 hover:text-oliveDark transition-colors">
          Solutions <ChevronDown size={14} className="text-gray-400" />
        </a>
        <a href="#" className="hover:text-oliveDark transition-colors">Features</a>
        <a href="#" className="hover:text-oliveDark transition-colors">Pricing</a>
        <a href="#" className="flex items-center gap-1 hover:text-oliveDark transition-colors">
          Blog <ChevronDown size={14} className="text-gray-400" />
        </a>
        <a href="#" className="hover:text-oliveDark transition-colors">Restaurants</a>
        <a href="#" className="flex items-center gap-1 hover:text-oliveDark transition-colors">
          Food <ChevronDown size={14} className="text-gray-400" />
        </a>
      </nav>

      <div className="flex items-center gap-6">
        <a href="#" className="text-sm font-medium hover:text-gray-600 hidden sm:block transition-colors">
          Sign in
        </a>
        <button className="bg-oliveDark text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
          Get Olive <ArrowRight size={16} />
        </button>
      </div>

    </header>
  );
}