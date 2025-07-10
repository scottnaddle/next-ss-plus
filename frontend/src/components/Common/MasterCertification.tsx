import React, { useState } from 'react';
import { Award, Lock, CheckCircle, Star, Trophy, Target, BookOpen, Play } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const MasterCertification: React.FC = () => {
  const { user } = useAuth();
  const [selectedTrack, setSelectedTrack] = useState('galaxy-expert');

  const basicCertifications = [
    { id: 1, name: 'Galaxy S24 Basics', completed: true, points: 100 },
    { id: 2, name: 'Customer Service Fundamentals', completed: true, points: 150 },
    { id: 3, name: 'Samsung Ecosystem Overview', completed: true, points: 120 },
    { id: 4, name: 'Sales Techniques 101', completed: false, points: 130 }
  ];

  const masterTracks = [
    {
      id: 'galaxy-expert',
      title: 'Galaxy Product Expert',
      description: 'Master all Galaxy devices and become the go-to expert for customers',
      requirements: ['Complete all basic certifications', 'Pass advanced product knowledge test', 'Complete customer scenario simulations'],
      modules: [
        { id: 1, title: 'Galaxy S24 Ultra Advanced Features', duration: '45 min', completed: true },
        { id: 2, title: 'Galaxy Watch & Buds Integration', duration: '30 min', completed: true },
        { id: 3, title: 'Galaxy AI Features Deep Dive', duration: '60 min', completed: false },
        { id: 4, title: 'Troubleshooting & Support', duration: '40 min', completed: false },
        { id: 5, title: 'Final Assessment', duration: '90 min', completed: false }
      ],
      progress: 40,
      points: 500,
      badge: '🏆',
      unlocked: true
    },
    {
      id: 'sales-master',
      title: 'Sales Master',
      description: 'Advanced sales techniques and customer relationship management',
      requirements: ['Complete sales fundamentals', 'Achieve monthly sales targets', 'Complete advanced objection handling'],
      modules: [
        { id: 1, title: 'Consultative Selling Mastery', duration: '50 min', completed: false },
        { id: 2, title: 'Advanced Objection Handling', duration: '45 min', completed: false },
        { id: 3, title: 'Customer Psychology', duration: '35 min', completed: false },
        { id: 4, title: 'Closing Techniques', duration: '40 min', completed: false },
        { id: 5, title: 'Sales Master Assessment', duration: '120 min', completed: false }
      ],
      progress: 0,
      points: 750,
      badge: '💎',
      unlocked: false
    },
    {
      id: 'tech-specialist',
      title: 'Technical Specialist',
      description: 'Deep technical knowledge across all Samsung product categories',
      requirements: ['Complete product certifications', 'Pass technical assessments', 'Complete repair & troubleshooting'],
      modules: [
        { id: 1, title: 'Hardware Architecture', duration: '60 min', completed: false },
        { id: 2, title: 'Software Integration', duration: '45 min', completed: false },
        { id: 3, title: 'Advanced Troubleshooting', duration: '55 min', completed: false },
        { id: 4, title: 'Repair Procedures', duration: '70 min', completed: false },
        { id: 5, title: 'Technical Specialist Exam', duration: '150 min', completed: false }
      ],
      progress: 0,
      points: 1000,
      badge: '🔧',
      unlocked: false
    }
  ];

  const completedBasics = basicCertifications.filter(cert => cert.completed).length;
  const totalBasics = basicCertifications.length;
  const canAccessMaster = completedBasics === totalBasics;

  const selectedTrackData = masterTracks.find(track => track.id === selectedTrack);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Master Certification Program</h1>
        <p className="text-yellow-100 mt-2">
          Advanced certification tracks for expert-level knowledge and skills
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-yellow-100">Basic Certifications</div>
            <div className="text-lg font-semibold">{completedBasics}/{totalBasics} Complete</div>
          </div>
          <div className="bg-yellow-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-yellow-100">Master Progress</div>
            <div className="text-lg font-semibold">{selectedTrackData?.progress || 0}%</div>
          </div>
          <div className="bg-yellow-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-yellow-100">Expert Points</div>
            <div className="text-lg font-semibold">1,250</div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Prerequisites - Basic Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {basicCertifications.map((cert) => (
            <div
              key={cert.id}
              className={`p-4 rounded-lg border-2 ${
                cert.completed 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {cert.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                  )}
                  <div>
                    <h3 className="font-medium text-gray-900">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.points} points</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!canAccessMaster && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-yellow-600" />
              <span className="text-yellow-800 font-medium">
                Complete all basic certifications to unlock Master Certification tracks
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Master Certification Tracks */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Master Certification Tracks</h2>
        
        {/* Track Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {masterTracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              disabled={!track.unlocked && !canAccessMaster}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                selectedTrack === track.id
                  ? 'border-yellow-500 bg-yellow-50'
                  : track.unlocked || canAccessMaster
                  ? 'border-gray-200 hover:border-yellow-300'
                  : 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl">{track.badge}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{track.title}</h3>
                  <p className="text-sm text-gray-600">{track.points} points</p>
                </div>
                {(!track.unlocked && !canAccessMaster) && (
                  <Lock className="h-5 w-5 text-gray-400" />
                )}
              </div>
              <p className="text-sm text-gray-600">{track.description}</p>
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${track.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{track.progress}% complete</p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Track Details */}
        {selectedTrackData && (canAccessMaster || selectedTrackData.unlocked) && (
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">{selectedTrackData.badge}</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{selectedTrackData.title}</h3>
                <p className="text-gray-600">{selectedTrackData.description}</p>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
              <ul className="space-y-1">
                {selectedTrackData.requirements.map((req, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modules */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Certification Modules:</h4>
              <div className="space-y-3">
                {selectedTrackData.modules.map((module, index) => (
                  <div
                    key={module.id}
                    className={`p-4 rounded-lg border ${
                      module.completed 
                        ? 'border-green-200 bg-green-50' 
                        : index > 0 && !selectedTrackData.modules[index-1].completed
                        ? 'border-gray-200 bg-gray-50 opacity-70'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {module.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : index > 0 && !selectedTrackData.modules[index-1].completed ? (
                          <Lock className="h-5 w-5 text-gray-400" />
                        ) : (
                          <BookOpen className="h-5 w-5 text-blue-600" />
                        )}
                        <div>
                          <h3 className="font-medium text-gray-900">{module.title}</h3>
                          <p className="text-sm text-gray-600">{module.duration}</p>
                        </div>
                      </div>
                      <button
                        disabled={module.completed || (index > 0 && !selectedTrackData.modules[index-1].completed)}
                        className={`px-3 py-1 rounded-md text-sm font-medium ${
                          module.completed
                            ? 'bg-green-100 text-green-800 cursor-not-allowed'
                            : index > 0 && !selectedTrackData.modules[index-1].completed
                            ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {module.completed ? 'Completed' : 'Start'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Certification Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Trophy className="h-6 w-6 text-blue-600" />
            <h3 className="font-medium text-blue-900">Recognition</h3>
          </div>
          <p className="text-sm text-blue-800">
            Earn exclusive badges and recognition on the leaderboard. Master certified associates are highlighted in company communications.
          </p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Award className="h-6 w-6 text-green-600" />
            <h3 className="font-medium text-green-900">Rewards</h3>
          </div>
          <p className="text-sm text-green-800">
            Earn substantial point bonuses for completing master certifications. Unlock exclusive reward items only available to certified experts.
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Target className="h-6 w-6 text-purple-600" />
            <h3 className="font-medium text-purple-900">Career Growth</h3>
          </div>
          <p className="text-sm text-purple-800">
            Master certifications enhance your career prospects and demonstrate your expertise and commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasterCertification;