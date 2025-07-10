import React, { useState } from 'react';
import { DollarSign, FileText, AlertTriangle, CheckCircle, Download, Mail, Users, Calendar, Clock } from 'lucide-react';
import { TAX_STATS, MOCK_USERS } from '../../data/mockData';

const TaxManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedYear, setSelectedYear] = useState('2024');

  // Get users who need tax reporting
  const taxUsers = MOCK_USERS.filter(user => user.totalEarnings >= 600).slice(0, 10); // Show first 10 for display

  const taxReports = [
    {
      id: 1,
      year: 2024,
      totalEarnings: 680,
      status: 'pending_action',
      dateCreated: '2024-10-15',
      deadline: '2024-11-15',
      formType: '1099-MISC'
    },
    {
      id: 2,
      year: 2023,
      totalEarnings: 450,
      status: 'completed',
      dateCreated: '2024-01-15',
      dateCompleted: '2024-01-28',
      formType: '1099-MISC'
    }
  ];

  const earningsHistory = [
    { month: 'January', earnings: 85, source: 'Learning Modules + Sales Bonus' },
    { month: 'February', earnings: 120, source: 'Quarterly Achievement + Training' },
    { month: 'March', earnings: 95, source: 'Product Certification + Referrals' },
    { month: 'April', earnings: 110, source: 'Sales Performance + Learning' },
    { month: 'May', earnings: 75, source: 'Training Completion + Bonus' },
    { month: 'June', earnings: 130, source: 'Exceptional Performance + Referrals' },
    { month: 'July', earnings: 65, source: 'Regular Activities + Training' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'pending_action':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'in_progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'pending_action':
        return 'Action Required';
      case 'in_progress':
        return 'In Progress';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending_action':
        return 'bg-yellow-100 text-yellow-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const currentYearEarnings = earningsHistory.reduce((sum, month) => sum + month.earnings, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Tax Management Dashboard</h1>
        <p className="text-orange-100 mt-2">
          Monitor $600 threshold compliance and manage tax documentation
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">Users Over $600</div>
            <div className="text-lg font-semibold">{TAX_STATS.over600}</div>
          </div>
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">Pending Forms</div>
            <div className="text-lg font-semibold text-red-300">{TAX_STATS.pendingForms}</div>
          </div>
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">Completed</div>
            <div className="text-lg font-semibold text-green-300">{TAX_STATS.completedForms}</div>
          </div>
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">Total Taxable</div>
            <div className="text-lg font-semibold">${TAX_STATS.totalTaxableAmount.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* External Vendor Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-900">External Tax Processing</h4>
            <p className="text-sm text-blue-800 mt-1">
              Tax processing is handled by trusted third-party vendors to ensure compliance and security:
            </p>
            <ul className="text-sm text-blue-800 mt-2 space-y-1">
              <li>• <strong>PandaDoc:</strong> Electronic document signing and form management</li>
              <li>• <strong>Tincheck:</strong> Tax validation and compliance verification</li>
              <li>• <strong>Pulse:</strong> Overall process coordination and data management</li>
            </ul>
            <p className="text-sm text-blue-800 mt-2">
              <strong>Security:</strong> Sensitive information (SSN) is never stored in Samsung databases.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'overview'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <DollarSign className="h-4 w-4 inline mr-2" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'users'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users className="h-4 w-4 inline mr-2" />
              Tax Users
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'reports'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              1099 Reports
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Urgent Actions</h3>
                      <p className="text-2xl font-bold text-red-600">{TAX_STATS.pendingForms}</p>
                      <p className="text-sm text-gray-600">Forms pending completion</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-8 w-8 text-yellow-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Approaching Threshold</h3>
                      <p className="text-2xl font-bold text-yellow-600">12</p>
                      <p className="text-sm text-gray-600">Users near $600</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Compliance Rate</h3>
                      <p className="text-2xl font-bold text-green-600">
                        {Math.round((TAX_STATS.completedForms / TAX_STATS.over600) * 100)}%
                      </p>
                      <p className="text-sm text-gray-600">Forms completed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Tax Processing Workflow</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">1. Threshold Monitoring</h4>
                        <p className="text-sm text-gray-600">Automatic tracking of user earnings approaching $600</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">2. Notification via PandaDoc</h4>
                        <p className="text-sm text-gray-600">Email sent with secure form link when $600 is reached</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">3. Form Completion</h4>
                        <p className="text-sm text-gray-600">User completes tax information through secure portal</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">4. 1099 Generation</h4>
                        <p className="text-sm text-gray-600">Annual 1099-MISC forms generated and mailed in January</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-auto"
                  >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>
                </div>
                <button className="w-full sm:w-auto px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors">
                  Send Reminder Emails
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Users Requiring Tax Reporting ({TAX_STATS.over600} total)
                  </h3>
                  <p className="text-sm text-gray-600">Showing first 10 users for performance</p>
                </div>
                {/* Table for md+ screens, cards for mobile */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Notified</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {taxUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.firstName} {user.lastName}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                              <div className="text-xs text-gray-400">{user.affiliationCode}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">${user.totalEarnings}</div>
                            <div className="text-xs text-gray-500">${user.totalEarnings - 600} over threshold</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${user.taxReportingRequired ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>{user.taxReportingRequired ? 'pending' : 'completed'}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.lastLogin}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">View</button>
                              <button className="text-orange-600 hover:text-orange-900">Remind</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Card view for mobile */}
                <div className="md:hidden divide-y divide-gray-200">
                  {taxUsers.map((user) => (
                    <div key={user.id} className="p-4 flex flex-col space-y-2">
                      <div>
                        <div className="text-base font-medium text-gray-900">{user.firstName} {user.lastName}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                        <div className="text-xs text-gray-400">{user.affiliationCode}</div>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="font-medium text-gray-900">${user.totalEarnings}</span>
                        <span className="text-gray-500">${user.totalEarnings - 600} over threshold</span>
                        <span className={`px-2 py-1 font-medium rounded-full ${user.taxReportingRequired ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>{user.taxReportingRequired ? 'pending' : 'completed'}</span>
                        <span className="text-gray-500">{user.lastLogin}</span>
                      </div>
                      <div className="flex space-x-2 mt-2">
                        <button className="text-blue-600 hover:text-blue-900">View</button>
                        <button className="text-orange-600 hover:text-orange-900">Remind</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">1099-MISC Report Generation</h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tax Year</label>
                      <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                      </select>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors">
                        <Download className="h-4 w-4" />
                        <span>Generate Reports</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                        <Mail className="h-4 w-4" />
                        <span>Email Reports</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800">Important Deadlines</h4>
                        <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                          <li>• 1099 forms must be mailed to recipients by January 31st</li>
                          <li>• Electronic filing with IRS due by February 28th</li>
                          <li>• All tax documentation handled by external vendors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Historical Reports</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">2023 Tax Year - 1099-MISC Forms</div>
                      <div className="text-sm text-gray-500">Generated: January 15, 2024 • 18 recipients</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 text-sm">Download</button>
                      <button className="text-gray-600 hover:text-gray-900 text-sm">View Details</button>
                    </div>
                  </div>
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">2022 Tax Year - 1099-MISC Forms</div>
                      <div className="text-sm text-gray-500">Generated: January 20, 2023 • 12 recipients</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 text-sm">Download</button>
                      <button className="text-gray-600 hover:text-gray-900 text-sm">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaxManagement;