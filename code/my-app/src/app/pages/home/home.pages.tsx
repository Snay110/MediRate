import { HeroSection } from "@/shared/ui/heroSection";
import { AboutSection } from "@/shared/ui/aboutSection";
import { PopularDoctor } from "@/features/doctor/popularDoctors";
import { Footer } from "@/shared/ui/footer";

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <HeroSection />
      <AboutSection />
      <PopularDoctor />
      <Footer />
    </main>
  );
}

export const Component = HomePage;
