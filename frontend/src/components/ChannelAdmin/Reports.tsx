import React, { useState } from 'react';
import { FileText, Download, Calendar, BarChart3, TrendingUp, Users, DollarSign, Filter } from 'lucide-react';

const Reports: React.FC = () => {
  const [selectedReportType, setSelectedReportType] = useState('sales');
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  const reportTypes = [
    { value: 'sales', label: 'Sales Performance', icon: TrendingUp },
    { value: 'participants', label: 'Participant Activity', icon: Users },
    { value: 'rewards', label: 'Rewards Distribution', icon: DollarSign },
    { value: 'programs', label: 'Program Analytics', icon: BarChart3 }
  ];

  const recentReports = [
    {
      id: 1,
      name: 'October Sales Performance Report',
      type: 'Sales Performance',
      period: 'October 2024',
      generatedDate: '2024-11-01',
      size: '2.4 MB',
      format: 'PDF',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Q3 Participant Activity Summary',
      type: 'Participant Activity',
      period: 'Q3 2024',
      generatedDate: '2024-10-15',
      size: '1.8 MB',
      format: 'Excel',
      status: 'completed'
    },
    {
      id: 3,
      name: 'September Rewards Distribution',
      type: 'Rewards Distribution',
      period: 'September 2024',
      generatedDate: '2024-10-01',
      size: '3.1 MB',
      format: 'PDF',
      status: 'completed'
    },
    {
      id: 4,
      name: 'AT&T Radiant Rewards Analysis',
      type: 'Program Analytics',
      period: 'September 2024',
      generatedDate: '2024-09-30',
      size: '1.5 MB',
      format: 'Excel',
      status: 'completed'
    }
  ];

  const scheduledReports = [
    {
      id: 1,
      name: 'Monthly Sales Summary',
      type: 'Sales Performance',
      frequency: 'Monthly',
      nextRun: '2024-12-01',
      recipients: 'channel-admins@samsung.com',
      status: 'active'
    },
    {
      id: 2,
      name: 'Weekly Participant Digest',
      type: 'Participant Activity',
      frequency: 'Weekly',
      nextRun: '2024-11-04',
      recipients: 'team-leads@samsung.com',
      status: 'active'
    },
    {
      id: 3,
      name: 'Quarterly Program Review',
      type: 'Program Analytics',
      frequency: 'Quarterly',
      nextRun: '2025-01-01',
      recipients: 'executives@samsung.com',
      status: 'active'
    }
  ];

  const reportMetrics = [
    {
      title: 'Reports Generated',
      value: '47',
      change: '+12%',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Data Points',
      value: '2.4M',
      change: '+8%',
      icon: BarChart3,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Active Schedules',
      value: '12',
      change: '+3',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Download Rate',
      value: '94%',
      change: '+2%',
      icon: Download,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleGenerateReport = () => {
    console.log('Generating report:', {
      type: selectedReportType,
      period: selectedPeriod,
      format: selectedFormat
    });
    // In real app, this would trigger report generation
    alert('Report generation started. You will receive an email when it\'s ready.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-4 sm:p-6 text-white">
        <h1 className="text-xl sm:text-2xl font-bold">Reports & Analytics</h1>
        <p className="text-green-100 mt-2">
          Generate comprehensive reports and analytics for channel performance
        </p>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">This Month</div>
            <div className="text-lg font-semibold">8 Reports</div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Total Downloads</div>
            <div className="text-lg font-semibold">156</div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Avg Size</div>
            <div className="text-lg font-semibold">2.1 MB</div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Success Rate</div>
            <div className="text-lg font-semibold text-green-300">98%</div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportMetrics.map((metric, index) => {
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

      {/* Report Generator */}
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Generate New Report</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <select
              value={selectedReportType}
              onChange={(e) => setSelectedReportType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {reportTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={handleGenerateReport}
              className="w-full px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
            >
              Generate Report
            </button>
          </div>
        </div>

        {/* Report Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.value}
                onClick={() => setSelectedReportType(type.value)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  selectedReportType === type.value
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`h-6 w-6 ${selectedReportType === type.value ? 'text-green-600' : 'text-gray-600'}`} />
                  <div>
                    <h3 className="font-medium text-gray-900">{type.label}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Reports */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Reports</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentReports.map((report) => (
              <div key={report.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">{report.name}</h3>
                    <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                      <span>{report.type}</span>
                      <span>{report.period}</span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scheduled Reports */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Scheduled Reports</h2>
              <button className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors">
                Add Schedule
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {scheduledReports.map((schedule) => (
              <div key={schedule.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">{schedule.name}</h3>
                    <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                      <span>{schedule.frequency}</span>
                      <span>Next: {schedule.nextRun}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(schedule.status)}`}>
                      {schedule.status}
                    </span>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Calendar className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Report Templates */}
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Report Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Monthly Performance</span>
            <span className="text-xs text-gray-500 mt-1">Sales, participants, rewards</span>
          </button>
          <button className="flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Users className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Participant Summary</span>
            <span className="text-xs text-gray-500 mt-1">Activity, engagement, growth</span>
          </button>
          <button className="flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <BarChart3 className="h-8 w-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Executive Dashboard</span>
            <span className="text-xs text-gray-500 mt-1">High-level KPIs and trends</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;