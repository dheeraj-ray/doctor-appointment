import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { TrustStats } from '@/components/landing/TrustStats';
import { Specializations } from '@/components/landing/Specializations';
import { DoctorCards } from '@/components/landing/DoctorCards';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { WhyChooseUs } from '@/components/landing/WhyChooseUs';
import { ProductPreview } from '@/components/landing/ProductPreview';
import { Testimonials } from '@/components/landing/Testimonials';
import { DoctorCTA } from '@/components/landing/DoctorCTA';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-0">
        <Hero />
        <TrustStats />
        <Specializations />
        <DoctorCards />
        <HowItWorks />
        <WhyChooseUs />
        <ProductPreview />
        <Testimonials />
        <DoctorCTA />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}