import React, { useState } from 'react';
import { Shield, Users, FileText, Download, Trash2, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

const PrivacyManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('requests');

  const privacyRequests = [
    {
      id: 1,
      userId: 'user_001',
      userName: 'John Smith',
      email: 'john.smith@verizon.com',
      requestType: 'data_download',
      status: 'pending',
      requestDate: '2024-10-28',
      dueDate: '2024-11-05',
      description: 'Request for complete personal data export'
    },
    {
      id: 2,
      userId: 'user_002',
      userName: 'Sarah Johnson',
      email: 'sarah.johnson@bestbuy.com',
      requestType: 'data_deletion',
      status: 'in_progress',
      requestDate: '2024-10-25',
      dueDate: '2024-11-08',
      description: 'Account deletion request with data retention for tax purposes'
    },
    {
      id: 3,
      userId: 'user_003',
      userName: 'Michael Davis',
      email: 'michael.davis@att.com',
      requestType: 'data_correction',
      status: 'completed',
      requestDate: '2024-10-20',
      dueDate: '2024-10-25',
      description: 'Store location information correction'
    }
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      description: 'Names, emails, affiliation codes, store locations',
      totalRecords: 12847,
      retentionPeriod: '7 years',
      complianceStatus: 'compliant'
    },
    {
      category: 'Learning Data',
      description: 'Course progress, quiz results, certifications',
      totalRecords: 45623,
      retentionPeriod: '5 years',
      complianceStatus: 'compliant'
    },
    {
      category: 'Financial Data',
      description: 'Points, rewards, tax information',
      totalRecords: 8934,
      retentionPeriod: '7 years',
      complianceStatus: 'review_needed'
    },
    {
      category: 'Activity Data',
      description: 'App usage, interaction patterns',
      totalRecords: 156789,
      retentionPeriod: '3 years',
      complianceStatus: 'compliant'
    }
  ];

  const complianceMetrics = {
    totalRequests: 47,
    pendingRequests: 8,
    completedOnTime: 42,
    averageResponseTime: '4.2 days',
    complianceRate: 95
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplianceColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'bg-green-100 text-green-800';
      case 'review_needed': return 'bg-yellow-100 text-yellow-800';
      case 'non_compliant': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRequestTypeLabel = (type: string) => {
    switch (type) {
      case 'data_download': return 'Data Download';
      case 'data_deletion': return 'Data Deletion';
      case 'data_correction': return 'Data Correction';
      case 'access_request': return 'Access Request';
      default: return type;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 sm:p-6 text-white">
        <h1 className="text-xl sm:text-2xl font-bold">Privacy Management Dashboard</h1>
        <p className="text-gray-300 mt-2">
          Manage privacy requests and ensure GDPR/CCPA compliance
        </p>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-gray-300">Total Requests</div>
            <div className="text-lg font-semibold">{complianceMetrics.totalRequests}</div>
          </div>
          <div className="bg-gray-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-gray-300">Pending</div>
            <div className="text-lg font-semibold text-yellow-300">{complianceMetrics.pendingRequests}</div>
          </div>
          <div className="bg-gray-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-gray-300">Compliance Rate</div>
            <div className="text-lg font-semibold text-green-300">{complianceMetrics.complianceRate}%</div>
          </div>
          <div className="bg-gray-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-gray-300">Avg Response</div>
            <div className="text-lg font-semibold">{complianceMetrics.averageResponseTime}</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex flex-wrap gap-2 px-6">
            <button
              onClick={() => setActiveTab('requests')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'requests'
                  ? 'border-gray-500 text-gray-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              Privacy Requests
            </button>
            <button
              onClick={() => setActiveTab('data-management')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'data-management'
                  ? 'border-gray-500 text-gray-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Shield className="h-4 w-4 inline mr-2" />
              Data Management
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'compliance'
                  ? 'border-gray-500 text-gray-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <CheckCircle className="h-4 w-4 inline mr-2" />
              Compliance
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'requests' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-start space-x-0 sm:space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 mb-2 sm:mb-0" />
                  <div>
                    <h4 className="font-medium text-blue-900">Privacy Rights Portal Integration</h4>
                    <p className="text-sm text-blue-800 mt-1">
                      Privacy requests are automatically routed through the centralized Privacy Rights Portal managed by Barbara's team (Jenil Sheph).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Active Privacy Requests</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 block lg:table">
                    <thead className="bg-gray-50 block lg:table-header-group">
                      <tr className="lg:table-row">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">Request Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">Due Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 block lg:table-row-group">
                      {privacyRequests.map((request) => (
                        <tr key={request.id} className="hover:bg-gray-50 block lg:table-row border-b lg:border-none mb-4 lg:mb-0">
                          <td className="px-6 py-4 block lg:table-cell">
                            <div className="block lg:hidden text-xs font-medium text-gray-500 uppercase mb-1">User</div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{request.userName}</div>
                              <div className="text-sm text-gray-500">{request.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 block lg:table-cell">
                            <div className="block lg:hidden text-xs font-medium text-gray-500 uppercase mb-1">Request Type</div>
                            <div className="text-sm text-gray-900">{getRequestTypeLabel(request.requestType)}</div>
                            <div className="text-sm text-gray-500">{request.description}</div>
                          </td>
                          <td className="px-6 py-4 block lg:table-cell">
                            <div className="block lg:hidden text-xs font-medium text-gray-500 uppercase mb-1">Status</div>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(request.status)}`}>
                              {request.status.replace('_', ' ')}
                            </span>
                          </td>
                          <td className="px-6 py-4 block lg:table-cell">
                            <div className="block lg:hidden text-xs font-medium text-gray-500 uppercase mb-1">Due Date</div>
                            <div className="text-sm text-gray-900">{request.dueDate}</div>
                            <div className="text-sm text-gray-500">Requested: {request.requestDate}</div>
                          </td>
                          <td className="px-6 py-4 block lg:table-cell text-sm font-medium">
                            <div className="block lg:hidden text-xs font-medium text-gray-500 uppercase mb-1">Actions</div>
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="text-green-600 hover:text-green-900">
                                <CheckCircle className="h-4 w-4" />
                              </button>
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

          {activeTab === 'data-management' && (
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-start space-x-0 sm:space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mb-2 sm:mb-0" />
                  <div>
                    <h4 className="font-medium text-yellow-900">Data Retention Policies</h4>
                    <p className="text-sm text-yellow-800 mt-1">
                      Different data categories have varying retention requirements based on legal and business needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {dataCategories.map((category, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">{category.category}</h4>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </div>
                      <span className={`mt-2 sm:mt-0 px-2 py-1 text-xs font-medium rounded-full ${getComplianceColor(category.complianceStatus)}`}>
                        {category.complianceStatus.replace('_', ' ')}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Total Records:</span>
                        <span className="font-medium">{category.totalRecords.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Retention Period:</span>
                        <span className="font-medium">{category.retentionPeriod}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                      <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 transition-colors">
                        View Details
                      </button>
                      <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Processing Activities</h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Automated Data Cleanup</h4>
                      <p className="text-sm text-gray-600">Remove expired data based on retention policies</p>
                    </div>
                    <button className="mt-2 sm:mt-0 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors">
                      Run Cleanup
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Data Export</h4>
                      <p className="text-sm text-gray-600">Generate comprehensive data export for compliance</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                      Export Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'compliance' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">GDPR Compliance</h3>
                      <p className="text-2xl font-bold text-green-600">98%</p>
                      <p className="text-sm text-gray-600">EU data protection</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">CCPA Compliance</h3>
                      <p className="text-2xl font-bold text-blue-600">95%</p>
                      <p className="text-sm text-gray-600">California privacy</p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Data Subjects</h3>
                      <p className="text-2xl font-bold text-purple-600">12,847</p>
                      <p className="text-sm text-gray-600">Total users</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Compliance Checklist</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-900">Privacy Policy updated and accessible</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-900">Data processing activities documented</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-900">User consent mechanisms in place</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm text-gray-900">Data retention review pending for financial data</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-900">Privacy Rights Portal integrated</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Regional Compliance Status</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Region
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Regulation
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Review
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          United States
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          CCPA
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            Compliant
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2024-10-15
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          European Union
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          GDPR
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            Compliant
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2024-10-10
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Canada
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          PIPEDA
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                            Review Needed
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2024-09-20
                        </td>
                      </tr>
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

export default PrivacyManagement;