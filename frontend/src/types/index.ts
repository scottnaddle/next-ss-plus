export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  affiliationCode: string;
  storeLocation?: string;
  region?: string;
  points: number;
  isActive: boolean;
  lastLogin?: Date;
  totalEarnings: number;
  taxReportingRequired: boolean;
}

export type UserRole = 'RSA' | 'SEC' | 'FSM' | 'SA_ADMIN' | 'CHANNEL_ADMIN' | 'SYSTEM_ADMIN';

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  progress: number;
  isCompleted: boolean;
  category: string;
  estimatedTime: number;
  points: number;
}

export interface Store {
  id: string;
  name: string;
  location: string;
  region: string;
  district: string;
  area: string;
  healthScore: number;
  lastVisit?: Date;
  zeroSales: boolean;
  activeRSAs: number;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  category: string;
  imageUrl: string;
  available: boolean;
}

export interface TaxReport {
  id: string;
  userId: string;
  year: number;
  totalEarnings: number;
  status: 'pending' | 'sent' | 'viewed' | 'submitted' | 'completed';
  dateCreated: Date;
  dateCompleted?: Date;
}