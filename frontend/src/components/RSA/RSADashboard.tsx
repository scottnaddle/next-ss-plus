import React from 'react';
import { BookOpen, Award, TrendingUp, Target, Gift, Users } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const RSADashboard: React.FC = () => {
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
      title: 'Learning Progress',
      value: '78%',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'This Month Sales',
      value: '24',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Monthly Goal',
      value: '85%',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentActivities = [
    { id: 1, action: 'Completed "Galaxy S24 Features" module', points: 150, time: '2 hours ago' },
    { id: 2, action: 'Earned sales achievement for October', points: 500, time: '1 day ago' },
    { id: 3, action: 'Participated in weekly quiz', points: 75, time: '3 days ago' },
    { id: 4, action: 'Referred new team member', points: 250, time: '1 week ago' }
  ];

  const upcomingLearning = [
    { id: 1, title: 'Galaxy Watch 7 Advanced Features', deadline: '2024-11-15', progress: 60 },
    { id: 2, title: 'Customer Objection Handling', deadline: '2024-11-20', progress: 0 },
    { id: 3, title: 'Galaxy Buds Pro 3 Training', deadline: '2024-11-25', progress: 30 }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Welcome back, {user?.firstName}!</h1>
        <p className="text-blue-100 mt-2">
          You're doing great! Keep up the excellent work at {user?.storeLocation}.
        </p>
        {user?.totalEarnings && (
          <div className="mt-4 bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm flex flex-wrap items-center">
              <span>Year-to-date earnings: <span className="font-semibold">${user.totalEarnings}</span></span>
              {user.totalEarnings > 500 && (
                <span className="ml-0 mt-1 sm:ml-2 sm:mt-0 text-yellow-300">⚠️ Tax reporting may be required</span>
              )}
            </div>
          </div>
        )}
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
        {/* Recent Activities */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
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

        {/* Upcoming Learning */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Learning</h2>
          <div className="space-y-4">
            {upcomingLearning.map((item) => (
              <div key={item.id} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Due: {item.deadline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Start Learning</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <Gift className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Browse Rewards</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <Users className="h-8 w-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Refer Friends</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors">
            <Award className="h-8 w-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">View Achievements</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RSADashboard;