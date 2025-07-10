import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Award, 
  Gift, 
  Users, 
  MapPin, 
  BarChart3, 
  Settings,
  FileText,
  DollarSign,
  Building2,
  UserCheck,
  Database,
  Shield,
  Star,
  Share2,
  Utensils,
  Navigation,
  Eye,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MessageCircle,
  Trophy,
  Zap,
  Target,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getMenuItems = () => {
    switch (user?.role) {
      case 'RSA':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'daily-activities', label: 'Daily Activities', icon: Calendar },
          { id: 'learning', label: 'Learning', icon: BookOpen },
          { id: 'master-certification', label: 'Master Certification', icon: Award },
          { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
          { id: 'rewards', label: 'Rewards', icon: Gift },
          { id: 'sweepstakes', label: 'Sweepstakes', icon: Star },
          { id: 'referrals', label: 'Referrals', icon: Share2 },
          { id: 'profile', label: 'Profile', icon: UserCheck },
          { id: 'tax', label: 'Tax Documents', icon: FileText },
          { id: 'privacy', label: 'Privacy Rights', icon: Shield }
        ];
      
      case 'SEC':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'daily-activities', label: 'Daily Activities', icon: Calendar },
          { id: 'learning', label: 'Store Training', icon: BookOpen },
          { id: 'master-certification', label: 'Master Certification', icon: Award },
          { id: 'inventory', label: 'Store Inventory', icon: Building2 },
          { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
          { id: 'rewards', label: 'Rewards', icon: Gift },
          { id: 'sweepstakes', label: 'Sweepstakes', icon: Star },
          { id: 'profile', label: 'Profile', icon: UserCheck },
          { id: 'privacy', label: 'Privacy Rights', icon: Shield }
        ];
      
      case 'FSM':
        return [
          { id: 'dashboard', label: 'Regional Dashboard', icon: Home },
          { id: 'stores', label: 'Store Management', icon: Building2 },
          { id: 'visits', label: 'MCS Visits', icon: Navigation },
          { id: 'team', label: 'Team Performance', icon: Users },
          { id: 'health', label: 'Health Tracker', icon: BarChart3 },
          { id: 'spot-rewards', label: 'Spot Rewards', icon: Zap },
          { id: 'incentives', label: 'Large Events', icon: Utensils },
         { id: 'powerup', label: 'PowerUp', icon: FileText },
          { id: 'master-certification', label: 'Master Certification', icon: Award },
          { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
          { id: 'profile', label: 'Profile', icon: UserCheck },
          { id: 'privacy', label: 'Privacy Rights', icon: Shield }
        ];
      
      case 'SA_ADMIN':
        return [
          { id: 'dashboard', label: 'Admin Dashboard', icon: Home },
          { id: 'users', label: 'User Management', icon: Users },
          { id: 'content', label: 'Learning Content', icon: BookOpen },
          { id: 'rewards-admin', label: 'Rewards Management', icon: Gift },
          { id: 'tax-admin', label: 'Tax Management', icon: DollarSign },
          { id: 'privacy-admin', label: 'Privacy Management', icon: Shield },
          { id: 'settings', label: 'Settings', icon: Settings }
        ];
      
      case 'CHANNEL_ADMIN':
        return [
          { id: 'dashboard', label: 'Channel Dashboard', icon: Home },
          { id: 'dealer-sales', label: 'Dealer Sales', icon: DollarSign },
          { id: 'performance', label: 'Store Performance', icon: BarChart3 },
          { id: 'reports', label: 'Reports', icon: FileText }
        ];
      
      case 'SYSTEM_ADMIN':
        return [
          { id: 'dashboard', label: 'System Dashboard', icon: Home },
          { id: 'system-settings', label: 'System Settings', icon: Settings },
          { id: 'data-management', label: 'Data Management', icon: Database },
          { id: 'vendor-management', label: 'Vendor Management', icon: Building2 },
          { id: 'security', label: 'Security', icon: Shield }
        ];
      
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:block bg-white min-h-screen shadow-sm border-r border-gray-200 transition-all duration-300 flex-shrink-0 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 h-16">
          {!isCollapsed && <span className="text-sm font-medium text-gray-600">Navigation</span>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 text-gray-400 hover:text-gray-600 rounded transition-colors"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>
        
        <nav className="mt-4 h-full">
          <div className="px-2 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors group ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className={`h-5 w-5 flex-shrink-0 ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
                  {!isCollapsed && (
                    <span className="truncate">{item.label}</span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-4 gap-1 p-2">
          {menuItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center py-2 px-1 text-xs font-medium rounded transition-colors ${
                  activeTab === item.id
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-600'
                }`}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span className="truncate w-full text-center">{item.label}</span>
              </button>
            );
          })}
        </div>
        {menuItems.length > 4 && (
          <div className="border-t border-gray-100 p-2">
            <div className="grid grid-cols-4 gap-1">
              {menuItems.slice(4, 8).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex flex-col items-center py-2 px-1 text-xs font-medium rounded transition-colors ${
                      activeTab === item.id
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-gray-600'
                    }`}
                  >
                    <Icon className="h-5 w-5 mb-1" />
                    <span className="truncate w-full text-center">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;