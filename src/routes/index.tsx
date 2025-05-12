import { createFileRoute } from '@tanstack/react-router';
import LandingHeader from '@/components/landingpage/landing-header';
import LandingHero from '@/components/landingpage/landing-hero';
import LandingTab from '@/components/landingpage/landing-tab';
import LandingFeature from '@/components/landingpage/landing-feat';
import { LandingCarousel } from '@/components/landingpage/landing-carousel';
import { LandingTeam } from '@/components/landingpage/landing-team';
import { LandingSpinner } from '@/components/landingpage/landing-spinner';
import LandingFooter from '@/components/landingpage/landing-footer';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <>
      <LandingHeader />
      <LandingHero />
      <LandingTab />
      <LandingCarousel />
      <LandingFeature />
      <LandingSpinner />
      <LandingTeam />
      <LandingFooter />
    </>
  );
}
