import React, { useState } from 'react';
import { Calendar, Users, Utensils, Clock, CheckCircle, AlertTriangle, MapPin, FileText, DollarSign } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const LargeEvents: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('request');
  const [showEventForm, setShowEventForm] = useState(false);
  const [showFoodForm, setShowFoodForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  // Form states
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [attendeeCount, setAttendeeCount] = useState('');
  const [educationGoal, setEducationGoal] = useState('');
  const [foodRequest, setFoodRequest] = useState('');

  const pendingEvents = [
    {
      id: 1,
      title: 'Galaxy S24 Training for AT&T Manhattan',
      date: '2024-11-10',
      time: '11:30 AM - 1:30 PM',
      location: 'AT&T Store, 1234 Broadway, New York, NY',
      attendees: 18,
      status: 'pending_approval',
      submittedDate: '2024-10-28',
      educationGoal: 'Train staff on Galaxy S24 features and selling points'
    },
    {
      id: 2,
      title: 'Verizon Brooklyn Team Product Update',
      date: '2024-11-15',
      time: '12:00 PM - 2:00 PM',
      location: 'Verizon Store, 567 Atlantic Ave, Brooklyn, NY',
      attendees: 15,
      status: 'approved',
      submittedDate: '2024-10-25',
      educationGoal: 'Update team on Q4 product lineup and promotions',
      foodStatus: 'pending'
    }
  ];

  const upcomingEvents = [
    {
      id: 3,
      title: 'T-Mobile Queens Product Training',
      date: '2024-11-05',
      time: '11:00 AM - 1:00 PM',
      location: 'T-Mobile Store, 789 Queens Blvd, Queens, NY',
      attendees: 20,
      status: 'approved',
      foodStatus: 'ordered',
      foodDetails: 'Pizza and salad for 20 people',
      educationGoal: 'Comprehensive training on Galaxy Z Fold6 and Z Flip6'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Best Buy Manhattan Staff Training',
      date: '2024-10-20',
      time: '12:00 PM - 2:00 PM',
      location: 'Best Buy, 555 5th Ave, New York, NY',
      attendees: 22,
      status: 'completed',
      foodStatus: 'delivered',
      foodDetails: 'Sandwiches and drinks for 22 people',
      educationGoal: 'Train staff on holiday promotions and bundle offers',
      feedback: 'Great engagement, all staff members participated actively'
    },
    {
      id: 5,
      title: 'AT&T Bronx Team Training',
      date: '2024-10-15',
      time: '11:30 AM - 1:30 PM',
      location: 'AT&T Store, 123 Fordham Rd, Bronx, NY',
      attendees: 16,
      status: 'completed',
      foodStatus: 'delivered',
      foodDetails: 'Chicken and sides for 16 people',
      educationGoal: 'Focus on Galaxy Watch features and health benefits',
      feedback: 'Team showed high interest in health features'
    }
  ];

  // For admin view
  const allPendingEvents = [
    ...pendingEvents,
    {
      id: 6,
      title: 'Verizon Manhattan Team Training',
      date: '2024-11-12',
      time: '12:00 PM - 2:00 PM',
      location: 'Verizon Store, 342 Madison Ave, New York, NY',
      attendees: 17,
      status: 'pending_approval',
      submittedDate: '2024-10-27',
      educationGoal: 'Train on Galaxy Buds3 Pro features and demos',
      fsm: 'Emily Chen'
    },
    {
      id: 7,
      title: 'T-Mobile Brooklyn Product Update',
      date: '2024-11-18',
      time: '11:30 AM - 1:30 PM',
      location: 'T-Mobile Store, 456 Fulton St, Brooklyn, NY',
      attendees: 15,
      status: 'pending_approval',
      submittedDate: '2024-10-26',
      educationGoal: 'Update on Q4 product lineup and holiday promotions',
      fsm: 'David Wilson'
    }
  ];

  const pendingFoodOrders = [
    {
      id: 2,
      eventTitle: 'Verizon Brooklyn Team Product Update',
      date: '2024-11-15',
      time: '12:00 PM - 2:00 PM',
      location: 'Verizon Store, 567 Atlantic Ave, Brooklyn, NY',
      attendees: 15,
      requestedFood: 'Pizza and wings for 15 people',
      requestDate: '2024-10-29',
      fsm: 'Emily Chen'
    }
  ];

  const handleCreateEvent = () => {
    setShowEventForm(true);
  };

  const handleSubmitEvent = () => {
    // In a real app, this would submit to an API
    console.log('Submitting event request:', {
      title: eventTitle,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
      attendees: attendeeCount,
      educationGoal
    });
    
    setShowEventForm(false);
    
    // Reset form
    setEventTitle('');
    setEventDate('');
    setEventTime('');
    setEventLocation('');
    setAttendeeCount('');
    setEducationGoal('');
    
    // Show success message
    alert('Event request submitted successfully! It will be reviewed by Flavia.');
  };

  const handleRequestFood = (eventId: number) => {
    setSelectedEvent(eventId);
    setShowFoodForm(true);
  };

  const handleSubmitFoodRequest = () => {
    // In a real app, this would submit to an API
    console.log('Submitting food request:', {
      eventId: selectedEvent,
      foodRequest
    });
    
    setShowFoodForm(false);
    setFoodRequest('');
    
    // Show success message
    alert('Food request submitted successfully! Brad\'s team will process your order.');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending_approval': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFoodStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'ordered': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Check if user is an admin (Flavia, Brad, Thomas team)
  const isAdmin = user?.role === 'SA_ADMIN' || user?.role === 'SYSTEM_ADMIN';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold">Large Events</h1>
        <p className="text-orange-100 mt-2">
          {isAdmin 
            ? 'Manage and approve offline educational events and food orders'
            : 'Plan and manage offline educational events for your stores and partners'
          }
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">
              {isAdmin ? 'Pending Approvals' : 'Pending Events'}
            </div>
            <div className="text-lg font-semibold">
              {isAdmin ? allPendingEvents.filter(e => e.status === 'pending_approval').length : pendingEvents.length}
            </div>
          </div>
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">
              {isAdmin ? 'Pending Food Orders' : 'Upcoming Events'}
            </div>
            <div className="text-lg font-semibold">
              {isAdmin ? pendingFoodOrders.length : upcomingEvents.length}
            </div>
          </div>
          <div className="bg-orange-700 bg-opacity-50 rounded-lg p-3">
            <div className="text-sm text-orange-100">
              {isAdmin ? 'Monthly Budget Used' : 'Completed Events'}
            </div>
            <div className="text-lg font-semibold">
              {isAdmin ? '$2,450 / $5,000' : pastEvents.length}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation - Different for FSM vs Admin */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {isAdmin ? (
              // Admin tabs
              <>
                <button
                  onClick={() => setActiveTab('pending-approvals')}
                  className={`py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'pending-approvals'
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <FileText className="h-4 w-4 inline mr-2" />
                  Pending Approvals
                </button>
                <button
                  onClick={() => setActiveTab('food-orders')}
                  className={`py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'food-orders'
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Utensils className="h-4 w-4 inline mr-2" />
                  Food Orders
                </button>
                <button
                  onClick={() => setActiveTab('budget')}
                  className={`py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'budget'
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <DollarSign className="h-4 w-4 inline mr-2" />
                  Budget Management
                </button>
              </>
            ) : (
              // FSM tabs
              <>
                <button
                  onClick={() => setActiveTab('request')}
                  className={`py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'request'
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <FileText className="h-4 w-4 inline mr-2" />
                  Request Event
                </button>
                <button
                  onClick={() => setActiveTab('pending')}
                  className={`py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'pending'
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Clock className="h-4 w-4 inline mr-2" />
                  Pending Events
                </button>
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'upcoming'
                      ? 'border-orange-500 text-orange-600'
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
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <CheckCircle className="h-4 w-4 inline mr-2" />
                  Past Events
                </button>
              </>
            )}
          </nav>
        </div>

        <div className="p-6">
          {/* FSM VIEWS */}
          {!isAdmin && activeTab === 'request' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Utensils className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Large Event Guidelines</h4>
                    <p className="text-sm text-blue-800 mt-1">
                      Large Events are educational sessions with 15+ attendees where food is provided. All events require approval and must have a clear educational goal.
                    </p>
                    <ul className="text-sm text-blue-800 mt-2 space-y-1">
                      <li>• Events must be requested at least 1 week in advance</li>
                      <li>• Minimum 15 attendees required</li>
                      <li>• Food orders are processed by the central team</li>
                      <li>• Educational content must be the primary focus</li>
                      <li>• Submit a brief report after the event</li>
                    </ul>
                  </div>
                </div>
              </div>

              {!showEventForm ? (
                <div className="text-center py-8">
                  <Utensils className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Create a New Large Event</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Plan an educational event for your stores or partners with food provided through our centralized system.
                  </p>
                  <button
                    onClick={handleCreateEvent}
                    className="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors"
                  >
                    Create Event Request
                  </button>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">New Large Event Request</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                      <input
                        type="text"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                        placeholder="e.g., Galaxy S24 Training for AT&T Manhattan"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                        <input
                          type="date"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          min={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} // Min 7 days from now
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Must be at least 7 days from today</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Time</label>
                        <input
                          type="time"
                          value={eventTime}
                          onChange={(e) => setEventTime(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Event Location</label>
                      <input
                        type="text"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        placeholder="Full address of the event location"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Attendees</label>
                      <input
                        type="number"
                        value={attendeeCount}
                        onChange={(e) => setAttendeeCount(e.target.value)}
                        min="15"
                        placeholder="Minimum 15 attendees required"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Large events require at least 15 attendees</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Educational Goal</label>
                      <textarea
                        value={educationGoal}
                        onChange={(e) => setEducationGoal(e.target.value)}
                        placeholder="Describe the educational objectives and expected outcomes of this event"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    
                    <div className="flex space-x-3 pt-2">
                      <button
                        onClick={() => setShowEventForm(false)}
                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSubmitEvent}
                        className="flex-1 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700"
                      >
                        Submit Request
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {!isAdmin && activeTab === 'pending' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Event Requests</h3>
              {pendingEvents.length > 0 ? (
                <div className="space-y-4">
                  {pendingEvents.map((event) => (
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
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                          {event.status === 'pending_approval' ? 'Pending Approval' : 'Approved'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">Location:</span>
                          <span className="ml-1 font-medium">{event.location}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Attendees:</span>
                          <span className="ml-1 font-medium">{event.attendees}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Submitted:</span>
                          <span className="ml-1 font-medium">{event.submittedDate}</span>
                        </div>
                        {event.foodStatus && (
                          <div>
                            <span className="text-gray-500">Food Status:</span>
                            <span className={`ml-1 px-2 py-0.5 text-xs font-medium rounded-full ${getFoodStatusColor(event.foodStatus)}`}>
                              {event.foodStatus}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-sm text-gray-500">Educational Goal:</span>
                        <p className="text-sm text-gray-700 mt-1">{event.educationGoal}</p>
                      </div>
                      
                      <div className="flex space-x-2">
                        {event.status === 'approved' && !event.foodStatus && (
                          <button
                            onClick={() => handleRequestFood(event.id)}
                            className="flex-1 px-3 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors"
                          >
                            Request Food
                          </button>
                        )}
                        {event.status === 'approved' && event.foodStatus === 'pending' && (
                          <button
                            disabled
                            className="flex-1 px-3 py-2 bg-gray-200 text-gray-500 text-sm font-medium rounded-md cursor-not-allowed"
                          >
                            Food Request Pending
                          </button>
                        )}
                        <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Pending Events</h3>
                  <p className="text-gray-600">
                    You don't have any pending event requests at the moment.
                  </p>
                </div>
              )}
            </div>
          )}

          {!isAdmin && activeTab === 'upcoming' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Approved Events</h3>
              {upcomingEvents.length > 0 ? (
                <div className="space-y-4">
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
                        <div className="flex flex-col items-end space-y-1">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                            {event.status === 'approved' ? 'Approved' : event.status}
                          </span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getFoodStatusColor(event.foodStatus)}`}>
                            Food: {event.foodStatus}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">Location:</span>
                          <span className="ml-1 font-medium">{event.location}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Attendees:</span>
                          <span className="ml-1 font-medium">{event.attendees}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Food Details:</span>
                          <span className="ml-1 font-medium">{event.foodDetails}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-sm text-gray-500">Educational Goal:</span>
                        <p className="text-sm text-gray-700 mt-1">{event.educationGoal}</p>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 px-3 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors">
                          Event Details
                        </button>
                        <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                          Contact Support
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Upcoming Events</h3>
                  <p className="text-gray-600">
                    You don't have any upcoming approved events at the moment.
                  </p>
                </div>
              )}
            </div>
          )}

          {!isAdmin && activeTab === 'past' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Past Events</h3>
              {pastEvents.length > 0 ? (
                <div className="space-y-4">
                  {pastEvents.map((event) => (
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
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">Location:</span>
                          <span className="ml-1 font-medium">{event.location}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Attendees:</span>
                          <span className="ml-1 font-medium">{event.attendees}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Food:</span>
                          <span className="ml-1 font-medium">{event.foodDetails}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-sm text-gray-500">Educational Goal:</span>
                        <p className="text-sm text-gray-700 mt-1">{event.educationGoal}</p>
                      </div>
                      
                      {event.feedback && (
                        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Event Feedback:</span>
                          <p className="text-sm text-gray-600 mt-1">{event.feedback}</p>
                        </div>
                      )}
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 px-3 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors">
                          View Report
                        </button>
                        <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                          Add Feedback
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Past Events</h3>
                  <p className="text-gray-600">
                    You haven't completed any events yet.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ADMIN VIEWS */}
          {isAdmin && activeTab === 'pending-approvals' && (
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-900">Approval Guidelines</h4>
                    <p className="text-sm text-yellow-800 mt-1">
                      Review each event request carefully to ensure it meets the following criteria:
                    </p>
                    <ul className="text-sm text-yellow-800 mt-2 space-y-1">
                      <li>• Clear educational purpose that aligns with business goals</li>
                      <li>• Appropriate attendee count (minimum 15 people)</li>
                      <li>• Reasonable location and timing</li>
                      <li>• FSM has good track record of successful events</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Event Approvals</h3>
              {allPendingEvents.filter(e => e.status === 'pending_approval').length > 0 ? (
                <div className="space-y-4">
                  {allPendingEvents.filter(e => e.status === 'pending_approval').map((event) => (
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
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                          Pending Approval
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">Location:</span>
                          <span className="ml-1 font-medium">{event.location}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Attendees:</span>
                          <span className="ml-1 font-medium">{event.attendees}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Submitted:</span>
                          <span className="ml-1 font-medium">{event.submittedDate}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">FSM:</span>
                          <span className="ml-1 font-medium">{event.fsm || `${user?.firstName} ${user?.lastName}`}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-sm text-gray-500">Educational Goal:</span>
                        <p className="text-sm text-gray-700 mt-1">{event.educationGoal}</p>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors">
                          Approve
                        </button>
                        <button className="flex-1 px-3 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors">
                          Reject
                        </button>
                        <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                          Request Changes
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Pending Approvals</h3>
                  <p className="text-gray-600">
                    There are no event requests waiting for your approval.
                  </p>
                </div>
              )}
            </div>
          )}

          {isAdmin && activeTab === 'food-orders' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Utensils className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Food Order Process</h4>
                    <p className="text-sm text-blue-800 mt-1">
                      As Brad's team, you are responsible for processing food orders for approved events:
                    </p>
                    <ol className="text-sm text-blue-800 mt-2 space-y-1">
                      <li>1. Review the food request details</li>
                      <li>2. Place the order through DoorDash for the specified date/time</li>
                      <li>3. Update the order status in the system</li>
                      <li>4. Monitor delivery and resolve any issues</li>
                      <li>5. Save receipts for expense reporting</li>
                    </ol>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Food Orders</h3>
              {pendingFoodOrders.length > 0 ? (
                <div className="space-y-4">
                  {pendingFoodOrders.map((order) => (
                    <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{order.eventTitle}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{order.date}</span>
                            <Clock className="h-4 w-4 text-gray-500 ml-2" />
                            <span className="text-sm text-gray-600">{order.time}</span>
                          </div>
                        </div>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                          Pending Order
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">Location:</span>
                          <span className="ml-1 font-medium">{order.location}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Attendees:</span>
                          <span className="ml-1 font-medium">{order.attendees}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Requested:</span>
                          <span className="ml-1 font-medium">{order.requestDate}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">FSM:</span>
                          <span className="ml-1 font-medium">{order.fsm}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4 p-3 bg-orange-50 rounded-lg">
                        <span className="text-sm font-medium text-orange-800">Food Request:</span>
                        <p className="text-sm text-orange-700 mt-1">{order.requestedFood}</p>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 px-3 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors">
                          Process in DoorDash
                        </button>
                        <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                          Contact FSM
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <Utensils className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Pending Food Orders</h3>
                  <p className="text-gray-600">
                    There are no food orders waiting to be processed.
                  </p>
                </div>
              )}
            </div>
          )}

          {isAdmin && activeTab === 'budget' && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-900">Budget Management</h4>
                    <p className="text-sm text-green-800 mt-1">
                      As Thomas's team, you are responsible for managing the budget for Large Events:
                    </p>
                    <ul className="text-sm text-green-800 mt-2 space-y-1">
                      <li>• Monitor monthly and quarterly budget utilization</li>
                      <li>• Ensure funds are available for approved events</li>
                      <li>• Review expense reports and receipts</li>
                      <li>• Adjust budget allocations as needed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Monthly Budget</h3>
                        <p className="text-2xl font-bold text-blue-600">$5,000</p>
                        <p className="text-sm text-gray-600">November 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Spent</h3>
                        <p className="text-2xl font-bold text-green-600">$2,450</p>
                        <p className="text-sm text-gray-600">49% of budget</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-purple-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Remaining</h3>
                        <p className="text-2xl font-bold text-purple-600">$2,550</p>
                        <p className="text-sm text-gray-600">51% available</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Budget Utilization</h4>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-green-600 h-4 rounded-full"
                      style={{ width: '49%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>$0</span>
                    <span>$2,450 spent</span>
                    <span>$5,000</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Recent Expenses</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Event
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            FSM
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Attendees
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Receipt
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Best Buy Manhattan Staff Training
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2024-10-20
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Emily Chen
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            22
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            $385.50
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                            <a href="#" className="hover:underline">View</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            AT&T Bronx Team Training
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2024-10-15
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            David Wilson
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            16
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            $275.25
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                            <a href="#" className="hover:underline">View</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Food Request Modal */}
      {showFoodForm && selectedEvent !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Request Food for Event
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {pendingEvents.find(e => e.id === selectedEvent)?.title}
            </p>
            
            <div className="space-y-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Food Request Details</label>
                <textarea
                  value={foodRequest}
                  onChange={(e) => setFoodRequest(e.target.value)}
                  placeholder="Describe what food you'd like ordered (e.g., 'Chicken for 15 people')"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Brad's team will place the order through DoorDash for delivery at your event time.
                </p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowFoodForm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitFoodRequest}
                className="flex-1 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700"
              >
                Submit Food Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Process Information */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Large Event Process</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          <div className="space-y-6">
            <div className="relative flex items-start">
              <div className="absolute left-0 rounded-full bg-orange-600 p-2">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <div className="ml-12">
                <h3 className="font-medium text-gray-900">1. Event Request</h3>
                <p className="text-sm text-gray-600 mt-1">
                  FSM submits event request with educational goals, attendee count, and location details
                </p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-0 rounded-full bg-orange-600 p-2">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <div className="ml-12">
                <h3 className="font-medium text-gray-900">2. Approval Process</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Flavia reviews and approves the event request based on educational value and budget
                </p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-0 rounded-full bg-orange-600 p-2">
                <Utensils className="h-4 w-4 text-white" />
              </div>
              <div className="ml-12">
                <h3 className="font-medium text-gray-900">3. Food Request</h3>
                <p className="text-sm text-gray-600 mt-1">
                  FSM submits food request for the approved event
                </p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-0 rounded-full bg-orange-600 p-2">
                <DollarSign className="h-4 w-4 text-white" />
              </div>
              <div className="ml-12">
                <h3 className="font-medium text-gray-900">4. Order Processing</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Brad's team processes the food order through DoorDash for delivery at the event time
                </p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-0 rounded-full bg-orange-600 p-2">
                <Users className="h-4 w-4 text-white" />
              </div>
              <div className="ml-12">
                <h3 className="font-medium text-gray-900">5. Event Execution</h3>
                <p className="text-sm text-gray-600 mt-1">
                  FSM conducts the educational event with food provided
                </p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-0 rounded-full bg-orange-600 p-2">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <div className="ml-12">
                <h3 className="font-medium text-gray-900">6. Event Report</h3>
                <p className="text-sm text-gray-600 mt-1">
                  FSM submits a brief report with photos and outcomes after the event
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeEvents;