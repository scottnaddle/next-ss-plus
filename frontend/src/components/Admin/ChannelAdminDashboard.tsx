import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, BarChart3, MapPin, Store, Award, Calendar, Target } from 'lucide-react';

interface StoreData {
  id: number;
  name: string;
  location: string;
  region: string;
  district: string;
  area: string;
  healthScore: number;
  lastVisit: string;
  nextVisit: string;
  zeroSales: boolean;
  activeRSAs: number;
  totalRSAs: number;
  monthlySales: number;
  target: number;
  status: string;
}

const ChannelAdminDashboard: React.FC = () => {
  const [stores, setStores] = useState<StoreData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch('http://211.193.3.87:3001/api/stores');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStores(data.stores);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  if (loading) return <div className="text-center py-8">Loading stores data...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;

  const activeStoresCount = stores.length;
  const topPerformingStores = stores.filter(store => store.status === 'excellent' || store.healthScore > 80).slice(0, 4);

  const channelStats = [
    {
      title: 'Monthly Sales',
      value: '$2.4M', // This would ideally come from a backend API as well
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Active Stores',
      value: activeStoresCount.toString(),
      change: '+3',
      icon: Store,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Performance Score',
      value: '8.4/10', // This would ideally come from a backend API as well
      change: '+0.3',
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Rewards Distributed',
      value: '47K', // This would ideally come from a backend API as well
      change: '+18.2%',
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const salesTrends = [
    { month: 'Jan', sales: 2100000, target: 2000000 },
    { month: 'Feb', sales: 2250000, target: 2100000 },
    { month: 'Mar', sales: 2350000, target: 2200000 },
    { month: 'Apr', sales: 2180000, target: 2150000 },
    { month: 'May', sales: 2420000, target: 2300000 },
    { month: 'Jun', sales: 2380000, target: 2250000 }
  ];

  const dealerSalesPrograms = [
    { id: 1, program: 'AT&T Radiant Rewards', participants: 89, distributed: '$24.5K', status: 'active' },
    { id: 2, program: 'Verizon Elite Bonus', participants: 156, distributed: '$38.2K', status: 'active' },
    { id: 3, program: 'T-Mobile Excellence', participants: 67, distributed: '$18.7K', status: 'active' },
    { id: 4, program: 'Q4 Holiday Boost', participants: 234, distributed: '$67.3K', status: 'ended' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'ended': return 'bg-gray-100 text-gray-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Channel Partner Dashboard</h1>
        <p className="text-emerald-100 mt-2">
          Dealer sales performance and rewards management
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-emerald-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-emerald-100">This Month Target</div>
            <div className="text-lg font-semibold">$2.5M (96% achieved)</div>
          </div>
          <div className="bg-emerald-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-emerald-100">Avg Store Performance</div>
            <div className="text-lg font-semibold">87.3%</div>
          </div>
          <div className="bg-emerald-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-emerald-100">Active Programs</div>
            <div className="text-lg font-semibold">3 Running</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {channelStats.map((stat, index) => {
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
        {/* Top Performing Stores */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Stores</h2>
          <div className="space-y-4">
            {topPerformingStores.map((store) => (
              <div key={store.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Store className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{store.name}</h3>
                    <p className="text-sm text-gray-600">{store.location}</p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:text-right">
                  <div className="text-lg font-bold text-gray-900">${store.monthlySales}K</div>
                  <div className="text-sm text-gray-600">Target: ${store.target}K</div>
                  <div className="text-xs text-emerald-600">Health: {store.healthScore}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dealer Sales Programs */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Dealer Sales Programs</h2>
          <div className="space-y-4">
            {dealerSalesPrograms.map((program) => (
              <div key={program.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{program.program}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(program.status)}`}>
                    {program.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="text-gray-500">Participants:</span>
                    <span className="ml-1 font-medium">{program.participants}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Distributed:</span>
                    <span className="ml-1 font-medium">{program.distributed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md hover:bg-emerald-700 transition-colors">
            Manage Programs
          </button>
        </div>
      </div>

      {/* Sales Performance Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Sales vs Target</h2>
        <div className="space-y-4">
          {salesTrends.map((data, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="w-12 text-sm font-medium text-gray-600">{data.month}</div>
              <div className="flex-1 w-full">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600">Sales: ${(data.sales / 1000000).toFixed(1)}M</span>
                  <span className="text-gray-600">Target: ${(data.target / 1000000).toFixed(1)}M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="relative h-3 rounded-full overflow-hidden">
                    <div 
                      className="bg-gray-300 h-3 rounded-full"
                      style={{ width: '100%' }}
                    ></div>
                    <div 
                      className={`absolute top-0 left-0 h-3 rounded-full ${data.sales >= data.target ? 'bg-green-500' : 'bg-blue-500'}`}
                      style={{ width: `${Math.min((data.sales / data.target) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-16 text-left sm:text-right text-sm font-medium">
                <span className={`${data.sales >= data.target ? 'text-green-600' : 'text-blue-600'}`}>
                  {Math.round((data.sales / data.target) * 100)}% Achieved
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Management Actions */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Channel Management</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-colors">
            <DollarSign className="h-8 w-8 text-emerald-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Sales Analytics</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Performance Reports</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <Award className="h-8 w-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Reward Programs</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors">
            <Target className="h-8 w-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Set Targets</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChannelAdminDashboard;