import React, { useState } from 'react';
import { Activity, TrendingUp, AlertTriangle, CheckCircle, BarChart3, MapPin, Users, Package } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const HealthTracker: React.FC = () => {
  const { user } = useAuth();
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('overall');

  const storeHealthData = [
    {
      id: 1,
      storeName: 'Verizon Manhattan West',
      location: 'New York, NY',
      overallHealth: 45,
      salesHealth: 30,
      inventoryHealth: 60,
      teamHealth: 45,
      lastVisit: '2024-10-15',
      zeroSales: true,
      criticalIssues: 3,
      trend: 'declining'
    },
    {
      id: 2,
      storeName: 'AT&T Brooklyn Heights',
      location: 'Brooklyn, NY',
      overallHealth: 78,
      salesHealth: 85,
      inventoryHealth: 70,
      teamHealth: 80,
      lastVisit: '2024-10-20',
      zeroSales: false,
      criticalIssues: 0,
      trend: 'improving'
    },
    {
      id: 3,
      storeName: 'T-Mobile Queens Center',
      location: 'Queens, NY',
      overallHealth: 62,
      salesHealth: 55,
      inventoryHealth: 75,
      teamHealth: 60,
      lastVisit: '2024-10-18',
      zeroSales: true,
      criticalIssues: 1,
      trend: 'stable'
    },
    {
      id: 4,
      storeName: 'Verizon Bronx Plaza',
      location: 'Bronx, NY',
      overallHealth: 85,
      salesHealth: 90,
      inventoryHealth: 80,
      teamHealth: 85,
      lastVisit: '2024-10-22',
      zeroSales: false,
      criticalIssues: 0,
      trend: 'improving'
    }
  ];

  const healthMetrics = [
    {
      name: 'Sales Performance',
      value: 68,
      target: 80,
      trend: '+5%',
      status: 'warning'
    },
    {
      name: 'Inventory Levels',
      value: 71,
      target: 75,
      trend: '+2%',
      status: 'good'
    },
    {
      name: 'Team Engagement',
      value: 67,
      target: 85,
      trend: '-3%',
      status: 'warning'
    },
    {
      name: 'Customer Satisfaction',
      value: 82,
      target: 80,
      trend: '+8%',
      status: 'excellent'
    }
  ];

  const getHealthColor = (health: number) => {
    if (health >= 80) return 'text-green-600';
    if (health >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getHealthBgColor = (health: number) => {
    if (health >= 80) return 'bg-green-500';
    if (health >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'declining': return <TrendingUp className="h-4 w-4 text-red-500 transform rotate-180" />;
      case 'stable': return <BarChart3 className="h-4 w-4 text-gray-500" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const regionStats = {
    averageHealth: Math.round(storeHealthData.reduce((sum, store) => sum + store.overallHealth, 0) / storeHealthData.length),
    criticalStores: storeHealthData.filter(store => store.overallHealth < 50).length,
    zeroSalesStores: storeHealthData.filter(store => store.zeroSales).length,
    totalIssues: storeHealthData.reduce((sum, store) => sum + store.criticalIssues, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg p-4 sm:p-6 text-white">
        <h1 className="text-xl sm:text-2xl font-bold">Regional Health Tracker</h1>
        <p className="text-teal-100 mt-2">
          Monitor store performance and identify areas needing attention
        </p>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-teal-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-teal-100">Avg Health Score</div>
            <div className={`text-lg font-semibold ${regionStats.averageHealth >= 70 ? 'text-green-300' : 'text-yellow-300'}`}>
              {regionStats.averageHealth}%
            </div>
          </div>
          <div className="bg-teal-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-teal-100">Critical Stores</div>
            <div className="text-lg font-semibold text-red-300">{regionStats.criticalStores}</div>
          </div>
          <div className="bg-teal-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-teal-100">Zero Sales</div>
            <div className="text-lg font-semibold text-orange-300">{regionStats.zeroSalesStores}</div>
          </div>
          <div className="bg-teal-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-teal-100">Total Issues</div>
            <div className="text-lg font-semibold">{regionStats.totalIssues}</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Timeframe</label>
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Metric Focus</label>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="overall">Overall Health</option>
                <option value="sales">Sales Performance</option>
                <option value="inventory">Inventory Health</option>
                <option value="team">Team Engagement</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Health Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {healthMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">{metric.name}</h3>
              <Activity className={`h-5 w-5 ${getStatusColor(metric.status)}`} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>
                  {metric.value}%
                </span>
                <span className={`text-sm font-medium ${metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.trend}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    metric.value >= 80 ? 'bg-green-500' :
                    metric.value >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${metric.value}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500">Target: {metric.target}%</div>
            </div>
          </div>
        ))}
      </div>

      {/* Store Health Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {storeHealthData.map((store) => (
          <div key={store.id} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{store.storeName}</h3>
                <p className="text-sm text-gray-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {store.location}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {getTrendIcon(store.trend)}
                <div className={`text-2xl font-bold ${getHealthColor(store.overallHealth)}`}>
                  {store.overallHealth}%
                </div>
              </div>
            </div>

            {/* Health Breakdown */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Sales Performance</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getHealthBgColor(store.salesHealth)}`}
                      style={{ width: `${store.salesHealth}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm font-medium ${getHealthColor(store.salesHealth)}`}>
                    {store.salesHealth}%
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Inventory Health</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getHealthBgColor(store.inventoryHealth)}`}
                      style={{ width: `${store.inventoryHealth}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm font-medium ${getHealthColor(store.inventoryHealth)}`}>
                    {store.inventoryHealth}%
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Team Engagement</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getHealthBgColor(store.teamHealth)}`}
                      style={{ width: `${store.teamHealth}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm font-medium ${getHealthColor(store.teamHealth)}`}>
                    {store.teamHealth}%
                  </span>
                </div>
              </div>
            </div>

            {/* Alerts and Issues */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500">Last Visit: {store.lastVisit}</span>
                  {store.zeroSales && (
                    <span className="flex items-center text-red-600">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      Zero Sales
                    </span>
                  )}
                </div>
                {store.criticalIssues > 0 && (
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                    {store.criticalIssues} Issues
                  </span>
                )}
              </div>
              
              <div className="mt-3 flex space-x-2">
                <button className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended Actions</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <div>
              <div className="font-medium text-red-900">Urgent: Verizon Manhattan West</div>
              <div className="text-sm text-red-700">Critical health score (45%) - Schedule immediate visit</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <Package className="h-5 w-5 text-yellow-600" />
            <div>
              <div className="font-medium text-yellow-900">Inventory Alert: Multiple Stores</div>
              <div className="text-sm text-yellow-700">Low stock levels detected across 3 locations</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <Users className="h-5 w-5 text-blue-600" />
            <div>
              <div className="font-medium text-blue-900">Team Training Opportunity</div>
              <div className="text-sm text-blue-700">Schedule group training for underperforming locations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTracker;