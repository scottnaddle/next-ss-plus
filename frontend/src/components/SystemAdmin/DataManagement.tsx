import React, { useState } from 'react';
import { Database, HardDrive, Shield, Download, Upload, Trash2, AlertTriangle, CheckCircle } from 'lucide-react';

const DataManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const dataRegions = [
    {
      region: 'US East (Virginia)',
      storage: '2.4 TB',
      users: 8942,
      compliance: 'GDPR, CCPA',
      status: 'healthy',
      lastBackup: '2024-10-28 03:00 UTC'
    },
    {
      region: 'US West (Oregon)',
      storage: '1.8 TB',
      users: 3905,
      compliance: 'CCPA',
      status: 'healthy',
      lastBackup: '2024-10-28 06:00 UTC'
    },
    {
      region: 'EU Backup (Ireland)',
      storage: '450 GB',
      users: 0,
      compliance: 'GDPR',
      status: 'healthy',
      lastBackup: '2024-10-28 01:00 UTC'
    }
  ];

  const dataCategories = [
    {
      category: 'User Profiles',
      records: 12847,
      size: '156 MB',
      retention: '7 years',
      encrypted: true,
      piiMasked: true
    },
    {
      category: 'Learning Data',
      records: 45623,
      size: '892 MB',
      retention: '5 years',
      encrypted: true,
      piiMasked: false
    },
    {
      category: 'Financial Records',
      records: 8934,
      size: '234 MB',
      retention: '7 years',
      encrypted: true,
      piiMasked: true
    },
    {
      category: 'Activity Logs',
      records: 156789,
      size: '1.2 GB',
      retention: '3 years',
      encrypted: true,
      piiMasked: true
    }
  ];

  const migrationTasks = [
    {
      id: 1,
      task: 'Elite App User Migration',
      source: 'Elite Database',
      destination: 'Samsung Plus',
      progress: 95,
      status: 'in_progress',
      records: 12500,
      startDate: '2024-10-01'
    },
    {
      id: 2,
      task: 'Points History Migration',
      source: 'Pulse System',
      destination: 'Samsung Plus',
      progress: 100,
      status: 'completed',
      records: 45000,
      startDate: '2024-09-15'
    },
    {
      id: 3,
      task: 'Learning Records Transfer',
      source: 'Legacy LMS',
      destination: 'Samsung Plus',
      progress: 78,
      status: 'in_progress',
      records: 23000,
      startDate: '2024-10-10'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'critical': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-4 sm:p-6 text-white">
        <h1 className="text-xl sm:text-2xl font-bold">Data Management</h1>
        <p className="text-blue-100 mt-2">
          Monitor data storage, migration, and compliance across all regions
        </p>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Total Storage</div>
            <div className="text-lg font-semibold">4.65 TB</div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Total Records</div>
            <div className="text-lg font-semibold">224K</div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Regions</div>
            <div className="text-lg font-semibold">3</div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Compliance</div>
            <div className="text-lg font-semibold text-green-300">100%</div>
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
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Database className="h-4 w-4 inline mr-2" />
              Storage Overview
            </button>
            <button
              onClick={() => setActiveTab('migration')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'migration'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Upload className="h-4 w-4 inline mr-2" />
              Data Migration
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'compliance'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Shield className="h-4 w-4 inline mr-2" />
              Compliance
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Regional Storage */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {dataRegions.map((region, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">{region.region}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(region.status)}`}>
                        {region.status}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Storage Used:</span>
                        <span className="font-medium">{region.storage}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Active Users:</span>
                        <span className="font-medium">{region.users.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Compliance:</span>
                        <span className="font-medium">{region.compliance}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Last Backup:</span>
                        <span className="font-medium">{region.lastBackup}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data Categories */}
              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Data Categories</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Records
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Size
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Retention
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Security
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dataCategories.map((category, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {category.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {category.records.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {category.size}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {category.retention}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex space-x-2">
                              {category.encrypted && (
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                                  Encrypted
                                </span>
                              )}
                              {category.piiMasked && (
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                                  PII Masked
                                </span>
                              )}
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

          {activeTab === 'migration' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Database className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Elite App Migration</h4>
                    <p className="text-sm text-blue-800 mt-1">
                      Migrating 500+ data tables and millions of records from Elite app to Samsung Plus platform.
                      All point data is migrated by occurrence date to maintain financial integrity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {migrationTasks.map((task) => (
                  <div key={task.id} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">{task.task}</h3>
                        <p className="text-sm text-gray-600">{task.source} → {task.destination}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(task.status)}`}>
                        {task.status.replace('_', ' ')}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Progress:</span>
                        <span className="font-medium">{task.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            task.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Records:</span>
                          <span className="ml-1 font-medium">{task.records.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Started:</span>
                          <span className="ml-1 font-medium">{task.startDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Migration Controls</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                    <Upload className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-sm font-medium text-gray-700">Start Migration</span>
                  </button>
                  <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
                    <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                    <span className="text-sm font-medium text-gray-700">Validate Data</span>
                  </button>
                  <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition-colors">
                    <AlertTriangle className="h-8 w-8 text-yellow-600 mb-2" />
                    <span className="text-sm font-medium text-gray-700">Rollback</span>
                  </button>
                  <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
                    <Download className="h-8 w-8 text-purple-600 mb-2" />
                    <span className="text-sm font-medium text-gray-700">Export Logs</span>
                  </button>
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
                      <h3 className="font-semibold text-gray-900">Data Encryption</h3>
                      <p className="text-2xl font-bold text-green-600">100%</p>
                      <p className="text-sm text-gray-600">All data encrypted at rest</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">PII Masking</h3>
                      <p className="text-2xl font-bold text-blue-600">95%</p>
                      <p className="text-sm text-gray-600">Personal data masked</p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <HardDrive className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Backup Status</h3>
                      <p className="text-2xl font-bold text-purple-600">100%</p>
                      <p className="text-sm text-gray-600">Daily backups complete</p>
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
                      <span className="text-sm text-gray-900">Data stored in US-based AWS S3 servers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-900">No data sharing with overseas Samsung entities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-900">PII anonymized for Korea headquarters</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-900">SSN data stored externally (PandaDoc)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-900">GDPR/CCPA deletion rights implemented</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm text-gray-900">Pulse contract termination data handling pending</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-900">Data Retention Policies</h4>
                    <ul className="text-sm text-yellow-800 mt-1 space-y-1">
                      <li>• User profiles: 7 years retention</li>
                      <li>• Learning data: 5 years retention</li>
                      <li>• Financial records: 7 years retention (tax compliance)</li>
                      <li>• Activity logs: 3 years retention</li>
                    </ul>
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

export default DataManagement;