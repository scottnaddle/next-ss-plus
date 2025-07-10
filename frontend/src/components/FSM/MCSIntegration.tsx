import React, { useState } from 'react';
import { MapPin, Clock, CheckCircle, AlertTriangle, Calendar, Navigation, Users, Building2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const MCSIntegration: React.FC = () => {
  const { user } = useAuth();
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [currentStore, setCurrentStore] = useState<string | null>(null);

  const todaysVisits = [
    {
      id: 1,
      storeName: 'Verizon Manhattan West',
      address: '123 W 42nd St, New York, NY 10036',
      scheduledTime: '09:00 AM',
      status: 'pending',
      priority: 'high',
      zeroSales: true,
      lastVisit: '2024-10-15'
    },
    {
      id: 2,
      storeName: 'AT&T Brooklyn Heights',
      address: '456 Court St, Brooklyn, NY 11201',
      scheduledTime: '11:30 AM',
      status: 'pending',
      priority: 'medium',
      zeroSales: false,
      lastVisit: '2024-10-20'
    },
    {
      id: 3,
      storeName: 'T-Mobile Queens Center',
      address: '789 Queens Blvd, Elmhurst, NY 11373',
      scheduledTime: '02:00 PM',
      status: 'pending',
      priority: 'medium',
      zeroSales: true,
      lastVisit: '2024-10-18'
    }
  ];

  const recentVisits = [
    {
      id: 1,
      storeName: 'Verizon Bronx Plaza',
      checkInTime: '2024-10-28 09:15',
      checkOutTime: '2024-10-28 11:45',
      duration: '2h 30m',
      activities: ['Inventory Check', 'Team Training', 'Sales Review'],
      notes: 'Store performing well, RSAs engaged'
    },
    {
      id: 2,
      storeName: 'AT&T Westchester',
      checkInTime: '2024-10-27 14:30',
      checkOutTime: '2024-10-27 16:00',
      duration: '1h 30m',
      activities: ['Zero Sales Discussion', 'Product Demo Setup'],
      notes: 'Addressed Samsung display issues'
    }
  ];

  const handleCheckIn = (storeId: number, storeName: string) => {
    setIsCheckedIn(true);
    setCurrentStore(storeName);
    // In real app, this would call MCS API
    console.log(`Checked into ${storeName} at ${new Date().toLocaleString()}`);
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
    setCurrentStore(null);
    // In real app, this would call MCS API and Salesforce for payroll
    console.log(`Checked out at ${new Date().toLocaleString()}`);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">MCS Store Visits</h1>
        <p className="text-green-100 mt-2">
          Manage your store visits with integrated check-in/check-out and Salesforce payroll tracking
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Today's Visits</div>
            <div className="text-lg font-semibold">{todaysVisits.length}</div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Current Status</div>
            <div className="text-lg font-semibold">
              {isCheckedIn ? 'Checked In' : 'Available'}
            </div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">This Month</div>
            <div className="text-lg font-semibold">23 Visits</div>
          </div>
        </div>
      </div>

      {/* Current Status */}
      {isCheckedIn && currentStore && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-medium text-blue-900">Currently at: {currentStore}</h3>
                <p className="text-sm text-blue-700">Checked in at {new Date().toLocaleTimeString()}</p>
              </div>
            </div>
            <button
              onClick={handleCheckOut}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors"
            >
              Check Out
            </button>
          </div>
        </div>
      )}

      {/* Today's Schedule */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Visit Schedule</h2>
        <div className="space-y-4">
          {todaysVisits.map((visit) => (
            <div key={visit.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{visit.storeName}</h3>
                  <p className="text-sm text-gray-600">{visit.address}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{visit.scheduledTime}</div>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(visit.priority)}`}>
                    {visit.priority} priority
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Last visit: {visit.lastVisit}</span>
                  {visit.zeroSales && (
                    <span className="flex items-center text-red-600">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      Zero Sales
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                    Navigate
                  </button>
                  <button
                    onClick={() => handleCheckIn(visit.id, visit.storeName)}
                    disabled={isCheckedIn}
                    className={`px-3 py-1 text-sm rounded transition-colors ${
                      isCheckedIn
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    Check In
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Visits */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Visits</h2>
        <div className="space-y-4">
          {recentVisits.map((visit) => (
            <div key={visit.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">{visit.storeName}</h3>
                <span className="text-sm text-gray-500">{visit.duration}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 text-sm">
                <div>
                  <span className="text-gray-500">Check In:</span>
                  <span className="ml-2 font-medium">{visit.checkInTime}</span>
                </div>
                <div>
                  <span className="text-gray-500">Check Out:</span>
                  <span className="ml-2 font-medium">{visit.checkOutTime}</span>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="text-sm text-gray-500 mb-1">Activities:</div>
                <div className="flex flex-wrap gap-1">
                  {visit.activities.map((activity, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-sm">
                <span className="text-gray-500">Notes:</span>
                <span className="ml-2 text-gray-700">{visit.notes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MCS Features */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">MCS Integration Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-2">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-900">Time Tracking</h3>
            <p className="text-sm text-gray-600">Automatic Salesforce payroll integration</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 p-3 rounded-lg inline-block mb-2">
              <Navigation className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-medium text-gray-900">GPS Verification</h3>
            <p className="text-sm text-gray-600">Location verification for accurate check-ins</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-3 rounded-lg inline-block mb-2">
              <Building2 className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-medium text-gray-900">Store Health</h3>
            <p className="text-sm text-gray-600">Track store performance and inventory</p>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-800">Important Notes</h4>
            <ul className="text-sm text-yellow-700 mt-1 space-y-1">
              <li>• GPS location is required for check-in verification</li>
              <li>• Check-in/out times are automatically synced with Salesforce for payroll</li>
              <li>• Visit data is used for health tracker and performance metrics</li>
              <li>• Always check out before leaving to ensure accurate time tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCSIntegration;