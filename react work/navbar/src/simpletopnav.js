import React from 'react'

function simpletopnav() {
  return (
    
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                LUXE
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors font-medium">New Arrivals</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Men</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Women</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Collections</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Sale</a>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-700 hover:text-purple-600 cursor-pointer transition-colors" />
              <User className="w-5 h-5 text-gray-700 hover:text-purple-600 cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-gray-700 hover:text-purple-600 cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                <Menu className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default simpletopnav