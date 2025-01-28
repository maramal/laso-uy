"use client"

import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import PromoTeaser from '@/components/promo-teaser';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full dark:bg-gray-900">
      <HeroSection />
      <ServicesSection />
      {/*<PortfolioSection />*/}
      {/*<TestimonialsSection />*/}
      <PromoTeaser />
    </div>
  );
}