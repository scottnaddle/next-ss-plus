import React, { useState } from 'react';
import { BookOpen, Plus, Edit2, Trash2, Eye, Users, Clock, Star, Filter, Search } from 'lucide-react';

const ContentManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('modules');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const learningModules = [
    {
      id: 1,
      title: 'Galaxy S24 Series Deep Dive',
      description: 'Complete product knowledge for Galaxy S24, S24+, and S24 Ultra',
      category: 'product-knowledge',
      status: 'published',
      estimatedTime: 60,
      points: 200,
      difficulty: 'advanced',
      views: 2847,
      completions: 2156,
      rating: 4.9,
      lastUpdated: '2024-10-15',
      author: 'Samsung Training Team'
    },
    {
      id: 2,
      title: 'Advanced Sales Techniques',
      description: 'Master the art of consultative selling and objection handling',
      category: 'sales-techniques',
      status: 'published',
      estimatedTime: 90,
      points: 250,
      difficulty: 'advanced',
      views: 1923,
      completions: 1456,
      rating: 4.7,
      lastUpdated: '2024-10-10',
      author: 'Sales Excellence Team'
    },
    {
      id: 3,
      title: 'Privacy & Compliance Essentials',
      description: 'Understanding GDPR, CCPA, and Samsung privacy policies',
      category: 'compliance',
      status: 'draft',
      estimatedTime: 40,
      points: 150,
      difficulty: 'intermediate',
      views: 0,
      completions: 0,
      rating: 0,
      lastUpdated: '2024-10-28',
      author: 'Legal Team'
    },
    {
      id: 4,
      title: 'Galaxy Watch 7 Features',
      description: 'New health features and technical specifications',
      category: 'product-knowledge',
      status: 'review',
      estimatedTime: 45,
      points: 175,
      difficulty: 'intermediate',
      views: 156,
      completions: 89,
      rating: 4.5,
      lastUpdated: '2024-10-25',
      author: 'Product Team'
    },
    {
      id: 5,
      title: 'Best Buy Store Protocols',
      description: 'Store-specific guidelines for Samsung displays and customer experience',
      category: 'store-training',
      status: 'published',
      estimatedTime: 30,
      points: 100,
      difficulty: 'beginner',
      views: 892,
      completions: 745,
      rating: 4.6,
      lastUpdated: '2024-10-20',
      author: 'Channel Team'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'product-knowledge', label: 'Product Knowledge' },
    { value: 'sales-techniques', label: 'Sales Techniques' },
    { value: 'compliance', label: 'Compliance' },
    { value: 'store-training', label: 'Store Training' },
    { value: 'carrier-specific', label: 'Carrier Specific' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'review': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredModules = learningModules.filter(module => {
    const matchesSearch = 
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === 'all' || module.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Content Management</h1>
        <p className="text-green-100 mt-2">
          Create, manage, and publish learning content for the platform
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Total Modules</div>
            <div className="text-lg font-semibold">{learningModules.length}</div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Published</div>
            <div className="text-lg font-semibold">
              {learningModules.filter(m => m.status === 'published').length}
            </div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Total Views</div>
            <div className="text-lg font-semibold">
              {learningModules.reduce((sum, m) => sum + m.views, 0).toLocaleString()}
            </div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Avg Rating</div>
            <div className="text-lg font-semibold">
              {(learningModules.filter(m => m.rating > 0).reduce((sum, m) => sum + m.rating, 0) / 
                learningModules.filter(m => m.rating > 0).length).toFixed(1)}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('modules')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'modules'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <BookOpen className="h-4 w-4 inline mr-2" />
              Learning Modules
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'analytics'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Star className="h-4 w-4 inline mr-2" />
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'settings'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Filter className="h-4 w-4 inline mr-2" />
              Settings
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'modules' && (
            <div className="space-y-6">
              {/* Search and Filters */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search modules by title, description, or author..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>{category.label}</option>
                    ))}
                  </select>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors">
                  <Plus className="h-4 w-4" />
                  <span>Create Module</span>
                </button>
              </div>

              {/* Modules Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredModules.map((module) => (
                  <div key={module.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(module.status)}`}>
                            {module.status}
                          </span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(module.difficulty)}`}>
                            {module.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <span className="ml-1 font-medium">{module.estimatedTime} min</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Points:</span>
                        <span className="ml-1 font-medium">{module.points}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Views:</span>
                        <span className="ml-1 font-medium">{module.views.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Completions:</span>
                        <span className="ml-1 font-medium">{module.completions.toLocaleString()}</span>
                      </div>
                    </div>

                    {module.rating > 0 && (
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(module.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">{module.rating}</span>
                      </div>
                    )}

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>By {module.author}</span>
                        <span>Updated {module.lastUpdated}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex items-center space-x-1 px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors">
                          <Eye className="h-3 w-3" />
                          <span>Preview</span>
                        </button>
                        <button className="flex items-center space-x-1 px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                          <Edit2 className="h-3 w-3" />
                          <span>Edit</span>
                        </button>
                        <button className="flex items-center space-x-1 px-3 py-1 text-xs bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors">
                          <Trash2 className="h-3 w-3" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Eye className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Total Views</h3>
                      <p className="text-2xl font-bold text-blue-600">
                        {learningModules.reduce((sum, m) => sum + m.views, 0).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600">All time</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Completions</h3>
                      <p className="text-2xl font-bold text-green-600">
                        {learningModules.reduce((sum, m) => sum + m.completions, 0).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600">All time</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Star className="h-8 w-8 text-yellow-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Avg Rating</h3>
                      <p className="text-2xl font-bold text-yellow-600">
                        {(learningModules.filter(m => m.rating > 0).reduce((sum, m) => sum + m.rating, 0) / 
                          learningModules.filter(m => m.rating > 0).length).toFixed(1)}
                      </p>
                      <p className="text-sm text-gray-600">Rated modules</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Performing Modules */}
              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Top Performing Modules</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Module
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Views
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Completions
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Completion Rate
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rating
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {learningModules
                        .filter(m => m.views > 0)
                        .sort((a, b) => b.views - a.views)
                        .map((module) => {
                          const completionRate = module.views > 0 ? (module.completions / module.views) * 100 : 0;
                          return (
                            <tr key={module.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">{module.title}</div>
                                <div className="text-sm text-gray-500">{module.category}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {module.views.toLocaleString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {module.completions.toLocaleString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                    <div 
                                      className="bg-green-600 h-2 rounded-full"
                                      style={{ width: `${Math.min(completionRate, 100)}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm text-gray-900">{Math.round(completionRate)}%</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {module.rating > 0 ? (
                                  <div className="flex items-center">
                                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                    <span className="text-sm text-gray-900">{module.rating}</span>
                                  </div>
                                ) : (
                                  <span className="text-sm text-gray-500">No ratings</span>
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

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium text-blue-900 mb-2">Content Management Settings</h3>
                <p className="text-sm text-blue-800">
                  Configure global settings for learning content, review workflows, and publishing rules.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Review Workflow</h4>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-sm text-gray-700">Require review before publishing</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-sm text-gray-700">Auto-assign reviewers</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-700">Allow self-publishing for admins</span>
                    </label>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Default Settings</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Default Points</label>
                      <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="100" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Default Difficulty</label>
                      <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
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

export default ContentManagement;