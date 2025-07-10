import React, { useState } from 'react';
import { MapPin, Building2, Users, TrendingUp, AlertTriangle, Calendar, CheckCircle, Clock } from 'lucide-react';

const StoreManagement: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const stores = [
    {
      id: 1,
      name: 'Verizon Manhattan West',
      location: 'New York, NY',
      region: 'Northeast',
      district: 'Metro NY',
      area: 'Manhattan',
      healthScore: 45,
      lastVisit: '2024-10-15',
      nextVisit: '2024-11-01',
      zeroSales: true,
      activeRSAs: 3,
      totalRSAs: 5,
      monthlySales: 12,
      target: 35,
      status: 'urgent'
    },
    {
      id: 2,
      name: 'AT&T Brooklyn Heights',
      location: 'Brooklyn, NY',
      region: 'Northeast',
      district: 'Metro NY',
      area: 'Brooklyn',
      healthScore: 78,
      lastVisit: '2024-10-20',
      nextVisit: '2024-11-02',
      zeroSales: false,
      activeRSAs: 4,
      totalRSAs: 4,
      monthlySales: 28,
      target: 30,
      status: 'good'
    },
    {
      id: 3,
      name: 'T-Mobile Queens Center',
      location: 'Queens, NY',
      region: 'Northeast',
      district: 'Metro NY',
      area: 'Queens',
      healthScore: 62,
      lastVisit: '2024-10-18',
      nextVisit: '2024-11-03',
      zeroSales: true,
      activeRSAs: 2,
      totalRSAs: 4,
      monthlySales: 18,
      target: 25,
      status: 'attention'
    },
    {
      id: 4,
      name: 'Verizon Bronx Plaza',
      location: 'Bronx, NY',
      region: 'Northeast',
      district: 'Metro NY',
      area: 'Bronx',
      healthScore: 85,
      lastVisit: '2024-10-22',
      nextVisit: '2024-11-05',
      zeroSales: false,
      activeRSAs: 5,
      totalRSAs: 5,
      monthlySales: 32,
      target: 28,
      status: 'excellent'
    }
  ];

  const regions = ['all', 'Northeast', 'Southeast', 'Midwest', 'West'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'attention': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'good': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'excellent': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredStores = selectedRegion === 'all' 
    ? stores 
    : stores.filter(store => store.region === selectedRegion);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Store Management</h1>
        <p className="text-blue-100 mt-2">
          Monitor and manage your regional store network
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Total Stores</div>
            <div className="text-lg font-semibold">{stores.length}</div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Zero Sales</div>
            <div className="text-lg font-semibold text-red-300">
              {stores.filter(s => s.zeroSales).length}
            </div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Avg Health Score</div>
            <div className="text-lg font-semibold">
              {Math.round(stores.reduce((sum, s) => sum + s.healthScore, 0) / stores.length)}%
            </div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Active RSAs</div>
            <div className="text-lg font-semibold">
              {stores.reduce((sum, s) => sum + s.activeRSAs, 0)}
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">View</label>
              <div className="flex bg-gray-100 rounded-md p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 text-sm font-medium rounded ${
                    viewMode === 'grid' ? 'bg-white text-blue-600 shadow' : 'text-gray-600'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 text-sm font-medium rounded ${
                    viewMode === 'list' ? 'bg-white text-blue-600 shadow' : 'text-gray-600'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
            Schedule Visit
          </button>
        </div>
      </div>

      {/* Store Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredStores.map((store) => (
            <div key={store.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{store.name}</h3>
                  <p className="text-sm text-gray-600">{store.location}</p>
                  <p className="text-xs text-gray-500">{store.district} • {store.area}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(store.status)}`}>
                  {store.status}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-500">Health Score</div>
                  <div className={`text-xl font-bold ${getHealthScoreColor(store.healthScore)}`}>
                    {store.healthScore}%
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Active RSAs</div>
                  <div className="text-xl font-bold text-gray-900">
                    {store.activeRSAs}/{store.totalRSAs}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Monthly Sales</div>
                  <div className="text-xl font-bold text-gray-900">
                    {store.monthlySales}
                  </div>
                  <div className="text-xs text-gray-500">Target: {store.target}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Last Visit</div>
                  <div className="text-sm font-medium text-gray-900">{store.lastVisit}</div>
                  <div className="text-xs text-blue-600">Next: {store.nextVisit}</div>
                </div>
              </div>

              {store.zeroSales && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-red-800">Zero Sales Alert</span>
                  </div>
                  <p className="text-xs text-red-700 mt-1">This store has zero Samsung sales this period</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                  Visit Store
                </button>
                <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 block lg:table">
              <div className="bg-gray-50 block lg:table-header-group">
                <div className="lg:table-row">
                  <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Store
                  </div>
                  <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Health Score
                  </div>
                  <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    RSAs
                  </div>
                  <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Sales
                  </div>
                  <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Last Visit
                  </div>
                  <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Status
                  </div>
                  <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Actions
                  </div>
                </div>
              </div>
              <tbody className="bg-white divide-y divide-gray-200 block lg:table-row-group">
                {filteredStores.map((store) => (
                  <tr key={store.id} className="hover:bg-gray-50 block lg:table-row border-b lg:border-none mb-4 lg:mb-0">
                    <td className="px-6 py-4 block lg:table-cell">
                      <div className="block lg:hidden text-xs font-medium text-gray-500 uppercase mb-1">Store</div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{store.name}</div>
                        <div className="text-sm text-gray-500">{store.location}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 block lg:table-cell">
                      <div className="block lg:hidden text-xs font-medium text-gray-500 uppercase mb-1">Health Score</div>
                      <div className={`text-sm font-bold ${getHealthScoreColor(store.healthScore)}`}>{store.healthScore}%</div>
                    </td>
                    <td className="px-6 py-4 block lg:table-cell text-sm text-gray-900">
                      <div className="block lg:hidden text-xs font-medium text-gray-500 uppercase mb-1">RSAs</div>
                      {store.activeRSAs}/{store.totalRSAs}
                    </td>
                    <td className="px-6 py-4 block lg:table-cell">
                      <div className="block lg:hidden text-xs font-medium text-gray-500 uppercase mb-1">Sales</div>
                      <div className="text-sm text-gray-900">{store.monthlySales}</div>
                      <div className="text-xs text-gray-500">Target: {store.target}</div>
                    </td>
                    <td className="px-6 py-4 block lg:table-cell text-sm text-gray-900">
                      <div className="block lg:hidden text-xs font-medium text-gray-500 uppercase mb-1">Last Visit</div>
                      {store.lastVisit}
                    </td>
                    <td className="px-6 py-4 block lg:table-cell">
                      <div className="block lg:hidden text-xs font-medium text-gray-500 uppercase mb-1">Status</div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(store.status)}`}>{store.status}</span>
                      {store.zeroSales && (
                        <div className="flex items-center mt-1">
                          <AlertTriangle className="h-3 w-3 text-red-500 mr-1" />
                          <span className="text-xs text-red-600">Zero Sales</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 block lg:table-cell text-sm font-medium">
                      <div className="block lg:hidden text-xs font-medium text-gray-500 uppercase mb-1">Actions</div>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">Visit</button>
                        <button className="text-gray-600 hover:text-gray-900">Details</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Visit Planning */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Visit Planning</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <h3 className="font-medium text-red-900">Urgent Visits</h3>
            </div>
            <p className="text-2xl font-bold text-red-600">
              {stores.filter(s => s.status === 'urgent').length}
            </p>
            <p className="text-sm text-red-700">Zero sales stores requiring immediate attention</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <h3 className="font-medium text-yellow-900">Scheduled This Week</h3>
            </div>
            <p className="text-2xl font-bold text-yellow-600">3</p>
            <p className="text-sm text-yellow-700">Planned store visits</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h3 className="font-medium text-green-900">Completed This Month</h3>
            </div>
            <p className="text-2xl font-bold text-green-600">12</p>
            <p className="text-sm text-green-700">Store visits completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreManagement;