
import React from 'react';
import { 
  Globe, 
  ShieldCheck, 
  Zap, 
  Target, 
  Users, 
  TrendingUp, 
  BookOpen, 
  MessageSquare, 
  Briefcase,
  FileText,
  Search,
  CheckCircle2
} from 'lucide-react';
import { MembershipTier, ValueCard, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#/' },
  { label: 'Platform', href: '#/platform' },
  { label: 'For Investors', href: '#/investors' },
  { label: 'Resources', href: '#/resources' },
  { label: 'Faith', href: '#/faith' },
  { label: 'Dashboard', href: '#/dashboard' },
];

export const VALUE_PROPS: ValueCard[] = [
  {
    title: "One Platform",
    description: "Everything founders need—services, mentorship, resources, and investment access—in one trusted ecosystem.",
    icon: <Globe className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Built for Scale",
    description: "A platform-first model inspired by world-class accelerators and data-driven innovation systems.",
    icon: <Zap className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Canada-Focused",
    description: "Designed to strengthen Canadian innovation while connecting founders to global opportunity.",
    icon: <Target className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Values-Driven",
    description: "Rooted in wisdom, stewardship, and long-term impact based on proven principles.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
  }
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'free',
    name: 'Discovery',
    price: 'Free',
    description: 'Designed to remove barriers for early founders.',
    features: ['Basic startup profile', 'Limited access to resources', 'Visibility within ecosystem', 'Introductory content'],
    cta: 'Start Now'
  },
  {
    id: 'builder',
    name: 'Builder',
    price: '$49/mo',
    description: 'For early-stage founders actively developing ventures.',
    features: ['Enhanced profile markers', 'Ability to request services', 'Access to mentors', 'Foundational tools'],
    cta: 'Select Builder'
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$199/mo',
    description: 'For startups preparing to scale or raise capital.',
    features: ['Priority service access', 'Investment readiness tools', 'Capital signaling visibility', 'Advanced analytics'],
    cta: 'Select Growth',
    highlight: true
  },
  {
    id: 'scale',
    name: 'Scale / Accelerator',
    price: 'Contact Us',
    description: 'For high-potential startups seeking rapid growth.',
    features: ['Dedicated advisory', 'Curated investor intros', 'Accelerator programming', 'Governance support'],
    cta: 'Apply for Scale'
  }
];

export const STEPS = [
  { title: "Create Your Profile", desc: "Showcase what you're building, your stage, and goals.", icon: <UserCircleIcon /> },
  { title: "Access Support", desc: "Request services and connect with vetted mentors.", icon: <SupportIcon /> },
  { title: "Signal Readiness", desc: "Indicate capital needs and track investment readiness.", icon: <SignalIcon /> },
  { title: "Grow with Structure", desc: "Progress through milestones with accountability.", icon: <GrowIcon /> },
];

function UserCircleIcon() { return <Users className="w-10 h-10" />; }
function SupportIcon() { return <Briefcase className="w-10 h-10" />; }
function SignalIcon() { return <TrendingUp className="w-10 h-10" />; }
function GrowIcon() { return <CheckCircle2 className="w-10 h-10" />; }
