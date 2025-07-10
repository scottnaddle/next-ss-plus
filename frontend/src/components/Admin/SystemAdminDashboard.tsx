import React from 'react';
import { Server, Database, Shield, Users, AlertTriangle, CheckCircle, Clock, Settings } from 'lucide-react';

const SystemAdminDashboard: React.FC = () => {
  const systemStats = [
    {
      title: 'System Uptime',
      value: '99.8%',
      status: 'healthy',
      icon: Server,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Database Performance',
      value: '45ms',
      status: 'healthy',
      icon: Database,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Security Alerts',
      value: '2',
      status: 'warning',
      icon: Shield,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Active Sessions',
      value: '2,847',
      status: 'healthy',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const securityAlerts = [
    { id: 1, type: 'Failed Login Attempts', severity: 'medium', count: 127, time: '2 hours ago' },
    { id: 2, type: 'Unusual API Usage', severity: 'low', count: 3, time: '4 hours ago' },
    { id: 3, type: 'Permission Escalation', severity: 'high', count: 1, time: '1 day ago' }
  ];

  const vendorStatus = [
    { name: 'Pulse Systems', status: 'operational', uptime: '99.9%', lastCheck: '5 mins ago' },
    { name: 'PandaDoc', status: 'operational', uptime: '98.7%', lastCheck: '3 mins ago' },
    { name: 'Tincheck', status: 'degraded', uptime: '95.2%', lastCheck: '1 min ago' },
    { name: 'Doordash API', status: 'operational', uptime: '99.1%', lastCheck: '7 mins ago' },
    { name: 'AWS S3', status: 'operational', uptime: '100%', lastCheck: '2 mins ago' }
  ];

  const systemLogs = [
    { id: 1, level: 'info', message: 'User authentication successful for admin@samsung.com', time: '14:23:15' },
    { id: 2, level: 'warning', message: 'High memory usage detected on server-02', time: '14:20:34' },
    { id: 3, level: 'error', message: 'Failed to connect to Tincheck API - retrying', time: '14:18:22' },
    { id: 4, level: 'info', message: 'Database backup completed successfully', time: '14:15:08' },
    { id: 5, level: 'info', message: 'Cache refresh completed for learning modules', time: '14:12:45' }
  ];

  const dataManagement = [
    { region: 'US East', storage: '2.4TB', users: 8942, compliance: 'GDPR, CCPA' },
    { region: 'US West', storage: '1.8TB', users: 3905, compliance: 'CCPA' },
    { region: 'EU Backup', storage: '450GB', users: 0, compliance: 'GDPR' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-100 text-green-800';
      case 'degraded': return 'bg-yellow-100 text-yellow-800';
      case 'down': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLogLevelColor = (level: string) => {
    switch (level) {
      case 'error': return 'text-red-600';
      case 'warning': return 'text-yellow-600';
      case 'info': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">System Administration</h1>
        <p className="text-slate-300 mt-2">
          Infrastructure monitoring and system management
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-slate-300">Current Load</div>
            <div className="text-lg font-semibold text-green-400">67% Normal</div>
          </div>
          <div className="bg-slate-800 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-slate-300">Data Transfer</div>
            <div className="text-lg font-semibold">1.2GB/hour</div>
          </div>
          <div className="bg-slate-800 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-slate-300">Backup Status</div>
            <div className="text-lg font-semibold text-green-400">Healthy</div>
          </div>
        </div>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {stat.status === 'healthy' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security Alerts */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Security Monitoring</h2>
          <div className="space-y-3">
            {securityAlerts.map((alert) => (
              <div key={alert.id} className={`border rounded-lg p-3 ${getSeverityColor(alert.severity)}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-sm font-medium">{alert.type}</h3>
                    <p className="text-xs opacity-75">{alert.count} incidents - {alert.time}</p>
                  </div>
                  <span className="mt-2 sm:mt-0 text-xs font-medium uppercase">{alert.severity}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors">
            View All Security Logs
          </button>
        </div>

        {/* Vendor Status */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Vendor System Status</h2>
          <div className="space-y-3">
            {vendorStatus.map((vendor, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 border rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{vendor.name}</h3>
                  <p className="text-xs text-gray-600">Uptime: {vendor.uptime} | {vendor.lastCheck}</p>
                </div>
                <span className={`mt-2 sm:mt-0 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(vendor.status)}`}>
                  {vendor.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Data Management Overview</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Storage Used
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Active Users
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Compliance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dataManagement.map((region, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {region.region}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {region.storage}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {region.users.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {region.compliance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* System Logs */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent System Logs</h2>
        <div className="space-y-2">
          {systemLogs.map((log) => (
            <div key={log.id} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded">
              <div className="flex-shrink-0">
                <Clock className={`h-4 w-4 mt-0.5 ${getLogLevelColor(log.level)}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className={`text-xs font-medium uppercase ${getLogLevelColor(log.level)}`}>
                    {log.level}
                  </span>
                  <span className="text-xs text-gray-500">{log.time}</span>
                </div>
                <p className="text-sm text-gray-900 mt-1">{log.message}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full px-4 py-2 bg-slate-600 text-white text-sm font-medium rounded-md hover:bg-slate-700 transition-colors">
          View Full System Logs
        </button>
      </div>

      {/* System Management Actions */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">System Management</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-slate-500 hover:bg-slate-50 transition-colors">
            <Settings className="h-8 w-8 text-slate-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">System Config</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Database className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Data Migration</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-red-500 hover:bg-red-50 transition-colors">
            <Shield className="h-8 w-8 text-red-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Security Center</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <Server className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Server Health</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemAdminDashboard;