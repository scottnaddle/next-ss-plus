import React, { useState } from 'react';
import { Package, Search, Plus, Edit2, AlertTriangle, CheckCircle, TrendingUp, BarChart3 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const StoreInventory: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const inventoryItems = [
    {
      id: 1,
      name: 'Galaxy S24 Ultra',
      sku: 'SM-S928U',
      category: 'smartphones',
      currentStock: 8,
      targetStock: 12,
      price: '$1,299.99',
      status: 'low',
      lastUpdated: '2024-10-28',
      salesThisWeek: 3
    },
    {
      id: 2,
      name: 'Galaxy S24+',
      sku: 'SM-S926U',
      category: 'smartphones',
      currentStock: 15,
      targetStock: 15,
      price: '$999.99',
      status: 'optimal',
      lastUpdated: '2024-10-28',
      salesThisWeek: 5
    },
    {
      id: 3,
      name: 'Galaxy Watch 7',
      sku: 'SM-L305F',
      category: 'wearables',
      currentStock: 6,
      targetStock: 10,
      price: '$329.99',
      status: 'low',
      lastUpdated: '2024-10-27',
      salesThisWeek: 2
    },
    {
      id: 4,
      name: 'Galaxy Buds3 Pro',
      sku: 'SM-R630N',
      category: 'audio',
      currentStock: 20,
      targetStock: 18,
      price: '$249.99',
      status: 'overstocked',
      lastUpdated: '2024-10-28',
      salesThisWeek: 1
    },
    {
      id: 5,
      name: 'Galaxy Tab S10+',
      sku: 'SM-X826U',
      category: 'tablets',
      currentStock: 4,
      targetStock: 8,
      price: '$999.99',
      status: 'critical',
      lastUpdated: '2024-10-26',
      salesThisWeek: 1
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'smartphones', label: 'Smartphones' },
    { value: 'tablets', label: 'Tablets' },
    { value: 'wearables', label: 'Wearables' },
    { value: 'audio', label: 'Audio' },
    { value: 'accessories', label: 'Accessories' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'low': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'optimal': return 'bg-green-100 text-green-800 border-green-200';
      case 'overstocked': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'low': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'optimal': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'overstocked': return <TrendingUp className="h-4 w-4 text-blue-600" />;
      default: return <Package className="h-4 w-4 text-gray-600" />;
    }
  };

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const inventoryStats = {
    totalItems: inventoryItems.length,
    lowStock: inventoryItems.filter(item => item.status === 'low' || item.status === 'critical').length,
    totalValue: inventoryItems.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '').replace(',', '')) * item.currentStock), 0),
    weekSales: inventoryItems.reduce((sum, item) => sum + item.salesThisWeek, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-4 sm:p-6 text-white">
        <h1 className="text-xl sm:text-2xl font-bold">Store Inventory Management</h1>
        <p className="text-purple-100 mt-2">
          {user?.storeLocation} - Samsung Product Inventory
        </p>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Total Items</div>
            <div className="text-lg font-semibold">{inventoryStats.totalItems}</div>
          </div>
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Low Stock</div>
            <div className="text-lg font-semibold text-yellow-300">{inventoryStats.lowStock}</div>
          </div>
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Inventory Value</div>
            <div className="text-lg font-semibold">${inventoryStats.totalValue.toLocaleString()}</div>
          </div>
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Week Sales</div>
            <div className="text-lg font-semibold">{inventoryStats.weekSales}</div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 flex-1 w-full sm:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors">
            <Plus className="h-4 w-4" />
            <span>Add Item</span>
          </button>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                <p className="text-lg font-bold text-purple-600 mt-2">{item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(item.status)}
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Current Stock:</span>
                <span className="font-medium">{item.currentStock}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Target Stock:</span>
                <span className="font-medium">{item.targetStock}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Week Sales:</span>
                <span className="font-medium">{item.salesThisWeek}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    item.currentStock < item.targetStock * 0.5 ? 'bg-red-500' :
                    item.currentStock < item.targetStock * 0.8 ? 'bg-yellow-500' :
                    item.currentStock <= item.targetStock ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                  style={{ width: `${Math.min((item.currentStock / item.targetStock) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 transition-colors">
                <Edit2 className="h-4 w-4" />
                <span>Update</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors">
                <BarChart3 className="h-4 w-4" />
                <span>Details</span>
              </button>
            </div>

            <div className="mt-3 text-xs text-gray-500">
              Last updated: {item.lastUpdated}
            </div>
          </div>
        ))}
      </div>

      {/* Best Buy Integration Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Package className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-900">Best Buy Integration</h4>
            <p className="text-sm text-blue-800 mt-1">
              Inventory data is synced with Best Buy systems. Updates may take 15-30 minutes to reflect across all platforms.
            </p>
            <ul className="text-sm text-blue-800 mt-2 space-y-1">
              <li>• Stock levels update automatically from POS system</li>
              <li>• Manual adjustments require manager approval</li>
              <li>• Display units are tracked separately from sellable inventory</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInventory;