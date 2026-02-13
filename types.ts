import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  bullets: string[];
}

export interface IndustryItem {
  name: string;
  icon: LucideIcon;
  services: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
}