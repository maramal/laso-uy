"use client"

import dynamic from 'next/dynamic';

import HeroSection from '@/components/hero-section'
import { SkeletonServices } from '@/components/skeleton-services';
import { SkeletonPackage } from '@/components/skeleton-package';
import SimulatorPreview from '@/components/simulator-preview';

// Importación dinámica
const ServicesSection = dynamic(() => import('@/components/services-section'), {
  loading: () => <SkeletonServices />,
  ssr: false
})

const PackageSection = dynamic(() => import('@/components/package-section'), {
  loading: () => <SkeletonPackage />,
  ssr: false
})

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full dark:bg-gray-900">
      <HeroSection />
      <ServicesSection />
      {/*<PortfolioSection />*/}
      {/*<TestimonialsSection />*/}
      <SimulatorPreview />
      <PackageSection />
    </div>
  );
}