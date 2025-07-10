import React, { useState } from 'react';
import { Store, TrendingUp, BarChart3, MapPin, Users, Target, Award, Calendar } from 'lucide-react';

const StorePerformance: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedMetric, setSelectedMetric] = useState('sales');
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const storeData = [
    {
      id: 1,
      name: 'AT&T Downtown Dallas',
      region: 'Southwest',
      channel: 'AT&T',
      salesTarget: 150,
      salesActual: 168,
      participants: 8,
      avgReward: 285,
      performance: 112,
      trend: 'up',
      lastUpdate: '2024-10-28'
    },
    {
      id: 2,
      name: 'Verizon Beverly Hills',
      region: 'West',
      channel: 'Verizon',
      salesTarget: 200,
      salesActual: 185,
      participants: 12,
      avgReward: 245,
      performance: 93,
      trend: 'down',
      lastUpdate: '2024-10-28'
    },
    {
      id: 3,
      name: 'T-Mobile Miami Beach',
      region: 'Southeast',
      channel: 'T-Mobile',
      salesTarget: 120,
      salesActual: 142,
      participants: 6,
      avgReward: 310,
      performance: 118,
      trend: 'up',
      lastUpdate: '2024-10-28'
    },
    {
      id: 4,
      name: 'AT&T Chicago Loop',
      region: 'Midwest',
      channel: 'AT&T',
      salesTarget: 180,
      salesActual: 156,
      participants: 10,
      avgReward: 265,
      performance: 87,
      trend: 'stable',
      lastUpdate: '2024-10-28'
    },
    {
      id: 5,
      name: 'Verizon Manhattan',
      region: 'Northeast',
      channel: 'Verizon',
      salesTarget: 250,
      salesActual: 278,
      participants: 15,
      avgReward: 295,
      performance: 111,
      trend: 'up',
      lastUpdate: '2024-10-28'
    }
  ];

  const performanceMetrics = [
    {
      title: 'Total Stores',
      value: storeData.length.toString(),
      change: '+2',
      icon: Store,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Avg Performance',
      value: `${Math.round(storeData.reduce((sum, store) => sum + store.performance, 0) / storeData.length)}%`,
      change: '+5%',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Total Participants',
      value: storeData.reduce((sum, store) => sum + store.participants, 0).toString(),
      change: '+8%',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Avg Reward',
      value: `$${Math.round(storeData.reduce((sum, store) => sum + store.avgReward, 0) / storeData.length)}`,
      change: '+12%',
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const regionData = [
    { region: 'Northeast', stores: 12, performance: 105, trend: 'up' },
    { region: 'Southeast', stores: 8, performance: 98, trend: 'stable' },
    { region: 'Midwest', stores: 10, performance: 92, trend: 'down' },
    { region: 'Southwest', stores: 9, performance: 108, trend: 'up' },
    { region: 'West', stores: 11, performance: 101, trend: 'up' }
  ];

  const getPerformanceColor = (performance: number) => {
    if (performance >= 110) return 'text-green-600';
    if (performance >= 95) return 'text-blue-600';
    if (performance >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceBgColor = (performance: number) => {
    if (performance >= 110) return 'bg-green-500';
    if (performance >= 95) return 'bg-blue-500';
    if (performance >= 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down': return <TrendingUp className="h-4 w-4 text-red-500 transform rotate-180" />;
      case 'stable': return <BarChart3 className="h-4 w-4 text-gray-500" />;
      default: return null;
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-4 sm:p-6 text-white">
        <h1 className="text-xl sm:text-2xl font-bold">Store Performance Analytics</h1>
        <p className="text-blue-100 mt-2">
          Monitor and analyze store performance across all channels and regions
        </p>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Top Performer</div>
            <div className="text-lg font-semibold">Verizon Manhattan</div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Best Region</div>
            <div className="text-lg font-semibold">Southwest</div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Growth Rate</div>
            <div className="text-lg font-semibold text-green-300">+8.5%</div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Target Achievement</div>
            <div className="text-lg font-semibold">102%</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Regions</option>
                <option value="northeast">Northeast</option>
                <option value="southeast">Southeast</option>
                <option value="midwest">Midwest</option>
                <option value="southwest">Southwest</option>
                <option value="west">West</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Metric</label>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="sales">Sales Performance</option>
                <option value="participants">Participants</option>
                <option value="rewards">Avg Rewards</option>
                <option value="growth">Growth Rate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
          <button className="w-full lg:w-auto px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => {
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
        {/* Store Performance Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Individual Store Performance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Store
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {storeData.map((store) => (
                  <tr key={store.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{store.name}</div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getChannelColor(store.channel)}`}>
                            {store.channel}
                          </span>
                          <span className="text-xs text-gray-500">{store.region}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${getPerformanceBgColor(store.performance)}`}
                            style={{ width: `${Math.min(store.performance, 100)}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm font-medium ${getPerformanceColor(store.performance)}`}>
                          {store.performance}%
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {store.salesActual}/{store.salesTarget} sales
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getTrendIcon(store.trend)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regional Performance */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Regional Performance</h2>
          <div className="space-y-4">
            {regionData.map((region, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">{region.region}</h3>
                      <p className="text-sm text-gray-600">{region.stores} stores</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(region.trend)}
                    <span className={`text-lg font-bold ${getPerformanceColor(region.performance)}`}>
                      {region.performance}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getPerformanceBgColor(region.performance)}`}
                    style={{ width: `${Math.min(region.performance, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <h3 className="font-medium text-green-900">Top Performers</h3>
            </div>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• Verizon Manhattan: 111% performance</li>
              <li>• T-Mobile Miami Beach: 118% performance</li>
              <li>• AT&T Downtown Dallas: 112% performance</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="h-5 w-5 text-yellow-600" />
              <h3 className="font-medium text-yellow-900">Needs Attention</h3>
            </div>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• AT&T Chicago Loop: 87% performance</li>
              <li>• Verizon Beverly Hills: 93% performance</li>
              <li>• Midwest region trending down</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <h3 className="font-medium text-blue-900">Key Metrics</h3>
            </div>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Overall growth: +8.5% this quarter</li>
              <li>• Participant engagement: 94%</li>
              <li>• Target achievement: 102%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePerformance;