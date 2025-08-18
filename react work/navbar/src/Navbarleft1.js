import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  User, 
  Menu, 
  X, 
  Home,
  Users,
  FolderOpen,
  Calendar,
  Settings,
  BarChart3,
  MessageSquare,
  HelpCircle,
  LogOut
} from 'lucide-react';

const LeftSidebar = () => {
  const [activeLink, setActiveLink] = useState('Dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navLinks = [
    { name: 'Dashboard', icon: Home },
    { name: 'Team', icon: Users },
    { name: 'Projects', icon: FolderOpen },
    { name: 'Calendar', icon: Calendar },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Messages', icon: MessageSquare },
    { name: 'Settings', icon: Settings },
    { name: 'Help', icon: HelpCircle },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className={`bg-slate-800 text-white transition-all duration-300 ease-in-out flex flex-col shadow-xl ${
        isCollapsed ? 'w-16' : 'w-16 lg:w-64'
      }`}>
        
        {/* Logo Section */}
        <div className="flex items-center justify-center lg:justify-start p-4 border-b border-slate-700">
          <button 
            onClick={toggleSidebar}
            className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
          <span className={`ml-3 text-xl font-bold transition-all duration-300 ${
            isCollapsed ? 'hidden' : 'hidden lg:block'
          }`}>
            Brand
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.name)}
                className={`w-full flex items-center px-3 py-3 rounded-lg text-left transition-all duration-200 group relative ${
                  activeLink === link.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
                title={link.name}
              >
                <IconComponent className={`w-5 h-5 flex-shrink-0 ${
                  activeLink === link.name ? 'text-white' : 'text-slate-400 group-hover:text-white'
                }`} />
                <span className={`ml-3 font-medium transition-all duration-300 ${
                  isCollapsed ? 'hidden' : 'hidden lg:block'
                }`}>
                  {link.name}
                </span>
                
                {/* Tooltip for collapsed view */}
                <div className={`absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap ${
                  isCollapsed ? 'block' : 'lg:hidden'
                }`}>
                  {link.name}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Bottom Section - User Profile */}
        <div className="border-t border-slate-700 p-2">
          <div className={`flex items-center px-3 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-slate-700 group ${
            !activeLink || activeLink === 'Profile' ? 'bg-slate-700' : ''
          }`}>
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className={`flex-1 min-w-0 transition-all duration-300 ${
              isCollapsed ? 'hidden' : 'hidden lg:block'
            }`}>
              <p className="text-sm font-medium text-white truncate">John Doe</p>
              <p className="text-xs text-slate-400 truncate">john@example.com</p>
            </div>
            <LogOut className={`w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
              isCollapsed ? 'hidden' : 'hidden lg:block'
            }`} />
            
            {/* Tooltip for profile on collapsed view */}
            <div className={`absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap ${
              isCollapsed ? 'block' : 'lg:hidden'
            }`}>
              John Doe
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">{activeLink}</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative hidden sm:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Search..."
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>

              {/* Profile Menu */}
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700">Admin</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Content based on active link */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center py-12">
                <div className="flex justify-center mb-4">
                  {navLinks.find(link => link.name === activeLink)?.icon && 
                    React.createElement(navLinks.find(link => link.name === activeLink).icon, {
                      className: "w-16 h-16 text-gray-400"
                    })
                  }
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{activeLink}</h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  This is the {activeLink.toLowerCase()} page. The sidebar automatically shows icons only on mobile/tablet and full menu items on desktop.
                </p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                      <div className="h-8 w-8 bg-blue-500 rounded-lg mb-3"></div>
                      <h3 className="font-medium text-gray-900 mb-1">Feature {item}</h3>
                      <p className="text-sm text-gray-600">Sample content for the {activeLink.toLowerCase()} section.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LeftSidebar;