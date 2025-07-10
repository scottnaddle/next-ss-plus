// Centralized mock data for consistency across all pages
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
  lastLogin?: string;
  totalEarnings: number;
  taxReportingRequired: boolean;
  dateJoined: string;
}

export type UserRole = 'RSA' | 'SEC' | 'FSM' | 'SA_ADMIN' | 'CHANNEL_ADMIN' | 'SYSTEM_ADMIN';

// Global platform statistics
export const PLATFORM_STATS = {
  totalUsers: 12847,
  activeUsers: 11234,
  totalStores: 147,
  totalPoints: 24500000,
  totalEarnings: 1850000,
  monthlyActiveUsers: 9876,
  newUsersThisMonth: 234,
  averagePointsPerUser: 1908,
  totalRedemptions: 1247,
  totalTaxUsers: 247,
  usersOver600: 23,
  pendingTaxForms: 8,
  completedTaxForms: 15
};

// Mock users data - consistent across all pages
export const MOCK_USERS: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@verizon.com',
    role: 'RSA',
    affiliationCode: 'VZW001',
    storeLocation: 'Verizon Manhattan West',
    points: 2450,
    isActive: true,
    lastLogin: '2024-10-28',
    totalEarnings: 680,
    taxReportingRequired: true,
    dateJoined: '2024-01-15'
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@bestbuy.com',
    role: 'SEC',
    affiliationCode: 'BBY001',
    storeLocation: 'Best Buy Brooklyn',
    points: 1850,
    isActive: true,
    lastLogin: '2024-10-27',
    totalEarnings: 755,
    taxReportingRequired: true,
    dateJoined: '2024-02-20'
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Davis',
    email: 'michael.davis@att.com',
    role: 'RSA',
    affiliationCode: 'ATT001',
    storeLocation: 'AT&T Brooklyn Heights',
    points: 2100,
    isActive: true,
    lastLogin: '2024-10-28',
    totalEarnings: 620,
    taxReportingRequired: true,
    dateJoined: '2024-01-10'
  },
  {
    id: '4',
    firstName: 'Lisa',
    lastName: 'Brown',
    email: 'lisa.brown@tmobile.com',
    role: 'RSA',
    affiliationCode: 'TMO001',
    storeLocation: 'T-Mobile Queens Center',
    points: 1920,
    isActive: false,
    lastLogin: '2024-10-15',
    totalEarnings: 445,
    taxReportingRequired: false,
    dateJoined: '2024-03-05'
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@samsung.com',
    role: 'SA_ADMIN',
    affiliationCode: 'SA001',
    points: 0,
    isActive: true,
    lastLogin: '2024-10-28',
    totalEarnings: 0,
    taxReportingRequired: false,
    dateJoined: '2023-12-01'
  },
  {
    id: '6',
    firstName: 'Emily',
    lastName: 'Chen',
    email: 'emily.chen@verizon.com',
    role: 'FSM',
    affiliationCode: 'VZW002',
    region: 'Northeast',
    points: 3200,
    isActive: true,
    lastLogin: '2024-10-28',
    totalEarnings: 750,
    taxReportingRequired: true,
    dateJoined: '2024-01-08'
  },
  {
    id: '7',
    firstName: 'Robert',
    lastName: 'Martinez',
    email: 'robert.martinez@att.com',
    role: 'RSA',
    affiliationCode: 'ATT002',
    storeLocation: 'AT&T Dallas Downtown',
    points: 2680,
    isActive: true,
    lastLogin: '2024-10-27',
    totalEarnings: 590,
    taxReportingRequired: false,
    dateJoined: '2024-02-14'
  },
  {
    id: '8',
    firstName: 'Jennifer',
    lastName: 'Taylor',
    email: 'jennifer.taylor@bestbuy.com',
    role: 'SEC',
    affiliationCode: 'BBY002',
    storeLocation: 'Best Buy Chicago',
    points: 2150,
    isActive: true,
    lastLogin: '2024-10-28',
    totalEarnings: 485,
    taxReportingRequired: false,
    dateJoined: '2024-01-22'
  },
  {
    id: '9',
    firstName: 'Christopher',
    lastName: 'Anderson',
    email: 'christopher.anderson@tmobile.com',
    role: 'RSA',
    affiliationCode: 'TMO002',
    storeLocation: 'T-Mobile Miami Beach',
    points: 1780,
    isActive: true,
    lastLogin: '2024-10-26',
    totalEarnings: 420,
    taxReportingRequired: false,
    dateJoined: '2024-03-10'
  },
  {
    id: '10',
    firstName: 'Amanda',
    lastName: 'Thompson',
    email: 'amanda.thompson@verizon.com',
    role: 'RSA',
    affiliationCode: 'VZW003',
    storeLocation: 'Verizon Bronx Plaza',
    points: 2320,
    isActive: true,
    lastLogin: '2024-10-28',
    totalEarnings: 655,
    taxReportingRequired: true,
    dateJoined: '2024-01-30'
  },
  // Add more users to reach realistic numbers
  ...Array.from({ length: 12837 }, (_, i) => ({
    id: (i + 11).toString(),
    firstName: `User${i + 11}`,
    lastName: `LastName${i + 11}`,
    email: `user${i + 11}@partner.com`,
    role: ['RSA', 'SEC', 'FSM'][i % 3] as UserRole,
    affiliationCode: `CODE${i + 11}`,
    storeLocation: `Store Location ${i + 11}`,
    points: Math.floor(Math.random() * 3000) + 500,
    isActive: Math.random() > 0.1,
    lastLogin: '2024-10-' + (Math.floor(Math.random() * 28) + 1).toString().padStart(2, '0'),
    totalEarnings: Math.floor(Math.random() * 800) + 100,
    taxReportingRequired: Math.random() > 0.9,
    dateJoined: '2024-' + (Math.floor(Math.random() * 10) + 1).toString().padStart(2, '0') + '-' + (Math.floor(Math.random() * 28) + 1).toString().padStart(2, '0')
  }))
];

// Store data
export const STORES_DATA = [
  {
    id: 1,
    name: 'Verizon Manhattan West',
    location: 'New York, NY',
    region: 'Northeast',
    district: 'Metro NY',
    area: 'Manhattan',
    healthScore: 45,
    lastVisit: '2024-10-15',
    nextVisit: '2024-11-01',
    zeroSales: true,
    activeRSAs: 3,
    totalRSAs: 5,
    monthlySales: 12,
    target: 35,
    status: 'urgent'
  },
  {
    id: 2,
    name: 'AT&T Brooklyn Heights',
    location: 'Brooklyn, NY',
    region: 'Northeast',
    district: 'Metro NY',
    area: 'Brooklyn',
    healthScore: 78,
    lastVisit: '2024-10-20',
    nextVisit: '2024-11-02',
    zeroSales: false,
    activeRSAs: 4,
    totalRSAs: 4,
    monthlySales: 28,
    target: 30,
    status: 'good'
  },
  {
    id: 3,
    name: 'T-Mobile Queens Center',
    location: 'Queens, NY',
    region: 'Northeast',
    district: 'Metro NY',
    area: 'Queens',
    healthScore: 62,
    lastVisit: '2024-10-18',
    nextVisit: '2024-11-03',
    zeroSales: true,
    activeRSAs: 2,
    totalRSAs: 4,
    monthlySales: 18,
    target: 25,
    status: 'attention'
  },
  {
    id: 4,
    name: 'Verizon Bronx Plaza',
    location: 'Bronx, NY',
    region: 'Northeast',
    district: 'Metro NY',
    area: 'Bronx',
    healthScore: 85,
    lastVisit: '2024-10-22',
    nextVisit: '2024-11-05',
    zeroSales: false,
    activeRSAs: 5,
    totalRSAs: 5,
    monthlySales: 32,
    target: 28,
    status: 'excellent'
  },
  // Add more stores to reach 147 total
  ...Array.from({ length: 143 }, (_, i) => ({
    id: i + 5,
    name: `Store ${i + 5}`,
    location: `City ${i + 5}, State`,
    region: ['Northeast', 'Southeast', 'Midwest', 'West'][i % 4],
    district: `District ${i + 5}`,
    area: `Area ${i + 5}`,
    healthScore: Math.floor(Math.random() * 40) + 60,
    lastVisit: '2024-10-' + (Math.floor(Math.random() * 28) + 1).toString().padStart(2, '0'),
    nextVisit: '2024-11-' + (Math.floor(Math.random() * 28) + 1).toString().padStart(2, '0'),
    zeroSales: Math.random() > 0.8,
    activeRSAs: Math.floor(Math.random() * 5) + 1,
    totalRSAs: Math.floor(Math.random() * 3) + 3,
    monthlySales: Math.floor(Math.random() * 30) + 10,
    target: Math.floor(Math.random() * 20) + 25,
    status: ['good', 'attention', 'excellent', 'urgent'][Math.floor(Math.random() * 4)]
  }))
];

// Learning modules data
export const LEARNING_MODULES = [
  {
    id: 1,
    title: 'Galaxy S24 Series Deep Dive',
    description: 'Complete product knowledge for Galaxy S24, S24+, and S24 Ultra',
    category: 'product-knowledge',
    status: 'published',
    estimatedTime: 60,
    points: 200,
    difficulty: 'advanced',
    views: 2847,
    completions: 2156,
    rating: 4.9,
    lastUpdated: '2024-10-15',
    author: 'Samsung Training Team'
  },
  {
    id: 2,
    title: 'Advanced Sales Techniques',
    description: 'Master the art of consultative selling and objection handling',
    category: 'sales-techniques',
    status: 'published',
    estimatedTime: 90,
    points: 250,
    difficulty: 'advanced',
    views: 1923,
    completions: 1456,
    rating: 4.7,
    lastUpdated: '2024-10-10',
    author: 'Sales Excellence Team'
  },
  {
    id: 3,
    title: 'Privacy & Compliance Essentials',
    description: 'Understanding GDPR, CCPA, and Samsung privacy policies',
    category: 'compliance',
    status: 'draft',
    estimatedTime: 40,
    points: 150,
    difficulty: 'intermediate',
    views: 0,
    completions: 0,
    rating: 0,
    lastUpdated: '2024-10-28',
    author: 'Legal Team'
  },
  {
    id: 4,
    title: 'Galaxy Watch 7 Features',
    description: 'New health features and technical specifications',
    category: 'product-knowledge',
    status: 'review',
    estimatedTime: 45,
    points: 175,
    difficulty: 'intermediate',
    views: 156,
    completions: 89,
    rating: 4.5,
    lastUpdated: '2024-10-25',
    author: 'Product Team'
  },
  {
    id: 5,
    title: 'Best Buy Store Protocols',
    description: 'Store-specific guidelines for Samsung displays and customer experience',
    category: 'store-training',
    status: 'published',
    estimatedTime: 30,
    points: 100,
    difficulty: 'beginner',
    views: 892,
    completions: 745,
    rating: 4.6,
    lastUpdated: '2024-10-20',
    author: 'Channel Team'
  }
];

// Channel breakdown data
export const CHANNEL_BREAKDOWN = [
  { channel: 'Verizon', users: 4230, active: 3890, points: '856K' },
  { channel: 'AT&T', users: 3850, active: 3420, points: '742K' },
  { channel: 'T-Mobile', users: 2940, active: 2680, points: '631K' },
  { channel: 'Best Buy', users: 1827, active: 1650, points: '234K' }
];

// Rewards data
export const REWARDS_STATS = {
  totalRedemptions: PLATFORM_STATS.totalRedemptions,
  totalValue: 45680,
  activeSweepstakes: 3,
  monthlyBudget: 50000,
  spent: 32450
};

// Tax management data
export const TAX_STATS = {
  totalUsers: PLATFORM_STATS.totalTaxUsers,
  over600: PLATFORM_STATS.usersOver600,
  pendingForms: PLATFORM_STATS.pendingTaxForms,
  completedForms: PLATFORM_STATS.completedTaxForms,
  totalTaxableAmount: 18450
};

// Helper functions
export const getUsersByRole = (role: UserRole) => MOCK_USERS.filter(user => user.role === role);
export const getActiveUsers = () => MOCK_USERS.filter(user => user.isActive);
export const getUsersOver600 = () => MOCK_USERS.filter(user => user.totalEarnings >= 600);
export const getTotalPoints = () => MOCK_USERS.reduce((sum, user) => sum + user.points, 0);
export const getTotalEarnings = () => MOCK_USERS.reduce((sum, user) => sum + user.totalEarnings, 0);