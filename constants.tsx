import React from 'react';
import { 
  Home, 
  Sparkles, 
  ArrowRightLeft, 
  Clock, 
  ShieldCheck, 
  Star, 
  CheckCircle2,
  SearchCheck,
  Zap,
  Frame,
  Layout,
  Microwave,
  Wind,
  DoorClosed,
  Droplets
} from 'lucide-react';
import { CleaningServiceType, ServiceItem, FeatureItem } from './types';

export const BUSINESS_NAME = "MYS Cleaning";
export const PHONE_NUMBER = "+61 475 979 672";
export const EMAIL_ADDRESS = "hello@myscleaning.com.au";

export const SERVICES: ServiceItem[] = [
  {
    id: 'general-residential',
    title: CleaningServiceType.GENERAL_RESIDENTIAL,
    description: "Consistent, high-standard maintenance cleaning for busy homes. Quality and reliability in every visit.",
    icon: <Home className="w-6 h-6" />
  },
  {
    id: 'detailed-cleaning',
    title: CleaningServiceType.DETAILED_CLEANING,
    description: "Our specialist service focusing on the details others miss. From skirting boards to light sills, we ensure a perfectionist finish.",
    icon: <SearchCheck className="w-6 h-6" />
  },
  {
    id: 'move-in-out',
    title: CleaningServiceType.MOVE_IN_OUT,
    description: "Comprehensive cleaning designed for seamless transitions. Perfect for end-of-lease bond returns or moving into your new sanctuary.",
    icon: <ArrowRightLeft className="w-6 h-6" />
  }
];

export const FEATURES: FeatureItem[] = [
  {
    title: "High Attention to Detail",
    description: "We are meticulous specialists. We focus on the small details—vents, tracks, and corners—that define a truly clean home.",
    icon: <Star className="w-5 h-5" />
  },
  {
    title: "Reliable and Punctual",
    description: "Trust is our foundation. We arrive on time, every time, with a professional attitude and a commitment to excellence.",
    icon: <Clock className="w-5 h-5" />
  },
  {
    title: "Meticulous Standards",
    description: "Using premium equipment and a systematic approach to ensure nothing is overlooked during our cleaning process.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    title: "Satisfaction Focused",
    description: "We don't leave until it's perfect. Our business is built on the satisfaction of Australian homeowners who value quality.",
    icon: <CheckCircle2 className="w-5 h-5" />
  }
];

export const DETAILED_CHECKLIST = [
  { text: "Skirting boards and door frames", icon: <Frame className="w-3 h-3" /> },
  { text: "Light switches and power points", icon: <Zap className="w-3 h-3" /> },
  { text: "Window tracks and sills", icon: <Layout className="w-3 h-3" /> },
  { text: "Behind and under appliances", icon: <Microwave className="w-3 h-3" /> },
  { text: "High-dusting (cobwebs & fans)", icon: <Wind className="w-3 h-3" /> },
  { text: "Cabinet fronts and handles", icon: <DoorClosed className="w-3 h-3" /> },
  { text: "Sanitizing high-touch surfaces", icon: <Sparkles className="w-3 h-3" /> },
  { text: "Detailed bathroom grout cleaning", icon: <Droplets className="w-3 h-3" /> }
];