import React, { useState } from 'react';
import { DollarSign, FileText, Calendar, AlertTriangle, CheckCircle, Clock, Download, Mail, Zap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const TaxReporting: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

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
  const projectedAnnualEarnings = (currentYearEarnings / 7) * 12; // Assuming 7 months of data

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Tax Reporting Center</h1>
        <p className="text-orange-100 mt-2">
          Manage your tax documents and earnings information - $600 threshold compliance
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">2024 Earnings</div>
            <div className="text-lg font-semibold">${currentYearEarnings}</div>
          </div>
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">Tax Threshold</div>
            <div className="text-lg font-semibold">$600</div>
          </div>
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">Status</div>
            <div className="text-lg font-semibold">
              {currentYearEarnings >= 600 ? 'Reporting Required' : 'Below Threshold'}
            </div>
          </div>
        </div>
      </div>

      {/* Tax Threshold Alert */}
      {currentYearEarnings >= 600 && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex flex-col sm:flex-row sm:items-start space-x-0 sm:space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mb-2 sm:mb-0" />
            <div className="flex-1">
              <h3 className="text-lg font-medium text-yellow-800">Tax Reporting Required</h3>
              <p className="text-yellow-700 mt-1">
                Your 2024 earnings have exceeded the $600 threshold. You'll need to complete tax documentation 
                through PandaDoc and will receive a 1099-MISC form for tax filing purposes.
              </p>
              <div className="mt-3">
                <button className="bg-yellow-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-yellow-700 transition-colors">
                  Complete Tax Information via PandaDoc
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* External Vendor Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <Zap className="h-5 w-5 text-blue-600" />
          <h3 className="font-medium text-blue-900">External Tax Processing</h3>
        </div>
        <div className="mt-2 text-sm text-blue-800">
          <p className="mb-2">Tax processing is handled by trusted third-party vendors:</p>
          <ul className="space-y-1">
            <li>• <strong>PandaDoc:</strong> Electronic document signing and verification</li>
            <li>• <strong>Tincheck:</strong> Tax validation and compliance verification</li>
            <li>• <strong>Pulse:</strong> Overall process management and coordination</li>
          </ul>
          <p className="mt-2">
            <strong>Important:</strong> Sensitive information (SSN) is never stored in Samsung databases.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex flex-wrap gap-2 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'overview'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <DollarSign className="h-4 w-4 inline mr-2" />
              Earnings Overview
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'documents'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              Tax Documents
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'history'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Calendar className="h-4 w-4 inline mr-2" />
              Earnings History
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Current Year Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">YTD Earnings</h3>
                      <p className="text-2xl font-bold text-blue-600">${currentYearEarnings}</p>
                      <p className="text-sm text-gray-600">January - July 2024</p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Projected Annual</h3>
                      <p className="text-2xl font-bold text-purple-600">${Math.round(projectedAnnualEarnings)}</p>
                      <p className="text-sm text-gray-600">Based on current pace</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Threshold Progress</h3>
                      <p className="text-2xl font-bold text-green-600">{Math.round((currentYearEarnings / 600) * 100)}%</p>
                      <p className="text-sm text-gray-600">of $600 threshold</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Threshold Progress</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Current: ${currentYearEarnings}</span>
                    <span>Threshold: $600</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className={`h-4 rounded-full transition-all duration-500 ${
                        currentYearEarnings >= 600 ? 'bg-orange-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${Math.min((currentYearEarnings / 600) * 100, 100)}%` }}
                    ></div>
                  </div>
                  {currentYearEarnings < 600 && (
                    <p className="text-sm text-gray-600">
                      ${600 - currentYearEarnings} remaining before tax reporting requirement
                    </p>
                  )}
                </div>
              </div>

              {/* Important Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Important Tax Information</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Earnings include points redeemed for cash rewards, gift cards, and prizes</li>
                  <li>• Once you reach $600 in annual earnings, you'll receive a 1099-MISC form</li>
                  <li>• Tax forms are typically issued in January for the previous tax year</li>
                  <li>• You're responsible for reporting all income on your tax return</li>
                  <li>• Processing is handled securely by PandaDoc and Tincheck vendors</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Tax Document Center</h3>
                <p className="text-sm text-gray-600">
                  Access and download your tax documents. Documents are typically available by January 31st 
                  for the previous tax year. Processing handled by PandaDoc.
                </p>
              </div>

              <div className="space-y-4">
                {taxReports.map((report) => (
                  <div key={report.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(report.status)}
                        <div>
                          <h4 className="font-semibold text-gray-900">{report.year} Tax Year</h4>
                          <p className="text-sm text-gray-600">Form: {report.formType}</p>
                        </div>
                      </div>
                      <span className={`mt-2 sm:mt-0 px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                        {getStatusText(report.status)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-500">Total Earnings</span>
                        <p className="font-semibold text-gray-900">${report.totalEarnings}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Date Created</span>
                        <p className="font-semibold text-gray-900">{report.dateCreated}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">
                          {report.status === 'completed' ? 'Completed' : 'Deadline'}
                        </span>
                        <p className="font-semibold text-gray-900">
                          {report.status === 'completed' ? report.dateCompleted : report.deadline}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                      {report.status === 'completed' && (
                        <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                          <Download className="h-4 w-4" />
                          <span>Download 1099-MISC</span>
                        </button>
                      )}
                      {report.status === 'pending_action' && (
                        <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors">
                          <FileText className="h-4 w-4" />
                          <span>Complete via PandaDoc</span>
                        </button>
                      )}
                      <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                        <Mail className="h-4 w-4" />
                        <span>Email Copy</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">2024 Monthly Earnings</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Month
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Earnings
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Source
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Running Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {earningsHistory.map((month, index) => {
                        const runningTotal = earningsHistory.slice(0, index + 1).reduce((sum, m) => sum + m.earnings, 0);
                        return (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {month.month}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              ${month.earnings}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {month.source}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              ${runningTotal}
                              {runningTotal >= 600 && index === earningsHistory.findIndex(m => 
                                earningsHistory.slice(0, earningsHistory.indexOf(m) + 1).reduce((sum, item) => sum + item.earnings, 0) >= 600
                              ) && (
                                <span className="ml-2 bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                                  Threshold Reached
                                </span>
                              )}
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

export default TaxReporting;