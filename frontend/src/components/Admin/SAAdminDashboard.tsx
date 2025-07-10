import React from 'react';
import { Users, BookOpen, Gift, DollarSign, TrendingUp, AlertTriangle, FileText, Award, Utensils } from 'lucide-react';
import { PLATFORM_STATS, CHANNEL_BREAKDOWN, TAX_STATS, LEARNING_MODULES } from '../../data/mockData';

const SAAdminDashboard: React.FC = () => {
  const adminStats = [
    {
      title: 'Total Users',
      value: PLATFORM_STATS.totalUsers.toLocaleString(),
      change: '+5.2%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Learning Modules',
      value: LEARNING_MODULES.filter(m => m.status === 'published').length.toString(),
      change: '+3',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Points Distributed',
      value: `${(PLATFORM_STATS.totalPoints / 1000000).toFixed(1)}M`,
      change: '+12.8%',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Tax Reports Pending',
      value: TAX_STATS.pendingForms.toString(),
      change: '-8',
      icon: DollarSign,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentActivities = [
    { id: 1, action: 'New RSA registration: John Martinez (VZW)', time: '15 minutes ago', type: 'user' },
    { id: 2, action: 'Learning module published: Galaxy Z Fold6 Features', time: '1 hour ago', type: 'content' },
    { id: 3, action: 'Tax report submitted: Sarah Johnson ($650)', time: '2 hours ago', type: 'tax' },
    { id: 4, action: 'Sweepstakes winner: AT&T October ($25)', time: '4 hours ago', type: 'reward' },
    { id: 5, action: 'Store deactivated: T-Mobile Brooklyn Center', time: '6 hours ago', type: 'store' }
  ];

  const taxAlerts = [
    { id: 1, user: 'John Smith', amount: 620, status: 'pending', daysOverdue: 5 },
    { id: 2, user: 'Lisa Brown', amount: 755, status: 'submitted', daysOverdue: 0 },
    { id: 3, user: 'Mike Davis', amount: 680, status: 'overdue', daysOverdue: 12 }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user': return <Users className="h-4 w-4 text-blue-600" />;
      case 'content': return <BookOpen className="h-4 w-4 text-green-600" />;
      case 'tax': return <DollarSign className="h-4 w-4 text-orange-600" />;
      case 'reward': return <Gift className="h-4 w-4 text-purple-600" />;
      case 'store': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default: return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'submitted': return 'bg-green-100 text-green-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Samsung America Admin Dashboard</h1>
        <p className="text-gray-300 mt-2">
          Comprehensive platform management and oversight
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-gray-300">Platform Health</div>
            <div className="text-lg font-semibold text-green-400">98.5% Uptime</div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-gray-300">Active Sessions</div>
            <div className="text-lg font-semibold">{PLATFORM_STATS.monthlyActiveUsers.toLocaleString()}</div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-gray-300">Monthly Growth</div>
            <div className="text-lg font-semibold text-green-400">+8.3%</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tax Monitoring */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Tax Reporting Alerts</h2>
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
              {taxAlerts.filter(alert => alert.status === 'overdue').length} Overdue
            </span>
          </div>
          <div className="space-y-3">
            {taxAlerts.map((alert) => (
              <div key={alert.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 border rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{alert.user}</h3>
                  <p className="text-sm text-gray-600">${alert.amount} earned</p>
                </div>
                <div className="mt-2 sm:mt-0 sm:text-right">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(alert.status)}`}>
                    {alert.status}
                  </span>
                  {alert.daysOverdue > 0 && (
                    <p className="text-xs text-red-600 mt-1">{alert.daysOverdue} days overdue</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors">
            Manage Tax Reports
          </button>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Platform Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel Breakdown */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Channel Performance Overview</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Channel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Users
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Active Users
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Points Distributed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {CHANNEL_BREAKDOWN.map((channel, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {channel.channel}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {channel.users.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {channel.active.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {channel.points}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(channel.active / channel.users) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">
                        {Math.round((channel.active / channel.users) * 100)}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Management Quick Actions */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Administrative Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Users className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Manage Users</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <BookOpen className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Content Management</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <Gift className="h-8 w-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Rewards System</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors">
            <Utensils className="h-8 w-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Large Events</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors">
            <TrendingUp className="h-8 w-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Analytics</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SAAdminDashboard;