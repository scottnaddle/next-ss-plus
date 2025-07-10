import React, { useState, useRef } from 'react';
import { MessageCircle, Send, Bot, User, Mic, MicOff, Play, Pause, RefreshCw, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AICoach: React.FC = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scenarios = [
    {
      id: 'price-objection',
      title: 'Price Objection Handling',
      description: 'Practice responding to customers who find Samsung products too expensive',
      difficulty: 'Beginner',
      persona: 'Budget-conscious customer interested in Galaxy S24 but concerned about price'
    },
    {
      id: 'competitor-comparison',
      title: 'Competitor Comparison',
      description: 'Practice comparing Samsung products to competitor offerings',
      difficulty: 'Intermediate',
      persona: 'Tech-savvy customer comparing Galaxy S24 Ultra with iPhone 15 Pro Max'
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      description: 'Practice helping customers with technical issues',
      difficulty: 'Advanced',
      persona: 'Frustrated customer having trouble with Galaxy device setup and integration'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const startScenario = (scenarioId: string) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    if (!scenario) return;
    
    setActiveScenario(scenarioId);
    setMessages([
      {
        id: 1,
        type: 'system',
        message: `Starting scenario: ${scenario.title}`,
        timestamp: new Date()
      },
      {
        id: 2,
        type: 'system',
        message: `You are speaking with a ${scenario.persona}`,
        timestamp: new Date()
      },
      {
        id: 3,
        type: 'bot',
        message: getInitialCustomerMessage(scenarioId),
        timestamp: new Date()
      }
    ]);
    setFeedback(null);
  };

  const getInitialCustomerMessage = (scenarioId: string) => {
    switch (scenarioId) {
      case 'price-objection':
        return "I really like the Galaxy S24, but it's so expensive compared to other phones. Why should I pay this much?";
      case 'competitor-comparison':
        return "I'm trying to decide between the Galaxy S24 Ultra and the iPhone 15 Pro Max. Why should I go with Samsung?";
      case 'technical-support':
        return "I just got a new Galaxy phone and I'm having trouble setting up my Samsung account and transferring data from my old device. This is so frustrating!";
      default:
        return "Hello, I'm interested in Samsung products. Can you help me?";
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim() || !activeScenario) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        message: generateAIResponse(activeScenario, inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      
      // After 2-3 exchanges, provide feedback
      if (messages.filter(m => m.type === 'user').length >= 2) {
        setTimeout(() => {
          setFeedback(generateFeedback(activeScenario));
        }, 1000);
      }
      
      scrollToBottom();
    }, 1000);
  };

  const generateAIResponse = (scenarioId: string, userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    switch (scenarioId) {
      case 'price-objection':
        if (lowerMessage.includes('value') || lowerMessage.includes('features')) {
          return "You make a good point about the features. I'm still concerned about my budget though. Are there any promotions or trade-in options available?";
        } else if (lowerMessage.includes('trade') || lowerMessage.includes('promotion')) {
          return "That's helpful to know about the trade-in program. How much could I get for my current phone?";
        } else {
          return "I understand what you're saying, but I'm still not sure if it's worth the price for me. Can you tell me more about what makes it special?";
        }
      
      case 'competitor-comparison':
        if (lowerMessage.includes('ecosystem') || lowerMessage.includes('integration')) {
          return "That's interesting about Samsung's ecosystem. But I've heard Apple's ecosystem is more seamless. What specific advantages does Samsung have?";
        } else if (lowerMessage.includes('camera') || lowerMessage.includes('photo')) {
          return "The camera specs do sound impressive. How does it perform in low light compared to the iPhone?";
        } else {
          return "Thanks for that information. What about software updates? I heard Samsung doesn't support their phones as long as Apple does.";
        }
        
      case 'technical-support':
        if (lowerMessage.includes('smart switch') || lowerMessage.includes('transfer')) {
          return "I tried Smart Switch but it keeps getting stuck at 50%. Is there another way to transfer my data?";
        } else if (lowerMessage.includes('account') || lowerMessage.includes('sign in')) {
          return "I keep getting an error message when trying to sign in to my Samsung account. It says 'verification failed' or something like that.";
        } else {
          return "I've been trying for hours and nothing seems to work. This is why I should have stayed with my old phone. Can you just walk me through the basic steps again?";
        }
        
      default:
        return "I see. Can you tell me more about that?";
    }
  };

  const generateFeedback = (scenarioId: string) => {
    switch (scenarioId) {
      case 'price-objection':
        return "Good job addressing the price concern! Some suggestions for improvement:\n\n• Focus more on value proposition rather than just features\n• Mention trade-in options earlier in the conversation\n• Use specific examples of how features translate to daily benefits\n• Ask more questions to understand the customer's specific needs";
      
      case 'competitor-comparison':
        return "Nice work comparing products! Here's how you can improve:\n\n• Avoid directly criticizing competitors - focus on Samsung strengths\n• Use more specific feature comparisons with real-world benefits\n• Acknowledge iPhone strengths while highlighting Galaxy advantages\n• Emphasize Samsung's unique features like S Pen, DeX, and customization";
        
      case 'technical-support':
        return "Good attempt at technical support! Areas for improvement:\n\n• Show more empathy for the customer's frustration\n• Provide clearer step-by-step instructions\n• Offer alternative solutions when the standard approach doesn't work\n• Reassure the customer that the issue is common and solvable";
        
      default:
        return "Good conversation! Continue practicing to improve your skills.";
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real implementation, this would start/stop voice recording
  };

  const resetScenario = () => {
    if (activeScenario) {
      startScenario(activeScenario);
    }
  };

  const closeScenario = () => {
    setActiveScenario(null);
    setMessages([]);
    setFeedback(null);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would play/pause the conversation
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[32rem] bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5" />
          <span className="font-medium">AI Coach - Persona Training</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {!activeScenario ? (
          <div className="space-y-4">
            <p className="text-gray-700">
              Practice your sales and customer service skills with AI-powered role-playing scenarios.
            </p>
            <h3 className="font-medium text-gray-900">Choose a scenario:</h3>
            <div className="space-y-3">
              {scenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  onClick={() => startScenario(scenario.id)}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <h4 className="font-medium text-gray-900">{scenario.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{scenario.description}</p>
                  <div className="flex justify-between text-xs">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      {scenario.difficulty}
                    </span>
                    <span className="text-gray-500">~5 min</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'system' ? (
                  <div className="bg-gray-100 text-gray-700 text-xs p-2 rounded-lg max-w-xs">
                    {message.message}
                  </div>
                ) : (
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-purple-600" />}
                      {message.type === 'user' && <User className="h-4 w-4 mt-0.5" />}
                      <div className="text-sm">{message.message}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />

            {feedback && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">AI Coach Feedback</h4>
                <p className="text-sm text-blue-800 whitespace-pre-line">{feedback}</p>
                <div className="mt-3 flex space-x-2">
                  <button
                    onClick={resetScenario}
                    className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                  >
                    <RefreshCw className="h-3 w-3" />
                    <span>Try Again</span>
                  </button>
                  <button
                    onClick={closeScenario}
                    className="flex items-center space-x-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50"
                  >
                    <X className="h-3 w-3" />
                    <span>Close</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input */}
      {activeScenario && !feedback && (
        <div className="p-3 border-t border-gray-200">
          <div className="flex space-x-2">
            <button
              onClick={toggleRecording}
              className={`p-2 rounded-full ${
                isRecording ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </button>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your response..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleSendMessage}
              className="px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <button
                onClick={togglePlayback}
                className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              </button>
              <span>Conversation Playback</span>
            </div>
            <button
              onClick={resetScenario}
              className="text-purple-600 hover:text-purple-800"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AICoach;