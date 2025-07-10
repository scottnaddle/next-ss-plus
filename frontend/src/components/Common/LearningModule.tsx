import React, { useState, useEffect } from 'react';
import { BookOpen, Play, CheckCircle, Clock, Award, Target, TrendingUp, Star } from 'lucide-react';

interface LearningModuleProps {
  storeSpecific?: boolean;
}

interface LearningModuleData {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  estimatedTime: number;
  points: number;
  difficulty: string;
  views: number;
  completions: number;
  rating: number;
  lastUpdated: string;
  author: string;
}

const LearningModule: React.FC<LearningModuleProps> = ({ storeSpecific = false }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [learningModules, setLearningModules] = useState<LearningModuleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLearningModules = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/learning');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLearningModules(data.learningModules);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLearningModules();
  }, []);

  if (loading) return <div className="text-center py-8">Loading learning modules...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;

  const categories = ['all', ...new Set(learningModules.map(module => module.category))];

  const filteredModules = activeCategory === 'all' 
    ? learningModules 
    : learningModules.filter(module => module.category === activeCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      'all': 'All Modules',
      'product-knowledge': 'Product Knowledge',
      'sales-techniques': 'Sales Techniques',
      'compliance': 'Compliance',
      'carrier-specific': 'Carrier Specific',
      'store-training': 'Store Training'
    };
    return labels[category] || category;
  };

  // Calculate stats based on fetched data
  const completedModulesCount = learningModules.filter(m => m.status === 'published').length; // Assuming published means completed for now
  const totalPointsEarned = learningModules.filter(m => m.status === 'published').reduce((sum, m) => sum + m.points, 0);
  const averageProgress = learningModules.length > 0 
    ? Math.round(learningModules.reduce((sum, m) => sum + (m.completions / m.views) * 100, 0) / learningModules.length) 
    : 0; // Simplified progress calculation

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">
          {storeSpecific ? 'Store Training Hub' : 'Learning Center'}
        </h1>
        <p className="text-blue-100 mt-2">
          {storeSpecific 
            ? 'Best Buy specific training materials and Samsung product knowledge'
            : 'Expand your knowledge and earn points with our comprehensive training modules'
          }
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Completed Modules</div>
            <div className="text-lg font-semibold">
              {completedModulesCount} / {learningModules.length}
            </div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Points Earned</div>
            <div className="text-lg font-semibold">
              {totalPointsEarned}
            </div>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-blue-100">Average Progress</div>
            <div className="text-lg font-semibold">
              {averageProgress}%
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Training Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </div>

      {/* Learning Modules Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredModules.map((module) => (
          <div key={module.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                  {/* Assuming status 'published' means completed for now */}
                  {module.status === 'published' && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">{module.description}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{module.estimatedTime} min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-600">{module.points} pts</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">{module.rating}</span>
                </div>
              </div>
              <span className={`mt-2 sm:mt-0 px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(module.difficulty)}`}>
                {module.difficulty}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                {/* Simplified progress based on completions/views for now */}
                <span className="font-medium">{Math.round((module.completions / module.views) * 100) || 0}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    module.status === 'published' ? 'bg-green-500' : 'bg-blue-600'
                  }`}
                  style={{ width: `${Math.round((module.completions / module.views) * 100) || 0}%` }}
                ></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                <Play className="h-4 w-4 mr-2" />
                {/* Simplified logic for Start/Continue */}
                {module.views > 0 ? 'Continue' : 'Start'} Learning
              </button>
              {module.status === 'published' && (
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                  Review
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Learning Stats */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Learning Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-900">Weekly Progress</h3>
            <p className="text-2xl font-bold text-blue-600">+15%</p>
            <p className="text-sm text-gray-600">vs last week</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 p-3 rounded-lg inline-block mb-2">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-medium text-gray-900">Monthly Goal</h3>
            <p className="text-2xl font-bold text-green-600">78%</p>
            <p className="text-sm text-gray-600">4 modules to go</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-3 rounded-lg inline-block mb-2">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-medium text-gray-900">Learning Streak</h3>
            <p className="text-2xl font-bold text-purple-600">12</p>
            <p className="text-sm text-gray-600">days in a row</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningModule;