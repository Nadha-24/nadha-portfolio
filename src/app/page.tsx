import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      {/* Recruiter-focused Hero section */}
      <Hero />

      {/* Numerical statistics counter */}
      <Stats />
    </div>
  );
}
