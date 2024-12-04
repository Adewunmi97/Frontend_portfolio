import { Hero } from '../components/home/Hero';
import { Navbar } from '../components/layout/Navbar';

export function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}