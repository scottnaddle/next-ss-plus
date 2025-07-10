import React, { useState } from 'react';
import { Building2, CheckCircle, AlertTriangle, Clock, DollarSign, Calendar, Users, Settings } from 'lucide-react';

const VendorManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const vendors = [
    {
      id: 1,
      name: 'Pulse Systems',
      category: 'Platform Management',
      services: ['Content Management', 'Rewards Processing', 'Data Analytics', 'Tax Processing'],
      status: 'active',
      contractStart: '2023-01-01',
      contractEnd: '2024-12-31',
      monthlyFee: 45000,
      sla: '99.9%',
      lastReview: '2024-10-15',
      riskLevel: 'high'
    },
    {
      id: 2,
      name: 'PandaDoc',
      category: 'Document Processing',
      services: ['Electronic Signatures', 'Tax Form Processing', 'Document Management'],
      status: 'active',
      contractStart: '2024-01-01',
      contractEnd: '2025-12-31',
      monthlyFee: 8500,
      sla: '99.5%',
      lastReview: '2024-09-20',
      riskLevel: 'medium'
    },
    {
      id: 3,
      name: 'Tincheck',
      category: 'Tax Verification',
      services: ['Tax Validation', 'Compliance Verification', 'IRS Integration'],
      status: 'active',
      contractStart: '2024-01-01',
      contractEnd: '2025-12-31',
      monthlyFee: 5200,
      sla: '99.0%',
      lastReview: '2024-08-10',
      riskLevel: 'low'
    },
    {
      id: 4,
      name: 'DoorDash',
      category: 'Food Delivery',
      services: ['Fill the Fridge Program', 'Order Management', 'Delivery Tracking'],
      status: 'active',
      contractStart: '2024-03-01',
      contractEnd: '2025-02-28',
      monthlyFee: 12000,
      sla: '95.0%',
      lastReview: '2024-10-01',
      riskLevel: 'low'
    },
    {
      id: 5,
      name: 'AWS',
      category: 'Cloud Infrastructure',
      services: ['S3 Storage', 'Data Processing', 'Security Services'],
      status: 'active',
      contractStart: '2023-01-01',
      contractEnd: '2026-12-31',
      monthlyFee: 28000,
      sla: '99.99%',
      lastReview: '2024-09-15',
      riskLevel: 'low'
    }
  ];

  const performanceMetrics = [
    {
      title: 'Active Vendors',
      value: vendors.filter(v => v.status === 'active').length.toString(),
      change: '+1',
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Monthly Spend',
      value: `$${(vendors.reduce((sum, v) => sum + v.monthlyFee, 0) / 1000).toFixed(0)}K`,
      change: '+5%',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Avg SLA',
      value: `${(vendors.reduce((sum, v) => sum + parseFloat(v.sla), 0) / vendors.length).toFixed(1)}%`,
      change: '+0.2%',
      icon: CheckCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'High Risk',
      value: vendors.filter(v => v.riskLevel === 'high').length.toString(),
      change: '0',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const contractRenewals = [
    { vendor: 'Pulse Systems', daysUntilExpiry: 62, value: 540000, priority: 'critical' },
    { vendor: 'PandaDoc', daysUntilExpiry: 426, value: 102000, priority: 'medium' },
    { vendor: 'Tincheck', daysUntilExpiry: 426, value: 62400, priority: 'low' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'terminated': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-4 sm:p-6 text-white">
        <h1 className="text-xl sm:text-2xl font-bold">Vendor Management</h1>
        <p className="text-purple-100 mt-2">
          Monitor and manage third-party vendor relationships and contracts
        </p>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Total Vendors</div>
            <div className="text-lg font-semibold">{vendors.length}</div>
          </div>
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Annual Spend</div>
            <div className="text-lg font-semibold">
              ${(vendors.reduce((sum, v) => sum + v.monthlyFee * 12, 0) / 1000000).toFixed(1)}M
            </div>
          </div>
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Contracts Expiring</div>
            <div className="text-lg font-semibold text-yellow-300">1</div>
          </div>
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Avg Performance</div>
            <div className="text-lg font-semibold text-green-300">98.2%</div>
          </div>
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
                  <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-green-600' : metric.change === '0' ? 'text-gray-600' : 'text-red-600'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'overview'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Building2 className="h-4 w-4 inline mr-2" />
              Vendor Overview
            </button>
            <button
              onClick={() => setActiveTab('contracts')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'contracts'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Calendar className="h-4 w-4 inline mr-2" />
              Contract Management
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'performance'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <CheckCircle className="h-4 w-4 inline mr-2" />
              Performance
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {vendors.map((vendor) => (
                  <div key={vendor.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{vendor.name}</h3>
                        <p className="text-sm text-gray-600">{vendor.category}</p>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(vendor.status)}`}>
                          {vendor.status}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(vendor.riskLevel)}`}>
                          {vendor.riskLevel} risk
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Monthly Fee:</span>
                        <span className="font-medium">${vendor.monthlyFee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">SLA:</span>
                        <span className="font-medium">{vendor.sla}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Contract Ends:</span>
                        <span className="font-medium">{vendor.contractEnd}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {vendor.services.map((service, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors">
                        Manage
                      </button>
                      <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                        <Settings className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contracts' && (
            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-900">Critical Contract Renewal</h4>
                    <p className="text-sm text-red-800 mt-1">
                      Pulse Systems contract expires in 62 days. This is a critical vendor requiring immediate attention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Upcoming Contract Renewals</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {contractRenewals.map((contract, index) => (
                    <div key={index} className="px-6 py-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{contract.vendor}</h4>
                        <p className="text-sm text-gray-600">
                          Expires in {contract.daysUntilExpiry} days • ${contract.value.toLocaleString()} annual value
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(contract.priority)}`}>
                          {contract.priority}
                        </span>
                        <button className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors">
                          Review
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">All Vendor Contracts</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Vendor
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contract Period
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Monthly Fee
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          SLA
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Risk Level
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {vendors.map((vendor) => (
                        <tr key={vendor.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{vendor.name}</div>
                            <div className="text-sm text-gray-500">{vendor.category}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {vendor.contractStart} - {vendor.contractEnd}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${vendor.monthlyFee.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {vendor.sla}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(vendor.riskLevel)}`}>
                              {vendor.riskLevel}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">SLA Compliance</h3>
                      <p className="text-2xl font-bold text-green-600">98.2%</p>
                      <p className="text-sm text-gray-600">Average across all vendors</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Response Time</h3>
                      <p className="text-2xl font-bold text-blue-600">2.4h</p>
                      <p className="text-sm text-gray-600">Average support response</p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Satisfaction</h3>
                      <p className="text-2xl font-bold text-purple-600">4.6/5</p>
                      <p className="text-sm text-gray-600">Internal team rating</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Vendor Performance Scorecard</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Vendor
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          SLA Performance
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Incidents
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Review
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {vendors.map((vendor) => {
                        const slaScore = parseFloat(vendor.sla);
                        const scoreColor = slaScore >= 99 ? 'text-green-600' : slaScore >= 95 ? 'text-yellow-600' : 'text-red-600';
                        return (
                          <tr key={vendor.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{vendor.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                  <div 
                                    className={`h-2 rounded-full ${slaScore >= 99 ? 'bg-green-500' : slaScore >= 95 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                    style={{ width: `${slaScore}%` }}
                                  ></div>
                                </div>
                                <span className={`text-sm font-medium ${scoreColor}`}>
                                  {vendor.sla}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {Math.floor(Math.random() * 5)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {vendor.lastReview}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`text-sm font-medium ${scoreColor}`}>
                                {(slaScore / 20).toFixed(1)}/5.0
                              </span>
                            </td>
                          </tr>
                        );
                      })}
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

export default VendorManagement;