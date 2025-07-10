import React from 'react';
import { Building2, BookOpen, Package, TrendingUp, Users, Target, Award, Clock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SECDashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Current Points',
      value: user?.points.toLocaleString() || '0',
      icon: Award,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Store Training',
      value: '92%',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Devices in Store',
      value: '47',
      icon: Package,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Monthly Sales',
      value: '18',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const storeMetrics = [
    { label: 'Galaxy S24 Series', stock: 12, target: 15, sales: 8 },
    { label: 'Galaxy Watch 7', stock: 8, target: 10, sales: 5 },
    { label: 'Galaxy Buds3 Pro', stock: 15, target: 20, sales: 12 },
    { label: 'Galaxy Tab S10', stock: 6, target: 8, sales: 3 }
  ];

  const recentActivities = [
    { id: 1, action: 'Completed Best Buy product training', points: 100, time: '1 hour ago' },
    { id: 2, action: 'Helped customer with Galaxy S24 setup', points: 50, time: '3 hours ago' },
    { id: 3, action: 'Updated store inventory count', points: 25, time: '1 day ago' },
    { id: 4, action: 'Completed Samsung certification', points: 200, time: '2 days ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Welcome, {user?.firstName}!</h1>
        <p className="text-purple-100 mt-2">
          Samsung Experience Consultant at {user?.storeLocation}
        </p>
        <div className="mt-4 bg-purple-700 bg-opacity-50 rounded-lg p-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm">Today's Priority: Galaxy S24 Demo Setup</span>
            <span className="mt-2 sm:mt-0 text-xs bg-yellow-400 text-purple-900 px-2 py-1 rounded-full font-medium">
              High Priority
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Store Inventory Overview */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Store Inventory Overview</h2>
          <div className="space-y-4">
            {storeMetrics.map((item, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-900">{item.label}</h3>
                  <span className="mt-1 sm:mt-0 text-xs text-gray-500">Sales: {item.sales}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 mb-2">
                  <span>Stock: {item.stock}</span>
                  <span className="mt-1 sm:mt-0">Target: {item.target}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(item.stock / item.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">{activity.time}</span>
                    <span className="text-xs font-medium text-green-600">+{activity.points} pts</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Store Management</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <Package className="h-8 w-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Update Inventory</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Store Training</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <Users className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Customer Support</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors">
            <Target className="h-8 w-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Sales Goals</span>
          </button>
        </div>
      </div>

      {/* Best Buy Integration */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Best Buy Integration</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex flex-col sm:flex-row sm:items-center space-x-0 sm:space-x-3">
            <Building2 className="h-6 w-6 text-blue-600 mb-2 sm:mb-0" />
            <div>
              <h3 className="text-sm font-medium text-blue-900">Store-Specific Resources</h3>
              <p className="text-sm text-blue-700">Access Best Buy exclusive training materials and store guidelines</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
              View Store Guidelines
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-md hover:bg-blue-50 transition-colors">
              Best Buy Training Hub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SECDashboard;