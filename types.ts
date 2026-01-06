// Fix: Added React import to resolve namespace error for React.ReactNode
import React from 'react';

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface ValueCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}