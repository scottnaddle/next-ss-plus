import React, { useState } from 'react';
import { MessageCircle, Send, Bot, User, Lightbulb, BookOpen, Smartphone, X } from 'lucide-react';

const AIAssist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hi! I\'m your AI Assistant. I can help you with Samsung product information, learning recommendations, and answer any questions you have. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickActions = [
    { icon: Smartphone, label: 'Galaxy S24 Features', query: 'Tell me about Galaxy S24 features' },
    { icon: BookOpen, label: 'Learning Recommendations', query: 'What should I learn next?' },
    { icon: Lightbulb, label: 'Sales Tips', query: 'Give me sales tips for today' }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        message: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const generateAIResponse = (query: string) => {
    const responses = {
      'galaxy s24': 'The Galaxy S24 series features AI-powered photography, enhanced battery life, and the new One UI 6.1. Key selling points include the improved night mode, S Pen functionality (Ultra model), and seamless integration with Samsung ecosystem.',
      'learning': 'Based on your progress, I recommend completing the "Advanced Sales Techniques" module next. It will help you improve objection handling and consultative selling skills.',
      'sales tips': 'Here are today\'s sales tips: 1) Focus on the Galaxy S24\'s AI camera features, 2) Highlight trade-in values, 3) Demonstrate the S Pen capabilities for business users.',
      'default': 'I understand you\'re asking about Samsung products and training. Could you be more specific about what you\'d like to know? I can help with product features, learning recommendations, or sales strategies.'
    };

    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('galaxy') || lowerQuery.includes('s24')) return responses['galaxy s24'];
    if (lowerQuery.includes('learn') || lowerQuery.includes('recommend')) return responses['learning'];
    if (lowerQuery.includes('sales') || lowerQuery.includes('tip')) return responses['sales tips'];
    return responses['default'];
  };

  const handleQuickAction = (query: string) => {
    setInputMessage(query);
    handleSendMessage();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5" />
          <span className="font-medium">AI Assistant</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-blue-600" />}
                {message.type === 'user' && <User className="h-4 w-4 mt-0.5" />}
                <div className="text-sm">{message.message}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="p-3 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={() => handleQuickAction(action.query)}
                className="flex flex-col items-center p-2 text-xs bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Icon className="h-4 w-4 text-blue-600 mb-1" />
                <span className="text-gray-700">{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssist;