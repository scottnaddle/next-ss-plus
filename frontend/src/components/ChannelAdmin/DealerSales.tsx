import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, Award, Calendar, Target, BarChart3, MapPin } from 'lucide-react';

const DealerSales: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedChannel, setSelectedChannel] = useState('all');

  const dealerPrograms = [
    {
      id: 1,
      name: 'AT&T Radiant Rewards',
      channel: 'AT&T',
      participants: 89,
      totalDistributed: 24500,
      avgReward: 275,
      status: 'active',
      startDate: '2024-01-01',
      endDate: '2024-12-31'
    },
    {
      id: 2,
      name: 'Verizon Elite Bonus',
      channel: 'Verizon',
      participants: 156,
      totalDistributed: 38200,
      avgReward: 245,
      status: 'active',
      startDate: '2024-01-01',
      endDate: '2024-12-31'
    },
    {
      id: 3,
      name: 'T-Mobile Excellence',
      channel: 'T-Mobile',
      participants: 67,
      totalDistributed: 18700,
      avgReward: 279,
      status: 'active',
      startDate: '2024-01-01',
      endDate: '2024-12-31'
    },
    {
      id: 4,
      name: 'Q4 Holiday Boost',
      channel: 'All',
      participants: 234,
      totalDistributed: 67300,
      avgReward: 288,
      status: 'ended',
      startDate: '2024-10-01',
      endDate: '2024-12-31'
    }
  ];

  const salesMetrics = [
    {
      title: 'Total Programs',
      value: dealerPrograms.filter(p => p.status === 'active').length.toString(),
      change: '+1',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Participants',
      value: dealerPrograms.filter(p => p.status === 'active').reduce((sum, p) => sum + p.participants, 0).toString(),
      change: '+12%',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Total Distributed',
      value: `$${(dealerPrograms.reduce((sum, p) => sum + p.totalDistributed, 0) / 1000).toFixed(0)}K`,
      change: '+18%',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Avg Reward',
      value: `$${Math.round(dealerPrograms.reduce((sum, p) => sum + p.avgReward, 0) / dealerPrograms.length)}`,
      change: '+5%',
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const topPerformers = [
    { id: 1, name: 'John Martinez', channel: 'AT&T', location: 'Dallas, TX', rewards: 850, rank: 1 },
    { id: 2, name: 'Sarah Chen', channel: 'Verizon', location: 'Los Angeles, CA', rewards: 820, rank: 2 },
    { id: 3, name: 'Mike Rodriguez', channel: 'T-Mobile', location: 'Miami, FL', rewards: 795, rank: 3 },
    { id: 4, name: 'Lisa Thompson', channel: 'AT&T', location: 'Chicago, IL', rewards: 780, rank: 4 },
    { id: 5, name: 'David Kim', channel: 'Verizon', location: 'Seattle, WA', rewards: 765, rank: 5 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'ended': return 'bg-gray-100 text-gray-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getChannelColor = (channel: string) => {
    switch (channel) {
      case 'AT&T': return 'bg-orange-100 text-orange-800';
      case 'Verizon': return 'bg-red-100 text-red-800';
      case 'T-Mobile': return 'bg-pink-100 text-pink-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg p-4 sm:p-6 text-white">
        <h1 className="text-xl sm:text-2xl font-bold">Dealer Sales Programs</h1>
        <p className="text-indigo-100 mt-2">
          Manage and monitor dealer sales incentive programs across all channels
        </p>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-indigo-100">Active Programs</div>
            <div className="text-lg font-semibold">
              {dealerPrograms.filter(p => p.status === 'active').length}
            </div>
          </div>
          <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-indigo-100">Total Participants</div>
            <div className="text-lg font-semibold">
              {dealerPrograms.filter(p => p.status === 'active').reduce((sum, p) => sum + p.participants, 0)}
            </div>
          </div>
          <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-indigo-100">Monthly Budget</div>
            <div className="text-lg font-semibold">$125K</div>
          </div>
          <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-indigo-100">Utilization</div>
            <div className="text-lg font-semibold text-green-300">78%</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Channel</label>
              <select
                value={selectedChannel}
                onChange={(e) => setSelectedChannel(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Channels</option>
                <option value="ATT">AT&T</option>
                <option value="Verizon">Verizon</option>
                <option value="TMobile">T-Mobile</option>
              </select>
            </div>
          </div>
          <button className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors">
            Create New Program
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {salesMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Programs */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Programs</h2>
          <div className="space-y-4">
            {dealerPrograms.map((program) => (
              <div key={program.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{program.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getChannelColor(program.channel)}`}>
                        {program.channel}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(program.status)}`}>
                        {program.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">${program.totalDistributed.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">{program.participants} participants</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="text-gray-500">Avg Reward:</span>
                    <span className="ml-1 font-medium">${program.avgReward}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <span className="ml-1 font-medium">{program.startDate} - {program.endDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Performers</h2>
          <div className="space-y-4">
            {topPerformers.map((performer) => (
              <div key={performer.id} className="flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <span className="text-indigo-600 font-bold text-sm">#{performer.rank}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{performer.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getChannelColor(performer.channel)}`}>
                        {performer.channel}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {performer.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">${performer.rewards}</div>
                  <div className="text-xs text-gray-500">Total rewards</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Program Management */}
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Program Management</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors">
            <Target className="h-8 w-8 text-indigo-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Set Targets</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <Award className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Reward Tiers</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <BarChart3 className="h-8 w-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Analytics</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors">
            <Calendar className="h-8 w-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Schedule</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealerSales;