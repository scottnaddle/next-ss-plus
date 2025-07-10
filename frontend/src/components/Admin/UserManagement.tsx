import React, { useState } from 'react';
import { Search, Filter, UserPlus, Edit2, Trash2, Shield, Mail, MapPin, Calendar } from 'lucide-react';
import { MOCK_USERS, PLATFORM_STATS } from '../../data/mockData';

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const roles = [
    { value: 'all', label: 'All Roles' },
    { value: 'RSA', label: 'Retail Sales Associate' },
    { value: 'SEC', label: 'Samsung Experience Consultant' },
    { value: 'FSM', label: 'Field Sales Manager' },
    { value: 'SA_ADMIN', label: 'Samsung Admin' },
    { value: 'CHANNEL_ADMIN', label: 'Channel Admin' },
    { value: 'SYSTEM_ADMIN', label: 'System Admin' }
  ];

  // Show first 20 users for display purposes
  const displayUsers = MOCK_USERS.slice(0, 20);

  const filteredUsers = displayUsers.filter(user => {
    const matchesSearch = 
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.affiliationCode.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'active' && user.isActive) ||
      (filterStatus === 'inactive' && !user.isActive);
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'RSA': return 'bg-blue-100 text-blue-800';
      case 'SEC': return 'bg-purple-100 text-purple-800';
      case 'FSM': return 'bg-green-100 text-green-800';
      case 'SA_ADMIN': return 'bg-red-100 text-red-800';
      case 'CHANNEL_ADMIN': return 'bg-orange-100 text-orange-800';
      case 'SYSTEM_ADMIN': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (isActive: boolean) => {
    return isActive 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">User Management</h1>
        <p className="text-blue-100 mt-2">
          Manage user accounts, roles, and permissions across the platform
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Total Users</div>
            <div className="text-lg font-semibold">{PLATFORM_STATS.totalUsers.toLocaleString()}</div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Active Users</div>
            <div className="text-lg font-semibold">{PLATFORM_STATS.activeUsers.toLocaleString()}</div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">RSAs</div>
            <div className="text-lg font-semibold">{MOCK_USERS.filter(u => u.role === 'RSA').length.toLocaleString()}</div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">FSMs</div>
            <div className="text-lg font-semibold">{MOCK_USERS.filter(u => u.role === 'FSM').length.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users by name, email, or affiliation code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-2">
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {roles.map(role => (
                  <option key={role.value} value={role.value}>{role.label}</option>
                ))}
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
            <UserPlus className="h-4 w-4" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-4 py-4 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Users ({filteredUsers.length} of {PLATFORM_STATS.totalUsers.toLocaleString()} total)
          </h3>
          <p className="text-sm text-gray-600">Showing first 20 users for performance</p>
        </div>
        {/* Table for md+ screens, cards for mobile */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Affiliation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <Shield className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.firstName} {user.lastName}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Mail className="h-3 w-3 mr-1" />
                          {user.email.length > 25 ? `${user.email.substring(0, 25)}...` : user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>{user.role}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.affiliationCode}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                      {user.storeLocation || user.region || 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.points.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${user.totalEarnings}
                    {user.totalEarnings >= 600 && (<div className="text-xs text-orange-600">Tax Required</div>)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.isActive)}`}>{user.isActive ? 'Active' : 'Inactive'}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Calendar className="h-3 w-3 mr-1 text-gray-400" />
                      {user.lastLogin}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900"><Edit2 className="h-4 w-4" /></button>
                      <button className="text-red-600 hover:text-red-900"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Card view for mobile */}
        <div className="md:hidden divide-y divide-gray-200">
          {filteredUsers.map((user) => (
            <div key={user.id} className="p-4 flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3"><Shield className="h-4 w-4 text-blue-600" /></div>
                <div>
                  <div className="text-base font-medium text-gray-900">{user.firstName} {user.lastName}</div>
                  <div className="text-xs text-gray-500 flex items-center"><Mail className="h-3 w-3 mr-1" />{user.email.length > 25 ? `${user.email.substring(0, 25)}...` : user.email}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className={`px-2 py-1 font-medium rounded-full ${getRoleColor(user.role)}`}>{user.role}</span>
                <span className="text-gray-700">{user.affiliationCode}</span>
                <span className="flex items-center text-gray-700"><MapPin className="h-3 w-3 mr-1 text-gray-400" />{user.storeLocation || user.region || 'N/A'}</span>
                <span className="font-medium text-gray-900">{user.points.toLocaleString()} pts</span>
                <span className="text-gray-900">${user.totalEarnings}</span>
                {user.totalEarnings >= 600 && (<span className="text-orange-600">Tax Required</span>)}
                <span className={`px-2 py-1 font-medium rounded-full ${getStatusColor(user.isActive)}`}>{user.isActive ? 'Active' : 'Inactive'}</span>
                <span className="flex items-center text-gray-700"><Calendar className="h-3 w-3 mr-1 text-gray-400" />{user.lastLogin}</span>
              </div>
              <div className="flex space-x-2 mt-2">
                <button className="text-blue-600 hover:text-blue-900"><Edit2 className="h-4 w-4" /></button>
                <button className="text-red-600 hover:text-red-900"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Users by Role</h3>
          <div className="space-y-3">
            {roles.filter(role => role.value !== 'all').map(role => {
              const count = MOCK_USERS.filter(u => u.role === role.value).length;
              const percentage = MOCK_USERS.length > 0 ? (count / MOCK_USERS.length) * 100 : 0;
              return (
                <div key={role.value} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{role.label}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{count.toLocaleString()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Registrations</h3>
          <div className="space-y-3">
            {MOCK_USERS
              .sort((a, b) => new Date(b.dateJoined).getTime() - new Date(a.dateJoined).getTime())
              .slice(0, 5)
              .map(user => (
                <div key={user.id} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {user.firstName} {user.lastName}
                    </div>
                    <div className="text-xs text-gray-500">{user.role}</div>
                  </div>
                  <div className="text-xs text-gray-500">{user.dateJoined}</div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Reporting Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Users over $600</span>
              <span className="text-sm font-medium text-orange-600">
                {MOCK_USERS.filter(u => u.totalEarnings >= 600).length}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Approaching threshold</span>
              <span className="text-sm font-medium text-yellow-600">
                {MOCK_USERS.filter(u => u.totalEarnings >= 500 && u.totalEarnings < 600).length}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Below threshold</span>
              <span className="text-sm font-medium text-green-600">
                {MOCK_USERS.filter(u => u.totalEarnings < 500).length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;