import React, { useState } from 'react';
import { Shield, Download, Trash2, Eye, FileText, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const PrivacyRightsPortal: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const privacyRequests = [
    { id: 1, type: 'Data Download', status: 'completed', date: '2024-10-20', description: 'Personal data export' },
    { id: 2, type: 'Data Correction', status: 'pending', date: '2024-10-18', description: 'Store location update' },
    { id: 3, type: 'Access Request', status: 'completed', date: '2024-10-15', description: 'Learning history access' }
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      description: 'Name, email, affiliation code, store location',
      collected: true,
      shared: false,
      retention: '7 years'
    },
    {
      category: 'Learning Data',
      description: 'Course progress, quiz results, certifications',
      collected: true,
      shared: false,
      retention: '5 years'
    },
    {
      category: 'Activity Data',
      description: 'App usage, interaction patterns, preferences',
      collected: true,
      shared: true,
      retention: '3 years'
    },
    {
      category: 'Location Data (FSM)',
      description: 'Store visit locations and timestamps',
      collected: user?.role === 'FSM',
      shared: false,
      retention: '2 years'
    },
    {
      category: 'Financial Data',
      description: 'Points, rewards, tax information ($600+ earners)',
      collected: true,
      shared: true,
      retention: '7 years'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'processing': return <Clock className="h-4 w-4 text-blue-500" />;
      default: return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Privacy Rights Portal</h1>
        <p className="text-gray-300 mt-2">
          Manage your privacy rights and control how your data is used
        </p>
        <div className="mt-4 bg-gray-700 bg-opacity-50 rounded-lg p-3">
          <div className="text-sm text-gray-300">Your Rights</div>
          <div className="text-lg font-semibold">Access • Correct • Delete • Download</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
          <Download className="h-8 w-8 text-blue-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">Download My Data</span>
        </button>
        <button className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
          <Eye className="h-8 w-8 text-green-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">View Data Usage</span>
        </button>
        <button className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
          <FileText className="h-8 w-8 text-purple-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">Request Correction</span>
        </button>
        <button 
          onClick={() => setShowDeleteConfirm(true)}
          className="flex flex-col items-center p-4 bg-white border border-red-200 rounded-lg hover:shadow-md transition-shadow text-red-600"
        >
          <Trash2 className="h-8 w-8 mb-2" />
          <span className="text-sm font-medium">Delete Account</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'overview'
                  ? 'border-gray-500 text-gray-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Shield className="h-4 w-4 inline mr-2" />
              Data Overview
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'requests'
                  ? 'border-gray-500 text-gray-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              My Requests
            </button>
            <button
              onClick={() => setActiveTab('policies')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'policies'
                  ? 'border-gray-500 text-gray-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              Policies
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium text-blue-900 mb-2">Your Privacy Rights</h3>
                <p className="text-sm text-blue-800 mb-2">
                  Under California Consumer Privacy Act (CCPA) and other applicable laws, you have the right to:
                </p>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Know what personal information is collected about you</li>
                  <li>• Access and download your personal information</li>
                  <li>• Correct inaccurate personal information</li>
                  <li>• Delete your personal information</li>
                  <li>• Opt out of the sale of personal information</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Data We Collect</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {dataCategories.map((category, index) => (
                    <div key={index} className="px-6 py-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{category.category}</h4>
                        <div className="flex space-x-2">
                          {category.collected && (
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                              Collected
                            </span>
                          )}
                          {category.shared && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                              Shared
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                      <div className="text-xs text-gray-500">
                        Retention Period: {category.retention}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'requests' && (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Privacy Requests History</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {privacyRequests.map((request) => (
                    <div key={request.id} className="px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(request.status)}
                        <div>
                          <div className="font-medium text-gray-900">{request.type}</div>
                          <div className="text-sm text-gray-600">{request.description}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">{request.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Request Processing Times</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Data Download: 5-10 business days</div>
                  <div>• Data Correction: 3-5 business days</div>
                  <div>• Account Deletion: 10-15 business days</div>
                  <div>• Access Requests: 1-3 business days</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policies' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Policy</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our comprehensive privacy policy covers how we collect, use, and protect your personal information.
                  </p>
                  <a 
                    href="https://www.samsung.com/us/privacy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    View Samsung Privacy Policy
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Terms & Conditions</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    App-specific terms covering learning modules, rewards program, and Samsung Plus features.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700">
                    View Samsung Plus Terms & Conditions
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Sharing</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    We work with trusted partners to provide services. Your data may be shared with:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• <strong>Pulse Systems:</strong> Platform management and rewards processing</li>
                    <li>• <strong>PandaDoc:</strong> Tax document processing ($600+ earners only)</li>
                    <li>• <strong>Tincheck:</strong> Tax verification services</li>
                    <li>• <strong>AWS:</strong> Secure data storage and processing</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Delete Account Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">Delete Account</h3>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                Are you sure you want to delete your account? This action will:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Permanently delete your personal information</li>
                <li>• Remove access to learning modules and rewards</li>
                <li>• Forfeit any unused points</li>
                <li>• Retain anonymized data for legal compliance</li>
              </ul>
              {user?.totalEarnings && user.totalEarnings >= 600 && (
                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>Tax Notice:</strong> Your tax documents will be retained for 7 years as required by law.
                  </p>
                </div>
              )}
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyRightsPortal;