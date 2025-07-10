import React, { useState } from 'react';
import { Users, Share2, Gift, TrendingUp, Mail, Copy, CheckCircle, Calendar } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const ReferralProgram: React.FC = () => {
  const { user } = useAuth();
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const referralStats = {
    totalReferred: 5,
    pendingRewards: 3,
    earnedPoints: 1250,
    monthlyBonus: 500
  };

  const referralHistory = [
    { id: 1, name: 'John D.', email: 'j***@verizon.com', status: 'completed', points: 250, date: '2024-10-20' },
    { id: 2, name: 'Sarah M.', email: 's***@att.com', status: 'pending', points: 250, date: '2024-10-18' },
    { id: 3, name: 'Mike R.', email: 'm***@tmobile.com', status: 'completed', points: 250, date: '2024-10-15' },
    { id: 4, name: 'Lisa K.', email: 'l***@bestbuy.com', status: 'pending', points: 250, date: '2024-10-12' },
    { id: 5, name: 'David W.', email: 'd***@verizon.com', status: 'completed', points: 250, date: '2024-10-10' }
  ];

  const boostEvents = [
    {
      id: 1,
      title: 'Galaxy S24 Launch Boost',
      description: 'Double referral rewards during Galaxy S24 series launch period',
      multiplier: '2x',
      startDate: '2024-11-01',
      endDate: '2024-11-30',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Holiday Season Boost',
      description: 'Triple rewards for referrals during holiday shopping season',
      multiplier: '3x',
      startDate: '2024-12-01',
      endDate: '2024-12-31',
      status: 'upcoming'
    }
  ];

  const referralCode = `${user?.firstName?.toUpperCase()}${user?.lastName?.toUpperCase()}${user?.id}`;

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Referral Program</h1>
        <p className="text-indigo-100 mt-2">
          Invite colleagues and earn rewards together! Get 250 points for each successful referral.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-indigo-100">Total Referred</div>
            <div className="text-lg font-semibold">{referralStats.totalReferred}</div>
          </div>
          <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-indigo-100">Pending Rewards</div>
            <div className="text-lg font-semibold">{referralStats.pendingRewards}</div>
          </div>
          <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-indigo-100">Points Earned</div>
            <div className="text-lg font-semibold">{referralStats.earnedPoints}</div>
          </div>
          <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-indigo-100">Monthly Bonus</div>
            <div className="text-lg font-semibold">+{referralStats.monthlyBonus}</div>
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
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users className="h-4 w-4 inline mr-2" />
              Invite Friends
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'history'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <TrendingUp className="h-4 w-4 inline mr-2" />
              Referral History
            </button>
            <button
              onClick={() => setActiveTab('boost-events')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'boost-events'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Gift className="h-4 w-4 inline mr-2" />
              Boost Events
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* How It Works */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium text-blue-900 mb-2">How the Referral Program Works</h3>
                <ol className="text-sm text-blue-800 space-y-1">
                  <li>1. Share your unique referral code with colleagues</li>
                  <li>2. They register using your code and complete onboarding</li>
                  <li>3. Both you and your referral earn 250 points</li>
                  <li>4. Bonus events can multiply your rewards up to 3x</li>
                </ol>
              </div>

              {/* Referral Code Section */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Referral Code</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex-1 bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600 mb-2">{referralCode}</div>
                      <div className="text-sm text-gray-600">Share this code with your colleagues</div>
                    </div>
                  </div>
                  <button
                    onClick={copyReferralCode}
                    className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    {copiedCode ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
              </div>

              {/* Quick Share Options */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Share</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Email Invitation</div>
                      <div className="text-sm text-gray-600">Send a personalized email invitation</div>
                    </div>
                  </button>
                  <button className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="h-6 w-6 text-green-600" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Share Link</div>
                      <div className="text-sm text-gray-600">Copy invitation link to share anywhere</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Referral Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Your Benefits</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• 250 points per successful referral</li>
                    <li>• Monthly bonuses for multiple referrals</li>
                    <li>• Special boost event multipliers</li>
                    <li>• Exclusive referrer-only rewards</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Their Benefits</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• 250 welcome bonus points</li>
                    <li>• Access to all learning modules</li>
                    <li>• Full rewards catalog access</li>
                    <li>• Exclusive new member benefits</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Referral History</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Referral
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Points
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {referralHistory.map((referral) => (
                        <tr key={referral.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {referral.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {referral.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(referral.status)}`}>
                              {referral.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {referral.points} pts
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {referral.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'boost-events' && (
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-medium text-yellow-900">Boost Events</h3>
                </div>
                <p className="text-sm text-yellow-800 mt-1">
                  During boost events, your referral rewards are multiplied! Plan your invitations around these special periods.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {boostEvents.map((event) => (
                  <div key={event.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">{event.title}</h4>
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                        {event.multiplier} Rewards
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Start Date:</span>
                        <span className="font-medium">{event.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">End Date:</span>
                        <span className="font-medium">{event.endDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Status:</span>
                        <span className="font-medium text-blue-600">{event.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;