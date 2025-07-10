import React, { useState } from 'react';
import { Gift, Plus, Edit2, Trash2, Star, Package, DollarSign, Users, TrendingUp } from 'lucide-react';
import { REWARDS_STATS } from '../../data/mockData';

const RewardsManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('catalog');

  const rewardItems = [
    {
      id: 1,
      name: 'Samsung Galaxy Buds3 Pro',
      category: 'samsung-products',
      pointsCost: 2500,
      actualCost: 249.99,
      stock: 50,
      redeemed: 23,
      status: 'active',
      featured: true
    },
    {
      id: 2,
      name: '$50 Amazon Gift Card',
      category: 'gift-cards',
      pointsCost: 1250,
      actualCost: 50.00,
      stock: 'unlimited',
      redeemed: 156,
      status: 'active',
      featured: false
    },
    {
      id: 3,
      name: 'Samsung 43" Smart TV',
      category: 'samsung-products',
      pointsCost: 8500,
      actualCost: 599.99,
      stock: 10,
      redeemed: 3,
      status: 'active',
      featured: true
    }
  ];

  const sweepstakes = [
    {
      id: 1,
      title: 'November Galaxy Prize',
      entryPoints: 100,
      prizeValue: 1500,
      participants: 2847,
      endDate: '2024-11-15',
      status: 'active',
      channel: 'all'
    },
    {
      id: 2,
      title: 'AT&T Radiant Rewards',
      entryPoints: 50,
      prizeValue: 25,
      participants: 456,
      endDate: '2024-11-08',
      status: 'active',
      channel: 'ATT'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-4 sm:p-6 text-white">
        <h1 className="text-xl sm:text-2xl font-bold">Rewards Management</h1>
        <p className="text-purple-100 mt-2">
          Manage reward catalog, sweepstakes, and point distribution
        </p>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Total Redemptions</div>
            <div className="text-lg font-semibold">{REWARDS_STATS.totalRedemptions.toLocaleString()}</div>
          </div>
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Total Value</div>
            <div className="text-lg font-semibold">${REWARDS_STATS.totalValue.toLocaleString()}</div>
          </div>
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Active Sweepstakes</div>
            <div className="text-lg font-semibold">{REWARDS_STATS.activeSweepstakes}</div>
          </div>
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Budget Used</div>
            <div className="text-lg font-semibold">
              {Math.round((REWARDS_STATS.spent / REWARDS_STATS.monthlyBudget) * 100)}%
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'catalog'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Gift className="h-4 w-4 inline mr-2" />
              Reward Catalog
            </button>
            <button
              onClick={() => setActiveTab('sweepstakes')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'sweepstakes'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Star className="h-4 w-4 inline mr-2" />
              Sweepstakes
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'analytics'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <TrendingUp className="h-4 w-4 inline mr-2" />
              Analytics
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'catalog' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <h3 className="text-lg font-semibold text-gray-900">Reward Items</h3>
                <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors">
                  <Plus className="h-4 w-4" />
                  <span>Add Reward</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {rewardItems.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600 capitalize">{item.category.replace('-', ' ')}</p>
                      </div>
                      {item.featured && (
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Point Cost:</span>
                        <span className="font-medium text-purple-600">{item.pointsCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Actual Cost:</span>
                        <span className="font-medium">${item.actualCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Stock:</span>
                        <span className="font-medium">{typeof item.stock === 'number' ? item.stock : item.stock}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Redeemed:</span>
                        <span className="font-medium">{item.redeemed}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 transition-colors">
                        <Edit2 className="h-4 w-4" />
                        <span>Edit</span>
                      </button>
                      <button className="flex items-center justify-center px-3 py-2 bg-red-100 text-red-700 text-sm font-medium rounded-md hover:bg-red-200 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sweepstakes' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <h3 className="text-lg font-semibold text-gray-900">Active Sweepstakes</h3>
                <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors">
                  <Plus className="h-4 w-4" />
                  <span>Create Sweepstakes</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {sweepstakes.map((sweep) => (
                  <div key={sweep.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">{sweep.title}</h4>
                        <p className="text-sm text-gray-600">Channel: {sweep.channel === 'all' ? 'All Partners' : sweep.channel}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        {sweep.status}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Entry Cost:</span>
                        <span className="font-medium">{sweep.entryPoints} points</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Prize Value:</span>
                        <span className="font-medium">${sweep.prizeValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Participants:</span>
                        <span className="font-medium">{sweep.participants.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">End Date:</span>
                        <span className="font-medium">{sweep.endDate}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors">
                        Manage
                      </button>
                      <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                        Analytics
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Package className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Total Redemptions</h3>
                      <p className="text-2xl font-bold text-blue-600">{REWARDS_STATS.totalRedemptions.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">This month</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Budget Utilization</h3>
                      <p className="text-2xl font-bold text-green-600">
                        {Math.round((REWARDS_STATS.spent / REWARDS_STATS.monthlyBudget) * 100)}%
                      </p>
                      <p className="text-sm text-gray-600">${REWARDS_STATS.spent.toLocaleString()} / ${REWARDS_STATS.monthlyBudget.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Active Participants</h3>
                      <p className="text-2xl font-bold text-purple-600">3,203</p>
                      <p className="text-sm text-gray-600">Sweepstakes entries</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Popular Rewards</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Reward
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Redemptions
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total Cost
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Popularity
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {rewardItems
                        .sort((a, b) => b.redeemed - a.redeemed)
                        .map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{item.name}</div>
                              <div className="text-sm text-gray-500">{item.pointsCost.toLocaleString()} points</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {item.redeemed}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              ${(item.redeemed * item.actualCost).toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                  <div 
                                    className="bg-purple-600 h-2 rounded-full"
                                    style={{ width: `${(item.redeemed / Math.max(...rewardItems.map(r => r.redeemed))) * 100}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-900">
                                  {Math.round((item.redeemed / rewardItems.reduce((sum, r) => sum + r.redeemed, 0)) * 100)}%
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RewardsManagement;