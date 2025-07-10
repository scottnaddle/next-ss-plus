import React, { useState } from 'react';
import { Gift, Star, ShoppingCart, Clock, Award, TrendingUp, Zap, ExternalLink } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const RewardsCenter: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('catalog');

  const rewardCategories = [
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'gift-cards', name: 'Gift Cards', icon: '💳' },
    { id: 'experiences', name: 'Experiences', icon: '🎯' },
    { id: 'samsung-products', name: 'Samsung Products', icon: '⚡' }
  ];

  const rewards = [
    {
      id: 1,
      name: 'Samsung Galaxy Buds3 Pro',
      description: 'Latest wireless earbuds with advanced noise cancellation',
      pointsCost: 2500,
      category: 'samsung-products',
      imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300',
      available: true,
      featured: true
    },
    {
      id: 2,
      name: '$50 Amazon Gift Card',
      description: 'Digital gift card delivered instantly to your email',
      pointsCost: 1250,
      category: 'gift-cards',
      imageUrl: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=300',
      available: true,
      featured: false
    },
    {
      id: 3,
      name: 'Samsung 43" Smart TV',
      description: '4K UHD Smart TV with Samsung Tizen OS',
      pointsCost: 8500,
      category: 'samsung-products',
      imageUrl: 'https://images.pexels.com/photos/6774775/pexels-photo-6774775.jpeg?auto=compress&cs=tinysrgb&w=300',
      available: true,
      featured: true
    },
    {
      id: 4,
      name: 'Virtual Reality Experience',
      description: 'One-hour VR gaming session at local VR center',
      pointsCost: 800,
      category: 'experiences',
      imageUrl: 'https://images.pexels.com/photos/7261704/pexels-photo-7261704.jpeg?auto=compress&cs=tinysrgb&w=300',
      available: true,
      featured: false
    },
    {
      id: 5,
      name: 'Apple iPad Air',
      description: '10.9-inch iPad Air with Wi-Fi, latest generation',
      pointsCost: 6200,
      category: 'electronics',
      imageUrl: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=300',
      available: false,
      featured: false
    },
    {
      id: 6,
      name: '$25 Starbucks Gift Card',
      description: 'Perfect for your daily coffee needs',
      pointsCost: 625,
      category: 'gift-cards',
      imageUrl: 'https://images.pexels.com/photos/4046/coffee-cup.jpg?auto=compress&cs=tinysrgb&w=300',
      available: true,
      featured: false
    }
  ];

  const sweepstakes = [
    {
      id: 1,
      title: 'November Samsung Galaxy Prize',
      description: 'Win the latest Galaxy S24 Ultra + accessories bundle',
      entryPoints: 100,
      endsIn: '15 days',
      participants: 2847,
      prize: 'Galaxy S24 Ultra Bundle ($1,500 value)',
      status: 'active'
    },
    {
      id: 2,
      title: 'Holiday Shopping Spree',
      description: '$500 Samsung.com shopping credit',
      entryPoints: 50,
      endsIn: '8 days',
      participants: 1923,
      prize: '$500 Samsung.com Credit',
      status: 'active'
    },
    {
      id: 3,
      title: 'Q4 Performance Champions',
      description: 'Top performers win exclusive Samsung products',
      entryPoints: 200,
      endsIn: '45 days',
      participants: 756,
      prize: 'Exclusive Samsung Bundle',
      status: 'active'
    }
  ];

  const recentActivity = [
    { id: 1, action: 'Redeemed $50 Amazon Gift Card', points: -1250, date: '2 days ago' },
    { id: 2, action: 'Entered November Samsung Galaxy Prize', points: -100, date: '5 days ago' },
    { id: 3, action: 'Earned points from Galaxy S24 training', points: +200, date: '1 week ago' },
    { id: 4, action: 'Bonus points for monthly goal achievement', points: +500, date: '2 weeks ago' }
  ];

  const userCanAfford = (pointsCost: number) => {
    return (user?.points || 0) >= pointsCost;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Rewards Center</h1>
        <p className="text-purple-100 mt-2">
          Redeem your hard-earned points for amazing rewards and prizes
        </p>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Available Points</div>
            <div className="text-2xl font-bold">{user?.points.toLocaleString()}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-purple-100">Points Value</div>
            <div className="text-lg font-semibold">~${Math.round((user?.points || 0) * 0.01)}</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex flex-wrap gap-2 px-6">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'catalog'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Gift className="h-4 w-4 inline mr-2" />
              Reward Catalog
            </button>
            <button
              onClick={() => setActiveTab('sweepstakes')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'sweepstakes'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Star className="h-4 w-4 inline mr-2" />
              Sweepstakes
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'activity'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Clock className="h-4 w-4 inline mr-2" />
              My Activity
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'catalog' && (
            <div className="space-y-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {rewardCategories.map((category) => (
                  <button
                    key={category.id}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <span>{category.icon}</span>
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Featured Rewards */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Rewards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rewards.filter(reward => reward.featured).map((reward) => (
                    <div key={reward.id} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border-2 border-purple-200">
                      <div className="relative">
                        <img 
                          src={reward.imageUrl} 
                          alt={reward.name}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          FEATURED
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{reward.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <div className="flex items-center space-x-1">
                          <Award className="h-4 w-4 text-purple-600" />
                          <span className="font-bold text-purple-600">{reward.pointsCost.toLocaleString()} pts</span>
                        </div>
                        <button
                          disabled={!userCanAfford(reward.pointsCost) || !reward.available}
                          className={`w-full sm:w-auto px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                            userCanAfford(reward.pointsCost) && reward.available
                              ? 'bg-purple-600 text-white hover:bg-purple-700'
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {!reward.available ? 'Out of Stock' : 'Redeem'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Rewards */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">All Rewards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rewards.filter(reward => !reward.featured).map((reward) => (
                    <div key={reward.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <img 
                        src={reward.imageUrl} 
                        alt={reward.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{reward.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                          <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4 text-purple-600" />
                            <span className="font-bold text-purple-600">{reward.pointsCost.toLocaleString()} pts</span>
                          </div>
                          <button
                            disabled={!userCanAfford(reward.pointsCost) || !reward.available}
                            className={`w-full sm:w-auto px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                              userCanAfford(reward.pointsCost) && reward.available
                                ? 'bg-purple-600 text-white hover:bg-purple-700'
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            {!reward.available ? 'Out of Stock' : 'Redeem'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sweepstakes' && (
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-medium text-yellow-800">Active Sweepstakes</h3>
                </div>
                <p className="text-sm text-yellow-700 mt-1">
                  Enter for a chance to win amazing prizes! Entry points are deducted upon entry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sweepstakes.map((sweep) => (
                  <div key={sweep.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">{sweep.title}</h4>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        {sweep.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{sweep.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                        <span className="text-gray-500">Prize:</span>
                        <span className="font-medium">{sweep.prize}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                        <span className="text-gray-500">Entry Cost:</span>
                        <span className="font-medium text-purple-600">{sweep.entryPoints} pts</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                        <span className="text-gray-500">Participants:</span>
                        <span className="font-medium">{sweep.participants.toLocaleString()}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                        <span className="text-gray-500">Ends in:</span>
                        <span className="font-medium text-red-600">{sweep.endsIn}</span>
                      </div>
                    </div>

                    <button
                      disabled={!userCanAfford(sweep.entryPoints)}
                      className={`w-full px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        userCanAfford(sweep.entryPoints)
                          ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Enter Sweepstakes
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Points Earned</h3>
                      <p className="text-2xl font-bold text-blue-600">+1,250</p>
                      <p className="text-sm text-gray-600">This month</p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <ShoppingCart className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Points Spent</h3>
                      <p className="text-2xl font-bold text-purple-600">-1,350</p>
                      <p className="text-sm text-gray-600">This month</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Rewards Redeemed</h3>
                      <p className="text-2xl font-bold text-green-600">3</p>
                      <p className="text-sm text-gray-600">This month</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-500">{activity.date}</p>
                      </div>
                      <div className={`mt-2 sm:mt-0 text-sm font-bold ${
                        activity.points > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {activity.points > 0 ? '+' : ''}{activity.points.toLocaleString()} pts
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <button className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Full History
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RewardsCenter;