import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './components/Auth/LoginPage';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import RSADashboard from './components/RSA/RSADashboard';
import SECDashboard from './components/SEC/SECDashboard';
import FSMDashboard from './components/FSM/FSMDashboard';
import SAAdminDashboard from './components/Admin/SAAdminDashboard';
import ChannelAdminDashboard from './components/Admin/ChannelAdminDashboard';
import SystemAdminDashboard from './components/Admin/SystemAdminDashboard';
import LearningModule from './components/Common/LearningModule';
import RewardsCenter from './components/Common/RewardsCenter';
import ProfileManagement from './components/Common/ProfileManagement';
import TaxReporting from './components/Common/TaxReporting';
import PrivacyRightsPortal from './components/Common/PrivacyRightsPortal';
import StoreManagement from './components/FSM/StoreManagement';
import TeamPerformance from './components/FSM/TeamPerformance';
import MCSIntegration from './components/FSM/MCSIntegration';
import FillTheFridge from './components/FSM/FillTheFridge';
import UserManagement from './components/Admin/UserManagement';
import ContentManagement from './components/Admin/ContentManagement';
import SweepstakesCenter from './components/RSA/SweepstakesCenter';
import ReferralProgram from './components/RSA/ReferralProgram';
import StoreInventory from './components/SEC/StoreInventory';
import HealthTracker from './components/FSM/HealthTracker';
import PowerUp from './components/FSM/PowerUp';
import LargeEvents from './components/FSM/LargeEvents';
import RewardsManagement from './components/Admin/RewardsManagement';
import TaxManagement from './components/Admin/TaxManagement';
import PrivacyManagement from './components/Admin/PrivacyManagement';
import SystemSettings from './components/Admin/SystemSettings';
import DealerSales from './components/ChannelAdmin/DealerSales';
import StorePerformance from './components/ChannelAdmin/StorePerformance';
import Reports from './components/ChannelAdmin/Reports';
import DataManagement from './components/SystemAdmin/DataManagement';
import VendorManagement from './components/SystemAdmin/VendorManagement';
import SecurityCenter from './components/SystemAdmin/SecurityCenter';
import AIAssist from './components/Common/AIAssist';
import AICoach from './components/Common/AICoach';
import Leaderboard from './components/Common/Leaderboard';
import SpotRewards from './components/Common/SpotRewards';
import DailyActivities from './components/Common/DailyActivities';
import MasterCertification from './components/Common/MasterCertification';

const AppContent: React.FC = () => {
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  const renderMainContent = () => {
    // Common components available to all roles
    switch (activeTab) {
      case 'daily-activities':
        return <DailyActivities />;
      case 'learning':
        return user.role === 'SEC' ? <LearningModule storeSpecific={true} /> : <LearningModule />;
      case 'master-certification':
        return <MasterCertification />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'rewards':
        return <RewardsCenter />;
      case 'profile':
        return <ProfileManagement />;
      case 'tax':
        return <TaxReporting />;
      case 'privacy':
        return <PrivacyRightsPortal />;
      case 'sweepstakes':
        return <SweepstakesCenter />;
      case 'referrals':
        return <ReferralProgram />;
      case 'spot-rewards':
        return <SpotRewards />;
    }

    // RSA specific tabs
    if (user.role === 'RSA') {
      switch (activeTab) {
        case 'dashboard': return <RSADashboard />;
        default: return <RSADashboard />;
      }
    }

    // SEC specific tabs
    if (user.role === 'SEC') {
      switch (activeTab) {
        case 'dashboard': return <SECDashboard />;
        case 'inventory': return <StoreInventory />;
        default: return <SECDashboard />;
      }
    }

    // FSM specific tabs
    if (user.role === 'FSM') {
      switch (activeTab) {
        case 'dashboard': return <FSMDashboard />;
        case 'stores': return <StoreManagement />;
        case 'visits': return <MCSIntegration />;
        case 'team': return <TeamPerformance />;
        case 'health': return <HealthTracker />;
        case 'incentives': return <LargeEvents />;
        case 'powerup': return <PowerUp />;
        default: return <FSMDashboard />;
      }
    }

    // SA Admin specific tabs
    if (user.role === 'SA_ADMIN') {
      switch (activeTab) {
        case 'dashboard': return <SAAdminDashboard />;
        case 'users': return <UserManagement />;
        case 'content': return <ContentManagement />;
        case 'rewards-admin': return <RewardsManagement />;
        case 'tax-admin': return <TaxManagement />;
        case 'privacy-admin': return <PrivacyManagement />;
        case 'settings': return <SystemSettings />;
        default: return <SAAdminDashboard />;
      }
    }

    // Channel Admin specific tabs
    if (user.role === 'CHANNEL_ADMIN') {
      switch (activeTab) {
        case 'dashboard': return <ChannelAdminDashboard />;
        case 'dealer-sales': return <DealerSales />;
        case 'performance': return <StorePerformance />;
        case 'reports': return <Reports />;
        default: return <ChannelAdminDashboard />;
      }
    }

    // System Admin specific tabs
    if (user.role === 'SYSTEM_ADMIN') {
      switch (activeTab) {
        case 'dashboard': return <SystemAdminDashboard />;
        case 'system-settings': return <SystemSettings />;
        case 'data-management': return <DataManagement />;
        case 'vendor-management': return <VendorManagement />;
        case 'security': return <SecurityCenter />;
        default: return <SystemAdminDashboard />;
      }
    }

    return <div>Invalid user role</div>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8">
          <div className="max-w-7xl mx-auto">
            {renderMainContent()}
          </div>
        </main>
      </div>
      <AIAssist />
      <AICoach />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;