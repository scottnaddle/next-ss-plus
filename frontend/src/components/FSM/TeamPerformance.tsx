import React, { useState } from 'react';
import { Users, TrendingUp, Award, Target, Star, BookOpen, Calendar, BarChart3 } from 'lucide-react';

const TeamPerformance: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedMetric, setSelectedMetric] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      role: 'RSA',
      store: 'Verizon Manhattan West',
      points: 2450,
      learningCompletion: 85,
      monthlySales: 24,
      target: 30,
      performance: 'above',
      trend: 'up',
      certifications: 8,
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'SEC',
      store: 'Best Buy Brooklyn',
      points: 1850,
      learningCompletion: 92,
      monthlySales: 18,
      target: 20,
      performance: 'target',
      trend: 'up',
      certifications: 12,
      lastActivity: '1 day ago'
    },
    {
      id: 3,
      name: 'Mike Davis',
      role: 'RSA',
      store: 'T-Mobile Queens Center',
      points: 2100,
      learningCompletion: 78,
      monthlySales: 21,
      target: 25,
      performance: 'below',
      trend: 'down',
      certifications: 6,
      lastActivity: '4 hours ago'
    },
    {
      id: 4,
      name: 'Lisa Brown',
      role: 'RSA',
      store: 'AT&T Brooklyn Heights',
      points: 1920,
      learningCompletion: 88,
      monthlySales: 19,
      target: 22,
      performance: 'below',
      trend: 'stable',
      certifications: 9,
      lastActivity: '6 hours ago'
    },
    {
      id: 5,
      name: 'David Wilson',
      role: 'RSA',
      store: 'Verizon Bronx Plaza',
      points: 2680,
      learningCompletion: 95,
      monthlySales: 28,
      target: 25,
      performance: 'above',
      trend: 'up',
      certifications: 14,
      lastActivity: '30 minutes ago'
    }
  ];

  const performanceMetrics = [
    {
      title: 'Team Average Points',
      value: '2,200',
      change: '+12%',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Learning Completion',
      value: '87%',
      change: '+5%',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Sales Performance',
      value: '92%',
      change: '+8%',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Target Achievement',
      value: '78%',
      change: '+15%',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'above': return 'bg-green-100 text-green-800';
      case 'target': return 'bg-blue-100 text-blue-800';
      case 'below': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down': return <TrendingUp className="h-4 w-4 text-red-500 transform rotate-180" />;
      case 'stable': return <BarChart3 className="h-4 w-4 text-gray-500" />;
      default: return null;
    }
  };

  const getPerformanceText = (performance: string) => {
    switch (performance) {
      case 'above': return 'Above Target';
      case 'target': return 'On Target';
      case 'below': return 'Below Target';
      default: return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Team Performance</h1>
        <p className="text-green-100 mt-2">
          Monitor and support your team's success across the region
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Team Members</div>
            <div className="text-lg font-semibold">{teamMembers.length}</div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">High Performers</div>
            <div className="text-lg font-semibold">
              {teamMembers.filter(m => m.performance === 'above').length}
            </div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Avg Completion</div>
            <div className="text-lg font-semibold">
              {Math.round(teamMembers.reduce((sum, m) => sum + m.learningCompletion, 0) / teamMembers.length)}%
            </div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Team Points</div>
            <div className="text-lg font-semibold">
              {teamMembers.reduce((sum, m) => sum + m.points, 0).toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${metric.bgColor} p-3 rounded-lg`}>
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Metric</label>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">All Metrics</option>
                <option value="points">Points</option>
                <option value="learning">Learning</option>
                <option value="sales">Sales</option>
              </select>
            </div>
          </div>
          <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Team Members Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Individual Performance</h2>
        </div>
        {/* Table for md+ screens, cards for mobile */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Member</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Learning</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teamMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.role} • {member.store}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{member.points.toLocaleString()}</div>
                    <div className="flex items-center">
                      {Array.from({ length: Math.min(5, Math.floor(member.certifications / 3)) }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">{member.certifications} certs</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${member.learningCompletion}%` }}></div>
                      </div>
                      <span className="text-sm text-gray-900">{member.learningCompletion}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{member.monthlySales}</div>
                    <div className="text-xs text-gray-500">Target: {member.target}</div>
                    <div className="w-12 bg-gray-200 rounded-full h-1 mt-1">
                      <div className={`h-1 rounded-full ${(member.monthlySales / member.target) >= 1 ? 'bg-green-500' : (member.monthlySales / member.target) >= 0.8 ? 'bg-blue-500' : 'bg-yellow-500'}`} style={{ width: `${Math.min((member.monthlySales / member.target) * 100, 100)}%` }}></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPerformanceColor(member.performance)}`}>{getPerformanceText(member.performance)}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{getTrendIcon(member.trend)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.lastActivity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-green-600 hover:text-green-900 mr-3">Coach</button>
                    <button className="text-blue-600 hover:text-blue-900">Message</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Card view for mobile */}
        <div className="md:hidden divide-y divide-gray-200">
          {teamMembers.map((member) => (
            <div key={member.id} className="p-4 flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3"><Users className="h-4 w-4 text-green-600" /></div>
                <div>
                  <div className="text-base font-medium text-gray-900">{member.name}</div>
                  <div className="text-xs text-gray-500">{member.role} • {member.store}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="font-medium text-gray-900">{member.points.toLocaleString()} pts</span>
                <span className="flex items-center text-gray-700">Certs: {member.certifications}</span>
                <span className="flex items-center text-gray-700">Learning:
                  <span className="ml-2 w-16 bg-gray-200 rounded-full h-2 mr-2 inline-block align-middle">
                    <span className="bg-green-600 h-2 rounded-full inline-block align-middle" style={{ width: `${member.learningCompletion}%` }}></span>
                  </span>
                  <span className="text-xs text-gray-900">{member.learningCompletion}%</span>
                </span>
                <span className="font-medium text-gray-900">Sales: {member.monthlySales} (Target: {member.target})</span>
                <span className="flex items-center text-gray-700">Sales %:
                  <span className="ml-2 w-12 bg-gray-200 rounded-full h-1 mr-2 inline-block align-middle">
                    <span className={`h-1 rounded-full ${(member.monthlySales / member.target) >= 1 ? 'bg-green-500' : (member.monthlySales / member.target) >= 0.8 ? 'bg-blue-500' : 'bg-yellow-500'}`} style={{ width: `${Math.min((member.monthlySales / member.target) * 100, 100)}%` }}></span>
                  </span>
                </span>
                <span className={`px-2 py-1 font-medium rounded-full ${getPerformanceColor(member.performance)}`}>{getPerformanceText(member.performance)}</span>
                <span className="flex items-center">{getTrendIcon(member.trend)}</span>
                <span className="text-gray-500">{member.lastActivity}</span>
              </div>
              <div className="flex space-x-2 mt-2">
                <button className="text-green-600 hover:text-green-900">Coach</button>
                <button className="text-blue-600 hover:text-blue-900">Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers</h3>
          <div className="space-y-4">
            {teamMembers
              .filter(member => member.performance === 'above')
              .sort((a, b) => b.points - a.points)
              .map((member, index) => (
                <div key={member.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-600">{member.store}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">{member.points.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">{member.learningCompletion}% complete</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Coaching Opportunities</h3>
          <div className="space-y-4">
            {teamMembers
              .filter(member => member.performance === 'below')
              .map((member) => (
                <div key={member.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                      <Calendar className="h-3 w-3" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-600">{member.store}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-yellow-800">
                      {Math.round((member.monthlySales / member.target) * 100)}% of target
                    </div>
                    <button className="text-xs text-yellow-600 hover:text-yellow-700 underline">
                      Schedule coaching
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPerformance;