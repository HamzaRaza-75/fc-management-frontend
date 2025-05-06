import { createFileRoute } from '@tanstack/react-router';
import logo from '../logo.svg';
import LandingHeader from '@/components/landingpage/landing-header';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return <LandingHeader />;
}
