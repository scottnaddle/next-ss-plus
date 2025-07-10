import React, { useState } from 'react';
import { Calendar, Users, Video, Clock, CheckCircle, AlertTriangle, MapPin, FileText } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const LiveEvents: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Galaxy S24 Advanced Features Training',
      date: '2024-11-05',
      time: '10:00 AM - 11:30 AM EST',
      platform: 'WebEx',
      presenter: 'Sarah Johnson',
      description: 'Deep dive into Galaxy S24 AI features and advanced capabilities',
      registrationDeadline: '2024-11-04',
      capacity: 100,
      registered: 78,
      isRegistered: false
    },
    {
      id: 2,
      title: 'Holiday Season Sales Strategies',
      date: '2024-11-10',
      time: '2:00 PM - 3:30 PM EST',
      platform: 'WebEx',
      presenter: 'Michael Davis',
      description: 'Learn effective strategies for maximizing holiday season sales',
      registrationDeadline: '2024-11-09',
      capacity: 150,
      registered: 112,
      isRegistered: true
    },
    {
      id: 3,
      title: 'Galaxy Watch 7 Health Features Demo',
      date: '2024-11-15',
      time: '11:00 AM - 12:00 PM EST',
      platform: 'WebEx',
      presenter: 'David Wilson',
      description: 'Live demonstration of Galaxy Watch 7 health monitoring capabilities',
      registrationDeadline: '2024-11-14',
      capacity: 75,
      registered: 45,
      isRegistered: false
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Galaxy Z Fold6 Training Session',
      date: '2024-10-20',
      time: '1:00 PM - 2:30 PM EST',
      platform: 'WebEx',
      presenter: 'Emily Chen',
      description: 'Comprehensive training on Galaxy Z Fold6 features and selling points',
      attendees: 92,
      recording: true
    },
    {
      id: 5,
      title: 'Customer Objection Handling Workshop',
      date: '2024-10-15',
      time: '10:00 AM - 11:30 AM EST',
      platform: 'WebEx',
      presenter: 'John Smith',
      description: 'Interactive workshop on handling common customer objections',
      attendees: 105,
      recording: true
    },
    {
      id: 6,
      title: 'Q4 Product Roadmap Overview',
      date: '2024-10-10',
      time: '3:00 PM - 4:00 PM EST',
      platform: 'WebEx',
      presenter: 'Lisa Brown',
      description: 'Overview of upcoming Samsung products for Q4 2024',
      attendees: 134,
      recording: true
    }
  ];

  const myEvents = [
    {
      id: 2,
      title: 'Holiday Season Sales Strategies',
      date: '2024-11-10',
      time: '2:00 PM - 3:30 PM EST',
      platform: 'WebEx',
      presenter: 'Michael Davis',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Galaxy Z Fold6 Training Session',
      date: '2024-10-20',
      time: '1:00 PM - 2:30 PM EST',
      platform: 'WebEx',
      presenter: 'Emily Chen',
      status: 'attended',
      certificate: true
    },
    {
      id: 5,
      title: 'Customer Objection Handling Workshop',
      date: '2024-10-15',
      time: '10:00 AM - 11:30 AM EST',
      platform: 'WebEx',
      presenter: 'John Smith',
      status: 'missed'
    }
  ];

  const handleRegister = (eventId: number) => {
    setSelectedEvent(eventId);
    setShowRegisterForm(true);
  };

  const handleSubmitRegistration = () => {
    // In a real app, this would submit to an API
    console.log('Registering for event:', selectedEvent);
    setShowRegisterForm(false);
    
    // Show success message or update UI
    alert('Registration successful! You will receive a confirmation email with event details.');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'attended': return 'bg-green-100 text-green-800';
      case 'missed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Live Training Events</h1>
        <p className="text-purple-100 mt-2">
          Interactive live training sessions and webinars for product knowledge and sales skills
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Upcoming Events</div>
            <div className="text-lg font-semibold">{upcomingEvents.length}</div>
          </div>
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Your Registrations</div>
            <div className="text-lg font-semibold">{upcomingEvents.filter(e => e.isRegistered).length}</div>
          </div>
          <div className="bg-purple-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-purple-100">Certificates Earned</div>
            <div className="text-lg font-semibold">{myEvents.filter(e => e.certificate).length}</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'upcoming'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Calendar className="h-4 w-4 inline mr-2" />
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'past'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Clock className="h-4 w-4 inline mr-2" />
              Past Events
            </button>
            <button
              onClick={() => setActiveTab('my-events')}
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'my-events'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users className="h-4 w-4 inline mr-2" />
              My Events
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'upcoming' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Video className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Live Training Benefits</h4>
                    <p className="text-sm text-blue-800 mt-1">
                      Live training events offer real-time interaction with product experts and trainers.
                      You can ask questions, participate in demonstrations, and network with colleagues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{event.date}</span>
                          <Clock className="h-4 w-4 text-gray-500 ml-2" />
                          <span className="text-sm text-gray-600">{event.time}</span>
                        </div>
                      </div>
                      {event.isRegistered ? (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          Registered
                        </span>
                      ) : (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          Open
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Platform:</span>
                        <span className="ml-1 font-medium">{event.platform}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Presenter:</span>
                        <span className="ml-1 font-medium">{event.presenter}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Registration Deadline:</span>
                        <span className="ml-1 font-medium">{event.registrationDeadline}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Capacity:</span>
                        <span className="ml-1 font-medium">{event.registered}/{event.capacity}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      {event.isRegistered ? (
                        <button className="flex-1 px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors">
                          View Details
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleRegister(event.id)}
                          className="flex-1 px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors"
                        >
                          Register
                        </button>
                      )}
                      <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'past' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <div key={event.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                      {event.recording && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          Recording Available
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{event.date}</span>
                      <Clock className="h-4 w-4 text-gray-500 ml-2" />
                      <span className="text-sm text-gray-600">{event.time}</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Platform:</span>
                        <span className="ml-1 font-medium">{event.platform}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Presenter:</span>
                        <span className="ml-1 font-medium">{event.presenter}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Attendees:</span>
                        <span className="ml-1 font-medium">{event.attendees}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      {event.recording ? (
                        <button className="flex-1 px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors">
                          Watch Recording
                        </button>
                      ) : (
                        <button className="flex-1 px-3 py-2 bg-gray-200 text-gray-500 text-sm font-medium rounded-md cursor-not-allowed">
                          No Recording
                        </button>
                      )}
                      <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                        Materials
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'my-events' && (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">My Event History</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {myEvents.map((event) => (
                    <div key={event.id} className="px-6 py-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{event.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{event.date}</span>
                          <Clock className="h-4 w-4 text-gray-500 ml-2" />
                          <span className="text-sm text-gray-600">{event.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                        <div className="flex space-x-2">
                          {event.status === 'attended' && (
                            <button className="text-purple-600 hover:text-purple-800 text-sm">
                              {event.certificate ? 'View Certificate' : 'View Details'}
                            </button>
                          )}
                          {event.status === 'upcoming' && (
                            <button className="text-red-600 hover:text-red-800 text-sm">
                              Cancel
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-purple-100 p-3 rounded-lg inline-block mb-2">
                      <CheckCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Attended</h4>
                    <p className="text-2xl font-bold text-purple-600">
                      {myEvents.filter(e => e.status === 'attended').length}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-lg inline-block mb-2">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Upcoming</h4>
                    <p className="text-2xl font-bold text-blue-600">
                      {myEvents.filter(e => e.status === 'upcoming').length}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-100 p-3 rounded-lg inline-block mb-2">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Missed</h4>
                    <p className="text-2xl font-bold text-red-600">
                      {myEvents.filter(e => e.status === 'missed').length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Registration Modal */}
      {showRegisterForm && selectedEvent !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Register for Event
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {upcomingEvents.find(e => e.id === selectedEvent)?.title}
            </p>
            
            <div className="space-y-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  defaultValue={`${user?.firstName} ${user?.lastName}`}
                  disabled
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  disabled
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Store/Location</label>
                <input
                  type="text"
                  defaultValue={user?.storeLocation || user?.region || ''}
                  disabled
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests/Questions</label>
                <textarea
                  placeholder="Any specific topics you'd like covered or questions you have"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowRegisterForm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitRegistration}
                className="flex-1 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700"
              >
                Confirm Registration
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Support Information */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Live Event Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Users className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">VOS Team Support</h4>
                <p className="text-sm text-blue-800 mt-1">
                  The Virtual Operations Support (VOS) team provides real-time assistance during live events.
                  They can help with technical issues, answer questions, and provide additional resources.
                </p>
                <button className="mt-2 text-sm font-medium text-blue-700 hover:text-blue-800">
                  Contact VOS Team
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <FileText className="h-5 w-5 text-purple-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-purple-900">Event Resources</h4>
                <p className="text-sm text-purple-800 mt-1">
                  Access presentation materials, product guides, and other resources for upcoming and past events.
                  All materials are available for download after the event.
                </p>
                <button className="mt-2 text-sm font-medium text-purple-700 hover:text-purple-800">
                  Browse Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEvents;