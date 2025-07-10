import React, { useState } from 'react';
import { Bell, User, LogOut, Settings, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-xl sm:text-2xl font-bold text-[#1f4e79]">Next Samsung+</div>
            </div>
          </div>

          {/* Desktop Right side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Points Display */}
            {user && (user.role === 'RSA' || user.role === 'SEC' || user.role === 'FSM') && (
              <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-blue-900">
                  {user.points.toLocaleString()} Points
                </span>
              </div>
            )}

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full">
              <Bell className="h-5 w-5" />
            </button>

            {/* Profile Info */}
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">
                  {user?.firstName} {user?.lastName}
                </div>
                <div className="text-xs text-gray-500">{user?.role}</div>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full">
                <User className="h-5 w-5" />
              </button>
              <button 
                onClick={logout}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full"
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {/* Points Display Mobile */}
              {user && (user.role === 'RSA' || user.role === 'SEC' || user.role === 'FSM') && (
                <div className="flex items-center justify-center bg-blue-50 px-3 py-2 rounded-full mx-4">
                  <span className="text-sm font-medium text-blue-900">
                    {user.points.toLocaleString()} Points
                  </span>
                </div>
              )}
              
              {/* Profile Info Mobile */}
              <div className="px-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-900">
                    {user?.firstName} {user?.lastName}
                  </div>
                  <div className="text-xs text-gray-500">{user?.role}</div>
                </div>
              </div>

              {/* Action buttons Mobile */}
              <div className="flex justify-center space-x-4 px-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full">
                  <Bell className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full">
                  <User className="h-5 w-5" />
                </button>
                <button 
                  onClick={logout}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;