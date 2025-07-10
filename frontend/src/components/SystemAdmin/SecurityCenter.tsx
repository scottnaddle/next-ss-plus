import React, { useState } from 'react';
import { Shield, AlertTriangle, Lock, Eye, Key, Users, Activity, FileText } from 'lucide-react';

const SecurityCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const securityAlerts = [
    {
      id: 1,
      type: 'Failed Login Attempts',
      severity: 'medium',
      count: 127,
      time: '2 hours ago',
      description: 'Multiple failed login attempts from IP 192.168.1.100',
      status: 'investigating'
    },
    {
      id: 2,
      type: 'Unusual API Usage',
      severity: 'low',
      count: 3,
      time: '4 hours ago',
      description: 'API calls from new geographic location',
      status: 'resolved'
    },
    {
      id: 3,
      type: 'Permission Escalation',
      severity: 'high',
      count: 1,
      time: '1 day ago',
      description: 'User attempted to access admin functions',
      status: 'blocked'
    }
  ];

  const accessLogs = [
    {
      id: 1,
      user: 'admin@samsung.com',
      action: 'User Management Access',
      resource: '/admin/users',
      timestamp: '2024-10-28 14:23:15',
      ip: '10.0.1.45',
      status: 'success'
    },
    {
      id: 2,
      user: 'fsm@samsung.com',
      action: 'Store Data Export',
      resource: '/api/stores/export',
      timestamp: '2024-10-28 14:20:34',
      ip: '10.0.1.67',
      status: 'success'
    },
    {
      id: 3,
      user: 'unknown@external.com',
      action: 'Admin Panel Access',
      resource: '/admin/dashboard',
      timestamp: '2024-10-28 14:18:22',
      ip: '192.168.1.100',
      status: 'blocked'
    }
  ];

  const securityMetrics = [
    {
      title: 'Security Score',
      value: '94%',
      change: '+2%',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Active Threats',
      value: '3',
      change: '-2',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Failed Logins',
      value: '127',
      change: '+15%',
      icon: Lock,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Active Sessions',
      value: '2,847',
      change: '+5%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const complianceChecks = [
    { check: 'Data Encryption at Rest', status: 'passed', lastCheck: '2024-10-28' },
    { check: 'Data Encryption in Transit', status: 'passed', lastCheck: '2024-10-28' },
    { check: 'Access Control Policies', status: 'passed', lastCheck: '2024-10-27' },
    { check: 'Audit Logging', status: 'passed', lastCheck: '2024-10-28' },
    { check: 'Password Policies', status: 'warning', lastCheck: '2024-10-26' },
    { check: 'Session Management', status: 'passed', lastCheck: '2024-10-28' }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'blocked': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'investigating': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'passed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-4 sm:p-6 text-white">
        <h1 className="text-xl sm:text-2xl font-bold">Security Center</h1>
        <p className="text-red-100 mt-2">
          Monitor security threats, access controls, and compliance status
        </p>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-red-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-red-100">Threat Level</div>
            <div className="text-lg font-semibold text-yellow-300">Medium</div>
          </div>
          <div className="bg-red-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-red-100">Last Incident</div>
            <div className="text-lg font-semibold">2 hours ago</div>
          </div>
          <div className="bg-red-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-red-100">Compliance</div>
            <div className="text-lg font-semibold text-green-300">94%</div>
          </div>
          <div className="bg-red-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-red-100">Uptime</div>
            <div className="text-lg font-semibold">99.8%</div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityMetrics.map((metric, index) => {
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
                  <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
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
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Shield className="h-4 w-4 inline mr-2" />
              Security Overview
            </button>
            <button
              onClick={() => setActiveTab('access-logs')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'access-logs'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Eye className="h-4 w-4 inline mr-2" />
              Access Logs
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'compliance'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              Compliance
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Active Security Alerts</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {securityAlerts.map((alert) => (
                    <div key={alert.id} className={`p-4 border-l-4 ${getSeverityColor(alert.severity)}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{alert.type}</h4>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(alert.severity)}`}>
                            {alert.severity}
                          </span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(alert.status)}`}>
                            {alert.status}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{alert.count} incidents</span>
                        <span>{alert.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Policies</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Password Complexity</span>
                      <span className="text-sm font-medium text-green-600">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Two-Factor Authentication</span>
                      <span className="text-sm font-medium text-green-600">Required</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Session Timeout</span>
                      <span className="text-sm font-medium text-gray-900">60 minutes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Failed Login Lockout</span>
                      <span className="text-sm font-medium text-gray-900">5 attempts</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Encryption Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Data at Rest</span>
                      <span className="text-sm font-medium text-green-600">AES-256</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Data in Transit</span>
                      <span className="text-sm font-medium text-green-600">TLS 1.3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Database</span>
                      <span className="text-sm font-medium text-green-600">Encrypted</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Backups</span>
                      <span className="text-sm font-medium text-green-600">Encrypted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'access-logs' && (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Access Logs</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Resource
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Timestamp
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          IP Address
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {accessLogs.map((log) => (
                        <tr key={log.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {log.user}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {log.action}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                            {log.resource}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {log.timestamp}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                            {log.ip}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(log.status)}`}>
                              {log.status}
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

          {activeTab === 'compliance' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">SOC 2 Compliance</h3>
                      <p className="text-2xl font-bold text-green-600">Certified</p>
                      <p className="text-sm text-gray-600">Valid until 2025</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Lock className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">GDPR Compliance</h3>
                      <p className="text-2xl font-bold text-blue-600">Active</p>
                      <p className="text-sm text-gray-600">EU data protection</p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Key className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">CCPA Compliance</h3>
                      <p className="text-2xl font-bold text-purple-600">Active</p>
                      <p className="text-sm text-gray-600">California privacy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Security Compliance Checks</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {complianceChecks.map((check, index) => (
                    <div key={index} className="px-6 py-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{check.check}</h4>
                        <p className="text-sm text-gray-500">Last checked: {check.lastCheck}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(check.status)}`}>
                        {check.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-900">Compliance Recommendations</h4>
                    <ul className="text-sm text-yellow-800 mt-1 space-y-1">
                      <li>• Update password policy to require special characters</li>
                      <li>• Implement additional audit logging for admin actions</li>
                      <li>• Schedule quarterly security assessments</li>
                      <li>• Review and update data retention policies</li>
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

export default SecurityCenter;