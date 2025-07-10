import React, { useState } from 'react';
import { Trophy, Medal, Award, TrendingUp, Users, Target, Crown, Star } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Leaderboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('points');
  const [timeframe, setTimeframe] = useState('week');

  const leaderboardData = {
    points: [
      { rank: 1, name: 'David Wilson', points: 3250, change: '+15%', avatar: '🏆', region: 'Northeast' },
      { rank: 2, name: 'Sarah Johnson', points: 2890, change: '+12%', avatar: '🥈', region: 'Southeast' },
      { rank: 3, name: 'Michael Davis', points: 2750, change: '+8%', avatar: '🥉', region: 'West' },
      { rank: 4, name: 'Emily Chen', points: 2680, change: '+10%', avatar: '⭐', region: 'Midwest' },
      { rank: 5, name: 'John Smith', points: 2450, change: '+5%', avatar: '🌟', region: 'Northeast' },
      { rank: 6, name: 'Lisa Brown', points: 2320, change: '+7%', avatar: '💫', region: 'West' },
      { rank: 7, name: 'Robert Martinez', points: 2180, change: '+3%', avatar: '⚡', region: 'Southwest' },
      { rank: 8, name: 'Jennifer Taylor', points: 2050, change: '+6%', avatar: '🔥', region: 'Southeast' }
    ],
    certifications: [
      { rank: 1, name: 'Emily Chen', certifications: 14, change: '+2', avatar: '🎓', region: 'Midwest' },
      { rank: 2, name: 'David Wilson', certifications: 12, change: '+1', avatar: '📚', region: 'Northeast' },
      { rank: 3, name: 'Sarah Johnson', certifications: 11, change: '+3', avatar: '🏅', region: 'Southeast' },
      { rank: 4, name: 'Michael Davis', certifications: 10, change: '+1', avatar: '🎖️', region: 'West' },
      { rank: 5, name: 'John Smith', certifications: 9, change: '+2', avatar: '🏆', region: 'Northeast' }
    ],
    sales: [
      { rank: 1, name: 'Michael Davis', sales: 32, change: '+8', avatar: '💰', region: 'West' },
      { rank: 2, name: 'Sarah Johnson', sales: 28, change: '+5', avatar: '💎', region: 'Southeast' },
      { rank: 3, name: 'Emily Chen', sales: 26, change: '+6', avatar: '🚀', region: 'Midwest' },
      { rank: 4, name: 'John Smith', sales: 24, change: '+3', avatar: '⭐', region: 'Northeast' },
      { rank: 5, name: 'David Wilson', sales: 22, change: '+4', avatar: '🌟', region: 'Northeast' }
    ]
  };

  const getCurrentUserRank = () => {
    const currentData = leaderboardData[activeTab as keyof typeof leaderboardData];
    const userIndex = currentData.findIndex(item => item.name === `${user?.firstName} ${user?.lastName}`);
    return userIndex !== -1 ? userIndex + 1 : null;
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Award className="h-6 w-6 text-orange-500" />;
      default: return <Star className="h-5 w-5 text-gray-400" />;
    }
  };

  const getRankBgColor = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-500';
      case 3: return 'bg-gradient-to-r from-orange-400 to-orange-600';
      default: return 'bg-gray-100';
    }
  };

  const currentData = leaderboardData[activeTab as keyof typeof leaderboardData];
  const userRank = getCurrentUserRank();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <p className="text-purple-100 mt-2">
          See how you rank against your peers across the platform
        </p>
        {userRank && (
          <div className="mt-4 bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Your Current Rank</div>
            <div className="text-lg font-semibold">#{userRank} in {activeTab}</div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('points')}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === 'points'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Trophy className="h-4 w-4 inline mr-2" />
              Points
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === 'certifications'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Award className="h-4 w-4 inline mr-2" />
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('sales')}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === 'sales'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <TrendingUp className="h-4 w-4 inline mr-2" />
              Sales
            </button>
          </div>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Performers</h2>
        <div className="flex justify-center items-end space-x-4">
          {/* 2nd Place */}
          {currentData[1] && (
            <div className="text-center">
              <div className={`${getRankBgColor(2)} text-white p-4 rounded-lg mb-2`}>
                <div className="text-2xl mb-2">{currentData[1].avatar}</div>
                <div className="font-bold">{currentData[1].name}</div>
                <div className="text-sm opacity-90">
                  {activeTab === 'points' && `${currentData[1].points} pts`}
                  {activeTab === 'certifications' && `${currentData[1].certifications} certs`}
                  {activeTab === 'sales' && `${currentData[1].sales} sales`}
                </div>
              </div>
              <div className="text-xs text-gray-500">#2</div>
            </div>
          )}

          {/* 1st Place */}
          {currentData[0] && (
            <div className="text-center">
              <div className={`${getRankBgColor(1)} text-white p-6 rounded-lg mb-2 transform scale-110`}>
                <Crown className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl mb-2">{currentData[0].avatar}</div>
                <div className="font-bold">{currentData[0].name}</div>
                <div className="text-sm opacity-90">
                  {activeTab === 'points' && `${currentData[0].points} pts`}
                  {activeTab === 'certifications' && `${currentData[0].certifications} certs`}
                  {activeTab === 'sales' && `${currentData[0].sales} sales`}
                </div>
              </div>
              <div className="text-xs text-gray-500">#1</div>
            </div>
          )}

          {/* 3rd Place */}
          {currentData[2] && (
            <div className="text-center">
              <div className={`${getRankBgColor(3)} text-white p-4 rounded-lg mb-2`}>
                <div className="text-2xl mb-2">{currentData[2].avatar}</div>
                <div className="font-bold">{currentData[2].name}</div>
                <div className="text-sm opacity-90">
                  {activeTab === 'points' && `${currentData[2].points} pts`}
                  {activeTab === 'certifications' && `${currentData[2].certifications} certs`}
                  {activeTab === 'sales' && `${currentData[2].sales} sales`}
                </div>
              </div>
              <div className="text-xs text-gray-500">#3</div>
            </div>
          )}
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Full Rankings</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {currentData.map((item, index) => (
            <div
              key={index}
              className={`px-6 py-4 flex items-center justify-between hover:bg-gray-50 ${
                item.name === `${user?.firstName} ${user?.lastName}` ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8 h-8">
                  {getRankIcon(item.rank)}
                </div>
                <div className="text-2xl">{item.avatar}</div>
                <div>
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.region}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-900">
                  {activeTab === 'points' && `${item.points} pts`}
                  {activeTab === 'certifications' && `${item.certifications} certs`}
                  {activeTab === 'sales' && `${item.sales} sales`}
                </div>
                <div className={`text-sm ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {item.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievement Badges</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">Top Performer</div>
            <div className="text-xs text-gray-600">Rank #1 this week</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">Goal Crusher</div>
            <div className="text-xs text-gray-600">Exceeded monthly target</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">Team Player</div>
            <div className="text-xs text-gray-600">Helped 5+ colleagues</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">Rising Star</div>
            <div className="text-xs text-gray-600">Fastest improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;