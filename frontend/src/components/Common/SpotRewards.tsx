import React, { useState } from 'react';
import { Gift, Send, DollarSign, Users, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SpotRewards: React.FC = () => {
  const { user } = useAuth();
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [rewardType, setRewardType] = useState('points');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Only FSMs can give spot rewards
  const canGiveRewards = user?.role === 'FSM';

  const teamMembers = [
    { id: '1', name: 'John Smith', role: 'RSA', store: 'Verizon Manhattan West' },
    { id: '2', name: 'Sarah Johnson', role: 'SEC', store: 'Best Buy Brooklyn' },
    { id: '3', name: 'Michael Davis', role: 'RSA', store: 'AT&T Brooklyn Heights' },
    { id: '4', name: 'Lisa Brown', role: 'RSA', store: 'T-Mobile Queens Center' }
  ];

  const recentRewards = [
    {
      id: 1,
      recipient: 'John Smith',
      amount: 250,
      type: 'points',
      reason: 'Exceptional customer service',
      date: '2024-10-28',
      givenBy: 'Emily Chen'
    },
    {
      id: 2,
      recipient: 'Sarah Johnson',
      amount: 25,
      type: 'gift_card',
      reason: 'Exceeded monthly sales target',
      date: '2024-10-27',
      givenBy: 'Emily Chen'
    },
    {
      id: 3,
      recipient: 'Michael Davis',
      amount: 150,
      type: 'points',
      reason: 'Helped train new team member',
      date: '2024-10-26',
      givenBy: 'Emily Chen'
    }
  ];

  const budgetInfo = {
    monthlyBudget: 2500,
    spent: 1850,
    remaining: 650,
    pointsGiven: 1200,
    giftCardsGiven: 650
  };

  const handleSubmitReward = () => {
    if (!selectedRecipient || !amount || !reason) {
      alert('Please fill in all required fields');
      return;
    }

    // Simulate reward submission
    console.log('Submitting spot reward:', {
      recipient: selectedRecipient,
      type: rewardType,
      amount: amount,
      reason: reason
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Reset form
    setSelectedRecipient('');
    setAmount('');
    setReason('');
  };

  if (!canGiveRewards) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold">Spot Rewards</h1>
          <p className="text-orange-100 mt-2">
            Instant recognition and rewards for outstanding performance
          </p>
        </div>

        {/* Access Restricted */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
          <AlertTriangle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Access Restricted</h2>
          <p className="text-gray-600 mb-4">
            Spot Rewards can only be given by Field Sales Managers (FSMs).
          </p>
          <p className="text-sm text-gray-500">
            If you believe you should have access to this feature, please contact your manager.
          </p>
        </div>

        {/* Recent Rewards Received */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Rewards Received</h2>
          <div className="space-y-4">
            {recentRewards.filter(reward => reward.recipient === `${user?.firstName} ${user?.lastName}`).map((reward) => (
              <div key={reward.id} className="border rounded-lg p-4 bg-green-50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">
                      {reward.type === 'points' ? `${reward.amount} Points` : `$${reward.amount} Gift Card`}
                    </div>
                    <div className="text-sm text-gray-600">{reward.reason}</div>
                    <div className="text-xs text-gray-500">From: {reward.givenBy} • {reward.date}</div>
                  </div>
                  <Gift className="h-8 w-8 text-green-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Spot Rewards</h1>
        <p className="text-orange-100 mt-2">
          Give instant recognition and rewards to your team members
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">Monthly Budget</div>
            <div className="text-lg font-semibold">${budgetInfo.monthlyBudget}</div>
          </div>
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">Remaining</div>
            <div className="text-lg font-semibold">${budgetInfo.remaining}</div>
          </div>
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">Points Given</div>
            <div className="text-lg font-semibold">{budgetInfo.pointsGiven}</div>
          </div>
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">Gift Cards</div>
            <div className="text-lg font-semibold">${budgetInfo.giftCardsGiven}</div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-800 font-medium">Spot reward sent successfully!</span>
          </div>
        </div>
      )}

      {/* Give Reward Form */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Give Spot Reward</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Team Member</label>
            <select
              value={selectedRecipient}
              onChange={(e) => setSelectedRecipient(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Choose a team member...</option>
              {teamMembers.map((member) => (
                <option key={member.id} value={member.name}>
                  {member.name} - {member.role} ({member.store})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reward Type</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="points"
                  checked={rewardType === 'points'}
                  onChange={(e) => setRewardType(e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Points</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="gift_card"
                  checked={rewardType === 'gift_card'}
                  onChange={(e) => setRewardType(e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Instant Gift Card</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount {rewardType === 'points' ? '(Points)' : '($)'}
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={rewardType === 'points' ? 'Enter points amount' : 'Enter dollar amount'}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              {rewardType === 'points' 
                ? 'Recommended: 50-500 points for spot recognition'
                : 'Recommended: $10-$50 for instant gift cards'
              }
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Reward</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Describe why this team member deserves recognition..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            onClick={handleSubmitReward}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors"
          >
            <Send className="h-4 w-4" />
            <span>Send Spot Reward</span>
          </button>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Budget Overview</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Budget Used</span>
              <span className="font-medium">${budgetInfo.spent} / ${budgetInfo.monthlyBudget}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(budgetInfo.spent / budgetInfo.monthlyBudget) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Points Given:</span>
              <span className="ml-1 font-medium">{budgetInfo.pointsGiven}</span>
            </div>
            <div>
              <span className="text-gray-500">Gift Cards:</span>
              <span className="ml-1 font-medium">${budgetInfo.giftCardsGiven}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Rewards Given */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Rewards Given</h2>
        <div className="space-y-4">
          {recentRewards.map((reward) => (
            <div key={reward.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Gift className="h-5 w-5 text-orange-600" />
                  <div>
                    <div className="font-medium text-gray-900">{reward.recipient}</div>
                    <div className="text-sm text-gray-600">{reward.reason}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-orange-600">
                    {reward.type === 'points' ? `${reward.amount} pts` : `$${reward.amount}`}
                  </div>
                  <div className="text-xs text-gray-500">{reward.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpotRewards;