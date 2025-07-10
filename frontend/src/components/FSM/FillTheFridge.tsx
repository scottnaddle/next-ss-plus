import React, { useState } from 'react';
import { Utensils, Calendar, MapPin, Clock, CheckCircle, AlertTriangle, Users } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const FillTheFridge: React.FC = () => {
  const { user } = useAuth();
  const [selectedFoodType, setSelectedFoodType] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [orderTime, setOrderTime] = useState('');
  const [teamSize, setTeamSize] = useState('');

  const foodOptions = [
    {
      id: 'pizza',
      name: 'Pizza Party',
      description: 'Assorted pizzas for team lunch/dinner',
      estimatedCost: '$15-20 per person',
      orderTime: '30-45 minutes',
      icon: '🍕'
    },
    {
      id: 'chicken',
      name: 'Chicken Feast',
      description: 'Fried chicken, sides, and drinks',
      estimatedCost: '$12-18 per person',
      orderTime: '25-40 minutes',
      icon: '🍗'
    },
    {
      id: 'breakfast',
      name: 'Breakfast Spread',
      description: 'Coffee, pastries, and breakfast items',
      estimatedCost: '$8-12 per person',
      orderTime: '20-30 minutes',
      icon: '🥐'
    },
    {
      id: 'groceries',
      name: 'Grocery Essentials',
      description: 'Snacks, drinks, and office supplies',
      estimatedCost: '$5-10 per person',
      orderTime: '60-90 minutes',
      icon: '🛒'
    }
  ];

  const myStores = [
    { id: 1, name: 'Verizon Manhattan West', address: '123 W 42nd St, New York, NY' },
    { id: 2, name: 'AT&T Brooklyn Heights', address: '456 Court St, Brooklyn, NY' },
    { id: 3, name: 'T-Mobile Queens Center', address: '789 Queens Blvd, Elmhurst, NY' },
    { id: 4, name: 'Verizon Bronx Plaza', address: '321 E 149th St, Bronx, NY' }
  ];

  const recentOrders = [
    {
      id: 1,
      store: 'Verizon Manhattan West',
      foodType: 'Pizza Party',
      orderDate: '2024-10-25',
      status: 'delivered',
      teamSize: 6,
      cost: '$95',
      reason: 'Monthly team meeting'
    },
    {
      id: 2,
      store: 'AT&T Brooklyn Heights',
      foodType: 'Breakfast Spread',
      orderDate: '2024-10-20',
      status: 'delivered',
      teamSize: 4,
      cost: '$45',
      reason: 'Early morning training'
    },
    {
      id: 3,
      store: 'T-Mobile Queens Center',
      foodType: 'Chicken Feast',
      orderDate: '2024-10-18',
      status: 'pending',
      teamSize: 5,
      cost: '$80',
      reason: 'Zero sales motivation'
    }
  ];

  const handleSubmitOrder = () => {
    if (!selectedFoodType || !selectedStore || !orderDate || !orderTime || !teamSize) {
      alert('Please fill in all required fields');
      return;
    }
    
    // In real app, this would submit to Doordash API via VOST team
    console.log('Submitting Fill the Fridge order:', {
      foodType: selectedFoodType,
      store: selectedStore,
      date: orderDate,
      time: orderTime,
      teamSize: teamSize
    });
    
    alert('Order submitted successfully! VOST team will process your request.');
    
    // Reset form
    setSelectedFoodType('');
    setSelectedStore('');
    setOrderDate('');
    setOrderTime('');
    setTeamSize('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Fill the Fridge</h1>
        <p className="text-orange-100 mt-2">
          Motivate your team with food incentives! Order meals through DoorDash for your store visits.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">This Month Orders</div>
            <div className="text-lg font-semibold">3</div>
          </div>
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">Total Spent</div>
            <div className="text-lg font-semibold">$220</div>
          </div>
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">Team Members Fed</div>
            <div className="text-lg font-semibold">15</div>
          </div>
        </div>
      </div>

      {/* Order Form */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Place New Order</h2>
        
        <div className="space-y-6">
          {/* Food Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Select Food Type</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {foodOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedFoodType(option.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    selectedFoodType === option.id
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <h3 className="font-medium text-gray-900">{option.name}</h3>
                      <p className="text-sm text-gray-600">{option.description}</p>
                      <div className="mt-1 text-xs text-gray-500">
                        {option.estimatedCost} • {option.orderTime}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Store Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Store</label>
            <select
              value={selectedStore}
              onChange={(e) => setSelectedStore(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Choose a store...</option>
              {myStores.map((store) => (
                <option key={store.id} value={store.name}>
                  {store.name} - {store.address}
                </option>
              ))}
            </select>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Order Date</label>
              <input
                type="date"
                value={orderDate}
                onChange={(e) => setOrderDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
              <select
                value={orderTime}
                onChange={(e) => setOrderTime(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select time...</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
              </select>
            </div>
          </div>

          {/* Team Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Team Size</label>
            <input
              type="number"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              min="1"
              max="20"
              placeholder="Number of people"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmitOrder}
            className="w-full px-4 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors"
          >
            Submit Order Request
          </button>
        </div>
      </div>

      {/* Order History */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h2>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{order.store}</h3>
                  <p className="text-sm text-gray-600">{order.foodType}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Date:</span>
                  <span className="ml-1 font-medium">{order.orderDate}</span>
                </div>
                <div>
                  <span className="text-gray-500">Team Size:</span>
                  <span className="ml-1 font-medium">{order.teamSize}</span>
                </div>
                <div>
                  <span className="text-gray-500">Cost:</span>
                  <span className="ml-1 font-medium">{order.cost}</span>
                </div>
                <div>
                  <span className="text-gray-500">Reason:</span>
                  <span className="ml-1 font-medium">{order.reason}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Utensils className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-900">Program Guidelines</h4>
            <ul className="text-sm text-blue-800 mt-1 space-y-1">
              <li>• Orders are processed by VOST team through DoorDash</li>
              <li>• Allow 24-48 hours for order processing and approval</li>
              <li>• Use this program to motivate teams and address performance issues</li>
              <li>• Budget limits apply - contact VOST for large orders</li>
              <li>• Perfect for zero sales stores, training sessions, and team meetings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillTheFridge;