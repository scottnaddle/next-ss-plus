import React, { useState } from 'react';
import { FileText, Upload, CheckCircle, Clock, AlertTriangle, Calendar, Users, Image } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const PowerUp: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('request');
  const [requestType, setRequestType] = useState('');
  const [storeNumber, setStoreNumber] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const requestTypes = [
    { id: 'flyer', name: 'Store Flyer', description: 'Promotional flyer for in-store display', estimatedTime: '2-3 days' },
    { id: 'poster', name: 'Digital Poster', description: 'Digital signage for in-store displays', estimatedTime: '3-4 days' },
    { id: 'email', name: 'Email Template', description: 'Custom email template for promotions', estimatedTime: '1-2 days' },
    { id: 'social', name: 'Social Media Graphics', description: 'Graphics for social media campaigns', estimatedTime: '2 days' }
  ];

  const recentRequests = [
    {
      id: 1,
      type: 'Store Flyer',
      store: 'Verizon Manhattan West',
      requestDate: '2024-10-25',
      deadline: '2024-10-28',
      status: 'approved',
      approver: 'Channel Manager',
      currentStage: 'Design'
    },
    {
      id: 2,
      type: 'Digital Poster',
      store: 'AT&T Brooklyn Heights',
      requestDate: '2024-10-23',
      deadline: '2024-10-27',
      status: 'pending',
      approver: 'Pending',
      currentStage: 'Channel Review'
    },
    {
      id: 3,
      type: 'Email Template',
      store: 'T-Mobile Queens Center',
      requestDate: '2024-10-20',
      deadline: '2024-10-22',
      status: 'completed',
      approver: 'Channel Manager',
      currentStage: 'Completed'
    }
  ];

  const completedAssets = [
    {
      id: 1,
      name: 'Galaxy S24 Launch Flyer',
      type: 'Store Flyer',
      createdDate: '2024-10-15',
      downloadCount: 45,
      thumbnail: 'https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      name: 'Holiday Promotion Bundle',
      type: 'Digital Poster',
      createdDate: '2024-10-10',
      downloadCount: 32,
      thumbnail: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      name: 'Black Friday Special',
      type: 'Email Template',
      createdDate: '2024-10-05',
      downloadCount: 67,
      thumbnail: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const handleSubmitRequest = () => {
    if (!requestType || !storeNumber || !description || !deadline) {
      alert('Please fill in all required fields');
      return;
    }

    // In a real app, this would submit to an API
    console.log('Submitting request:', {
      type: requestType,
      storeNumber,
      description,
      deadline
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Reset form
    setRequestType('');
    setStoreNumber('');
    setDescription('');
    setDeadline('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'rejected': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'completed': return <CheckCircle className="h-4 w-4 text-blue-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">PowerUp Marketing Assets</h1>
        <p className="text-pink-100 mt-2">
          Request and manage marketing materials for your stores and promotions
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-pink-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-pink-100">Active Requests</div>
            <div className="text-lg font-semibold">2</div>
          </div>
          <div className="bg-pink-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-pink-100">Completed Assets</div>
            <div className="text-lg font-semibold">24</div>
          </div>
          <div className="bg-pink-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-pink-100">Avg. Completion Time</div>
            <div className="text-lg font-semibold">2.5 days</div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-800 font-medium">Your request has been submitted successfully!</span>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('request')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'request'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              New Request
            </button>
            <button
              onClick={() => setActiveTab('status')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'status'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Clock className="h-4 w-4 inline mr-2" />
              Request Status
            </button>
            <button
              onClick={() => setActiveTab('assets')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'assets'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Image className="h-4 w-4 inline mr-2" />
              My Assets
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'request' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Request Process</h4>
                    <p className="text-sm text-blue-800 mt-1">
                      All marketing asset requests go through a multi-step approval process:
                    </p>
                    <ol className="text-sm text-blue-800 mt-2 space-y-1">
                      <li>1. Channel Manager approval</li>
                      <li>2. Brand team review for guideline compliance</li>
                      <li>3. Legal team review for compliance</li>
                      <li>4. Design and production</li>
                      <li>5. Final delivery to requested platform</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">New Asset Request</h3>
                
                {/* Asset Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Asset Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {requestTypes.map((type) => (
                      <div
                        key={type.id}
                        onClick={() => setRequestType(type.id)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                          requestType === type.id
                            ? 'border-pink-500 bg-pink-50'
                            : 'border-gray-200 hover:border-pink-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${requestType === type.id ? 'bg-pink-100' : 'bg-gray-100'}`}>
                            <FileText className={`h-5 w-5 ${requestType === type.id ? 'text-pink-600' : 'text-gray-600'}`} />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{type.name}</h3>
                            <p className="text-sm text-gray-600">{type.description}</p>
                            <p className="text-xs text-gray-500 mt-1">Est. time: {type.estimatedTime}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Store Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Store Number/Location</label>
                  <input
                    type="text"
                    value={storeNumber}
                    onChange={(e) => setStoreNumber(e.target.value)}
                    placeholder="Enter store number or location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    For partner stores like Lowe's or Home Depot, you only need to enter the store number
                  </p>
                </div>

                {/* Request Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Request Details</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what you need, including specific products, promotions, or messaging"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                {/* Deadline */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Needed By</label>
                  <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmitRequest}
                  className="w-full px-4 py-2 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </div>
          )}

          {activeTab === 'status' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Requests</h3>
              <div className="space-y-4">
                {recentRequests.map((request) => (
                  <div key={request.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-gray-900">{request.type}</h3>
                        <p className="text-sm text-gray-600">{request.store}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(request.status)}
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                      <div>
                        <span className="text-gray-500">Requested:</span>
                        <span className="ml-2 font-medium">{request.requestDate}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Deadline:</span>
                        <span className="ml-2 font-medium">{request.deadline}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Approver:</span>
                        <span className="ml-2 font-medium">{request.approver}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Current Stage:</span>
                        <span className="ml-2 font-medium">{request.currentStage}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-pink-600 text-white text-sm font-medium rounded-md hover:bg-pink-700 transition-colors">
                        View Details
                      </button>
                      {request.status === 'pending' && (
                        <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'assets' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Completed Assets</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedAssets.map((asset) => (
                  <div key={asset.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <img 
                      src={asset.thumbnail} 
                      alt={asset.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{asset.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{asset.type}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>Created: {asset.createdDate}</span>
                        <span>Downloads: {asset.downloadCount}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-pink-600 text-white text-sm font-medium rounded-md hover:bg-pink-700 transition-colors">
                          <Upload className="h-4 w-4" />
                          <span>Download</span>
                        </button>
                        <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Approval Process */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Approval Process</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          <div className="space-y-6">
            <div className="relative flex items-start">
              <div className="absolute left-0 rounded-full bg-pink-600 p-2">
                <Users className="h-4 w-4 text-white" />
              </div>
              <div className="ml-12">
                <h3 className="font-medium text-gray-900">Channel Manager Approval</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Your request is first reviewed by your channel manager to ensure alignment with channel strategy
                </p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-0 rounded-full bg-gray-200 p-2">
                <Image className="h-4 w-4 text-gray-600" />
              </div>
              <div className="ml-12">
                <h3 className="font-medium text-gray-900">Brand Team Review</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Brand team ensures all assets follow Samsung brand guidelines and logo usage rules
                </p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-0 rounded-full bg-gray-200 p-2">
                <FileText className="h-4 w-4 text-gray-600" />
              </div>
              <div className="ml-12">
                <h3 className="font-medium text-gray-900">Legal Review</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Legal team reviews all in-store printed materials for compliance with regulations
                </p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-0 rounded-full bg-gray-200 p-2">
                <Image className="h-4 w-4 text-gray-600" />
              </div>
              <div className="ml-12">
                <h3 className="font-medium text-gray-900">Design & Production</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Designers create the requested assets according to specifications
                </p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-0 rounded-full bg-gray-200 p-2">
                <CheckCircle className="h-4 w-4 text-gray-600" />
              </div>
              <div className="ml-12">
                <h3 className="font-medium text-gray-900">Delivery & Distribution</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Completed assets are uploaded to the requested platform (Elite app, Knox, etc.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerUp;