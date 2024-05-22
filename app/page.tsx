"use client";
import {
  HomeBannerSection,
  HomeDailyGamesSection,
  HomeGamesSection,
  HomeGamePackSection,
  HomeNewsletterSection,
  HomeTestimonialsSection,
} from "@/containers";

export default function Home() {
  return (
    <main>
      <HomeBannerSection />
      <HomeGamesSection />
      <HomeDailyGamesSection />
      <HomeGamePackSection />
      <HomeTestimonialsSection />
      <HomeNewsletterSection />
    </main>
  );
}
