// Add React import to provide access to React namespace for ReactNode type
import React from 'react';

export enum CleaningServiceType {
  GENERAL_RESIDENTIAL = 'General Residential Cleaning',
  DETAILED_CLEANING = 'Premium Detailed Cleaning',
  MOVE_IN_OUT = 'Move-In / Move-Out Cleaning',
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: CleaningServiceType;
  message: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}