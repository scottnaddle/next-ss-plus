import React from 'react';
import { MapPin, Users, TrendingUp, AlertTriangle, Calendar, Award, Building2, BarChart3, Utensils } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const FSMDashboard: React.FC = () => {
  const { user } = useAuth();

  const regionStats = [
    {
      title: 'Total Stores',
      value: '47',
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active RSAs',
      value: '128',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Monthly Visits',
      value: '23',
      icon: MapPin,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Regional Points',
      value: user?.points.toLocaleString() || '0',
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const priorityStores = [
    { id: 1, name: 'Verizon Manhattan West', location: 'New York, NY', healthScore: 45, lastVisit: '2024-10-15', zeroSales: true, status: 'urgent' },
    { id: 2, name: 'AT&T Brooklyn Heights', location: 'Brooklyn, NY', healthScore: 62, lastVisit: '2024-10-20', zeroSales: false, status: 'attention' },
    { id: 3, name: 'T-Mobile Queens Center', location: 'Queens, NY', healthScore: 58, lastVisit: '2024-10-18', zeroSales: true, status: 'attention' },
    { id: 4, name: 'Verizon Bronx Plaza', location: 'Bronx, NY', healthScore: 71, lastVisit: '2024-10-22', zeroSales: false, status: 'good' }
  ];

  const upcomingVisits = [
    { id: 1, store: 'Verizon Manhattan West', date: '2024-11-01', time: '09:00 AM', type: 'Urgent Visit' },
    { id: 2, store: 'AT&T Brooklyn Heights', date: '2024-11-02', time: '11:00 AM', type: 'Routine Check' },
    { id: 3, store: 'T-Mobile Queens Center', date: '2024-11-03', time: '02:00 PM', type: 'Training Session' }
  ];

  const teamPerformance = [
    { name: 'John Smith', store: 'Verizon Manhattan', points: 2450, completion: 85, sales: 24 },
    { name: 'Sarah Johnson', store: 'AT&T Brooklyn', points: 1850, completion: 92, sales: 18 },
    { name: 'Mike Davis', store: 'T-Mobile Queens', points: 2100, completion: 78, sales: 21 },
    { name: 'Lisa Brown', store: 'Verizon Bronx', points: 1920, completion: 88, sales: 19 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'attention': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'good': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Regional Overview - {user?.firstName} {user?.lastName}</h1>
        <p className="text-indigo-100 mt-2">
          Field Sales Manager | {user?.region} Region
        </p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-indigo-100">This Week's Priority</div>
            <div className="text-lg font-semibold">4 Zero Sales Stores</div>
          </div>
          <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-indigo-100">Upcoming Events</div>
            <div className="text-lg font-semibold">2</div>
          </div>
          <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-indigo-100">Avg Health Score</div>
            <div className="text-lg font-semibold">64%</div>
          </div>
          <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-indigo-100">Team Performance</div>
            <div className="text-lg font-semibold">Above Target</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {regionStats.map((stat, index) => {
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
        {/* Priority Stores */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Priority Stores</h2>
          <div className="space-y-4">
            {priorityStores.map((store) => (
              <div key={store.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{store.name}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(store.status)}`}>
                    {store.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{store.location}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-500">Health: {store.healthScore}%</span>
                    <span className="text-gray-500">Last Visit: {store.lastVisit}</span>
                  </div>
                  {store.zeroSales && (
                    <span className="flex items-center text-red-600 mt-2 sm:mt-0">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      Zero Sales
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Visits */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Visits</h2>
          <div className="space-y-4">
            {upcomingVisits.map((visit) => (
              <div key={visit.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                <div className="flex-shrink-0">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">{visit.store}</h3>
                  <p className="text-sm text-gray-600">{visit.date} at {visit.time}</p>
                  <p className="text-xs text-indigo-600">{visit.type}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors">
            View Full Schedule
          </button>
        </div>
      </div>

      {/* Team Performance */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Team Performance Overview</h2>
        {/* Table for md+ screens, cards for mobile */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Member</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Store</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teamPerformance.map((member, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.store}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.points.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${member.completion}%` }}></div>
                      </div>
                      <span className="text-sm text-gray-900">{member.completion}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Card view for mobile */}
        <div className="md:hidden divide-y divide-gray-200">
          {teamPerformance.map((member, index) => (
            <div key={index} className="p-4 flex flex-col space-y-2">
              <div className="text-base font-medium text-gray-900">{member.name}</div>
              <div className="text-xs text-gray-500">{member.store}</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="font-medium text-gray-900">{member.points.toLocaleString()} pts</span>
                <span className="flex items-center text-gray-700">Completion:
                  <span className="ml-2 w-16 bg-gray-200 rounded-full h-2 mr-2 inline-block align-middle">
                    <span className="bg-green-600 h-2 rounded-full inline-block align-middle" style={{ width: `${member.completion}%` }}></span>
                  </span>
                  <span className="text-xs text-gray-900">{member.completion}%</span>
                </span>
                <span className="font-medium text-gray-900">Sales: {member.sales}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Field Management Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors">
            <MapPin className="h-8 w-8 text-indigo-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Schedule Visit</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <Utensils className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Large Events</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors">
            <BarChart3 className="h-8 w-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Health Tracker</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Team Reports</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FSMDashboard;