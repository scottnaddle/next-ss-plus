import React, { useState } from 'react';
import { Star, Gift, Calendar, Users, TrendingUp, Zap, AlertTriangle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SweepstakesCenter: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('active');

  const activeSweepstakes = [
    {
      id: 1,
      title: 'November Galaxy Prize',
      description: 'Win the latest Galaxy S24 Ultra + accessories bundle worth $1,500',
      entryPoints: 100,
      endsIn: '15 days',
      participants: 2847,
      prize: 'Galaxy S24 Ultra Bundle',
      value: '$1,500',
      channel: 'all',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400',
      odds: '1 in 2,847'
    },
    {
      id: 2,
      title: 'AT&T Radiant Rewards',
      description: '$25 Virtual Visa Gift Card - AT&T partners exclusive',
      entryPoints: 50,
      endsIn: '8 days',
      participants: 456,
      prize: 'Virtual Visa Gift Card',
      value: '$25',
      channel: 'ATT',
      image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=400',
      odds: '1 in 456'
    },
    {
      id: 3,
      title: 'T-Mobile Excellence',
      description: '$20 Samsung.com Credit - T-Mobile partners only',
      entryPoints: 40,
      endsIn: '12 days',
      participants: 623,
      prize: 'Samsung.com Credit',
      value: '$20',
      channel: 'TMO',
      image: 'https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=400',
      odds: '1 in 623'
    }
  ];

  const pastWinners = [
    { id: 1, winner: 'J.S.', location: 'New York', prize: 'Galaxy Watch 7', date: '2024-10-20' },
    { id: 2, winner: 'M.D.', location: 'California', prize: '$50 Gift Card', date: '2024-10-18' },
    { id: 3, winner: 'L.B.', location: 'Texas', prize: 'Galaxy Buds3 Pro', date: '2024-10-15' },
    { id: 4, winner: 'K.M.', location: 'Florida', prize: '$25 Gift Card', date: '2024-10-12' },
    { id: 5, winner: 'R.J.', location: 'Illinois', prize: 'Galaxy Tab S10', date: '2024-10-10' }
  ];

  const myEntries = [
    { id: 1, sweepstake: 'November Galaxy Prize', entryDate: '2024-10-25', pointsSpent: 100, status: 'entered' },
    { id: 2, sweepstake: 'AT&T Radiant Rewards', entryDate: '2024-10-22', pointsSpent: 50, status: 'entered' },
    { id: 3, sweepstake: 'October Samsung Bundle', entryDate: '2024-10-01', pointsSpent: 75, status: 'lost' }
  ];

  const canEnter = (points: number) => {
    return (user?.points || 0) >= points;
  };

  const getChannelColor = (channel: string) => {
    switch (channel) {
      case 'ATT': return 'bg-orange-100 text-orange-800';
      case 'TMO': return 'bg-pink-100 text-pink-800';
      case 'VZW': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'entered': return 'bg-green-100 text-green-800';
      case 'won': return 'bg-yellow-100 text-yellow-800';
      case 'lost': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Sweepstakes Center</h1>
        <p className="text-yellow-100 mt-2">
          Enter exciting sweepstakes and win amazing prizes with your points!
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-yellow-100">Available Points</div>
            <div className="text-lg font-semibold">{user?.points.toLocaleString()}</div>
          </div>
          <div className="bg-yellow-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-yellow-100">Active Entries</div>
            <div className="text-lg font-semibold">
              {myEntries.filter(e => e.status === 'entered').length}
            </div>
          </div>
          <div className="bg-yellow-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-yellow-100">Total Spent</div>
            <div className="text-lg font-semibold">
              {myEntries.reduce((sum, e) => sum + e.pointsSpent, 0)} pts
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('active')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'active'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Star className="h-4 w-4 inline mr-2" />
              Active Sweepstakes
            </button>
            <button
              onClick={() => setActiveTab('winners')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'winners'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <TrendingUp className="h-4 w-4 inline mr-2" />
              Recent Winners
            </button>
            <button
              onClick={() => setActiveTab('my-entries')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'my-entries'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users className="h-4 w-4 inline mr-2" />
              My Entries
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'active' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <h3 className="font-medium text-blue-900">How Sweepstakes Work</h3>
                </div>
                <ul className="text-sm text-blue-800 mt-2 space-y-1">
                  <li>• Use your earned points to enter sweepstakes</li>
                  <li>• Each entry is deducted from your point balance</li>
                  <li>• Winners are randomly selected and notified via email</li>
                  <li>• Channel-specific sweepstakes available for eligible partners</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeSweepstakes.map((sweepstake) => (
                  <div key={sweepstake.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <img 
                      src={sweepstake.image} 
                      alt={sweepstake.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{sweepstake.title}</h4>
                        {sweepstake.channel !== 'all' && (
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getChannelColor(sweepstake.channel)}`}>
                            {sweepstake.channel}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{sweepstake.description}</p>
                      
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Prize Value:</span>
                          <span className="font-medium text-green-600">{sweepstake.value}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Entry Cost:</span>
                          <span className="font-medium text-yellow-600">{sweepstake.entryPoints} pts</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Participants:</span>
                          <span className="font-medium">{sweepstake.participants.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Odds:</span>
                          <span className="font-medium">{sweepstake.odds}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Ends in:</span>
                          <span className="font-medium text-red-600">{sweepstake.endsIn}</span>
                        </div>
                      </div>

                      <button
                        disabled={!canEnter(sweepstake.entryPoints)}
                        className={`w-full px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                          canEnter(sweepstake.entryPoints)
                            ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {canEnter(sweepstake.entryPoints) ? 'Enter Sweepstakes' : 'Insufficient Points'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'winners' && (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Winners</h3>
                  <p className="text-sm text-gray-600">Winners are displayed with initials and region only for privacy</p>
                </div>
                <div className="divide-y divide-gray-200">
                  {pastWinners.map((winner) => (
                    <div key={winner.id} className="px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-yellow-100 p-2 rounded-full">
                          <Gift className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{winner.winner}</div>
                          <div className="text-sm text-gray-500">{winner.location}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-gray-900">{winner.prize}</div>
                        <div className="text-sm text-gray-500">{winner.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'my-entries' && (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">My Sweepstake Entries</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {myEntries.map((entry) => (
                    <div key={entry.id} className="px-6 py-4 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">{entry.sweepstake}</div>
                        <div className="text-sm text-gray-500">Entered on {entry.entryDate}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-900">{entry.pointsSpent} points</div>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(entry.status)}`}>
                          {entry.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {myEntries.filter(e => e.status === 'entered').length > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <h4 className="font-medium text-green-900">Active Entries</h4>
                  </div>
                  <p className="text-sm text-green-700 mt-1">
                    You have {myEntries.filter(e => e.status === 'entered').length} active entries. 
                    Winners will be notified via email when drawings are held.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SweepstakesCenter;