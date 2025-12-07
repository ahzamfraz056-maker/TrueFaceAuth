export enum UserRole {
  CITIZEN = 'CITIZEN',
  ADMIN = 'ADMIN'
}

export enum DocType {
  AADHAAR = 'Aadhaar Card',
  PAN = 'PAN Card',
  VOTER_ID = 'Voter ID',
  PASSPORT = 'Passport',
  RATION_CARD = 'Ration Card',
  DRIVING_LICENSE = 'Driving License',
  MARKSHEET_10 = '10th Marksheet',
  MARKSHEET_12 = '12th Marksheet',
  OTHER = 'Other'
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  passwordHash: string; // Simulated hash
  role: UserRole;
  aadhaarNumber: string;
  phone: string;
  address: string;
  dob: string;
  faceEmbedding: string | null; // Storing base64 of face for demo
  requiresFaceAuth: boolean;
  isVerified: boolean;
  createdAt: string;
  lastLogin: string | null;
}

export interface Document {
  id: string;
  userId: string;
  type: DocType;
  number: string;
  fileName: string;
  fileType: string;
  uploadDate: string;
  status: 'VERIFIED' | 'PENDING' | 'REJECTED';
}

export interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  timestamp: string;
  details: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}