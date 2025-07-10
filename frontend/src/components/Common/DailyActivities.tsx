import React, { useState } from 'react';
import { Calendar, Play, CheckCircle, Clock, Award, Flame, Target, Star } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const DailyActivities: React.FC = () => {
  const { user } = useAuth();
  const [completedActivities, setCompletedActivities] = useState<number[]>([1, 3]);

  const todaysActivities = [
    {
      id: 1,
      title: 'Galaxy S24 Quick Tip',
      type: 'video',
      duration: '2 min',
      points: 25,
      description: 'Learn about the new AI photo editing features',
      thumbnail: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300',
      completed: true
    },
    {
      id: 2,
      title: 'Customer Objection Quiz',
      type: 'quiz',
      duration: '3 min',
      points: 50,
      description: 'Test your knowledge on handling price objections',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
      completed: false
    },
    {
      id: 3,
      title: 'Product Knowledge Flash Cards',
      type: 'interactive',
      duration: '5 min',
      points: 35,
      description: 'Review key specs for Galaxy Watch 7',
      thumbnail: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=300',
      completed: true
    },
    {
      id: 4,
      title: 'Sales Technique of the Day',
      type: 'article',
      duration: '4 min',
      points: 30,
      description: 'Building rapport with tech-savvy customers',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
      completed: false
    }
  ];

  const streakData = {
    currentStreak: 7,
    longestStreak: 23,
    weeklyGoal: 5,
    weeklyProgress: 4
  };

  const handleCompleteActivity = (activityId: number) => {
    if (!completedActivities.includes(activityId)) {
      setCompletedActivities([...completedActivities, activityId]);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="h-4 w-4" />;
      case 'quiz': return <Target className="h-4 w-4" />;
      case 'interactive': return <Star className="h-4 w-4" />;
      case 'article': return <Calendar className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-800';
      case 'quiz': return 'bg-blue-100 text-blue-800';
      case 'interactive': return 'bg-purple-100 text-purple-800';
      case 'article': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const completedCount = completedActivities.length;
  const totalActivities = todaysActivities.length;
  const completionPercentage = (completedCount / totalActivities) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Daily Activities</h1>
        <p className="text-green-100 mt-2">
          Complete daily micro-learning activities to build your skills and earn points
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Today's Progress</div>
            <div className="text-lg font-semibold">{completedCount}/{totalActivities}</div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Current Streak</div>
            <div className="text-lg font-semibold flex items-center">
              <Flame className="h-5 w-5 text-orange-300 mr-1" />
              {streakData.currentStreak} days
            </div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Weekly Goal</div>
            <div className="text-lg font-semibold">{streakData.weeklyProgress}/{streakData.weeklyGoal}</div>
          </div>
          <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-green-100">Points Today</div>
            <div className="text-lg font-semibold">
              {todaysActivities
                .filter(activity => completedActivities.includes(activity.id))
                .reduce((sum, activity) => sum + activity.points, 0)}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Today's Progress</h2>
          <div className="text-sm text-gray-600">{Math.round(completionPercentage)}% Complete</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div 
            className="bg-green-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-2">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-900">Daily Goal</h3>
            <p className="text-sm text-gray-600">Complete all 4 activities</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 p-3 rounded-lg inline-block mb-2">
              <Flame className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-medium text-gray-900">Streak Bonus</h3>
            <p className="text-sm text-gray-600">+10 points for 7+ day streak</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-3 rounded-lg inline-block mb-2">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-medium text-gray-900">Weekly Bonus</h3>
            <p className="text-sm text-gray-600">+50 points for completing 5 days</p>
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {todaysActivities.map((activity) => {
          const isCompleted = completedActivities.includes(activity.id);
          return (
            <div
              key={activity.id}
              className={`bg-white rounded-lg border-2 transition-all duration-200 ${
                isCompleted 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 hover:border-green-300 hover:shadow-md'
              }`}
            >
              <div className="relative">
                <img 
                  src={activity.thumbnail} 
                  alt={activity.title}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                {isCompleted && (
                  <div className="absolute top-2 right-2 bg-green-600 text-white p-1 rounded-full">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                )}
                <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(activity.type)}`}>
                  <div className="flex items-center space-x-1">
                    {getTypeIcon(activity.type)}
                    <span className="capitalize">{activity.type}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {activity.duration}
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      {activity.points} pts
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCompleteActivity(activity.id)}
                  disabled={isCompleted}
                  className={`w-full px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isCompleted
                      ? 'bg-green-100 text-green-800 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {isCompleted ? (
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Completed</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Play className="h-4 w-4" />
                      <span>Start Activity</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Streak Information */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Learning Streak</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Flame className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{streakData.currentStreak} Days</h3>
                <p className="text-sm text-gray-600">Current learning streak</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Keep it up! Complete at least one activity daily to maintain your streak.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Streak Milestones</h4>
            <div className="space-y-2">
              <div className={`flex items-center space-x-2 ${streakData.currentStreak >= 7 ? 'text-green-600' : 'text-gray-400'}`}>
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">7 days - Consistency Badge</span>
              </div>
              <div className={`flex items-center space-x-2 ${streakData.currentStreak >= 14 ? 'text-green-600' : 'text-gray-400'}`}>
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">14 days - Dedication Badge</span>
              </div>
              <div className={`flex items-center space-x-2 ${streakData.currentStreak >= 30 ? 'text-green-600' : 'text-gray-400'}`}>
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">30 days - Master Learner Badge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyActivities;