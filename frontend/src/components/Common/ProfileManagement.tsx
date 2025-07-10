import React, { useState } from 'react';
import { User, Mail, MapPin, Building2, Shield, Edit2, Save, X, AlertTriangle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const ProfileManagement: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    storeLocation: user?.storeLocation || '',
    region: user?.region || ''
  });

  const handleSave = () => {
    // In a real app, this would make an API call to update the profile
    console.log('Saving profile:', editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      storeLocation: user?.storeLocation || '',
      region: user?.region || ''
    });
    setIsEditing(false);
  };

  const getRoleDisplayName = (role: string) => {
    const roleNames: { [key: string]: string } = {
      'RSA': 'Retail Sales Associate',
      'SEC': 'Samsung Experience Consultant',
      'FSM': 'Field Sales Manager',
      'SA_ADMIN': 'Samsung America Admin',
      'CHANNEL_ADMIN': 'Channel Administrator',
      'SYSTEM_ADMIN': 'System Administrator'
    };
    return roleNames[role] || role;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Profile Management</h1>
        <p className="text-indigo-100 mt-2">
          Manage your account information and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                <Edit2 className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700"
                >
                  <Save className="h-4 w-4" />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50"
                >
                  <X className="h-4 w-4" />
                  <span>Cancel</span>
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.firstName}
                    onChange={(e) => setEditedProfile({...editedProfile, firstName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-900">{user?.firstName}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.lastName}
                    onChange={(e) => setEditedProfile({...editedProfile, lastName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-900">{user?.lastName}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="flex flex-wrap items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-gray-900">{user?.email}</span>
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full ml-0 mt-1 sm:ml-2 sm:mt-0">
                  Samsung Account
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Email changes must be made through your Samsung account
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-gray-500" />
                <span className="text-gray-900">{getRoleDisplayName(user?.role || '')}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Affiliation Code</label>
              <div className="flex items-center space-x-2">
                <Building2 className="h-4 w-4 text-gray-500" />
                <span className="text-gray-900">{user?.affiliationCode}</span>
              </div>
            </div>

            {user?.storeLocation && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Store Location</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.storeLocation}
                    onChange={(e) => setEditedProfile({...editedProfile, storeLocation: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-900">{user?.storeLocation}</span>
                  </div>
                )}
              </div>
            )}

            {user?.region && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.region}
                    onChange={(e) => setEditedProfile({...editedProfile, region: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-900">{user?.region}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Account Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Current Points</span>
                <span className="font-semibold text-indigo-600">{user?.points.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Account Status</span>
                <span className="text-sm font-medium text-green-600">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Member Since</span>
                <span className="text-sm font-medium text-gray-900">January 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Earnings</span>
                <span className="text-sm font-medium text-gray-900">${user?.totalEarnings}</span>
              </div>
            </div>
          </div>

          {/* Tax Information Alert */}
          {user?.totalEarnings && user.totalEarnings >= 600 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row sm:items-start space-x-0 sm:space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mb-2 sm:mb-0" />
                <div>
                  <h4 className="text-sm font-medium text-yellow-800">Tax Reporting Required</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Your earnings exceed $600. Please complete your tax information.
                  </p>
                  <button className="mt-2 text-sm font-medium text-yellow-800 hover:text-yellow-900 underline">
                    Complete Tax Forms
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Privacy Settings */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy & Security</h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-sm font-medium text-gray-900">Privacy Settings</div>
                <div className="text-xs text-gray-500">Manage your data preferences</div>
              </button>
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-sm font-medium text-gray-900">Download My Data</div>
                <div className="text-xs text-gray-500">Request a copy of your data</div>
              </button>
              <button className="w-full text-left px-4 py-3 border border-red-200 rounded-lg hover:bg-red-50 transition-colors text-red-700">
                <div className="text-sm font-medium">Delete Account</div>
                <div className="text-xs text-red-600">Permanently delete your account</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;