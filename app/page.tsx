"use client";

import {
  BannerSection,
  MainSection,
  GamesSection,
  DailyGamesSection,
  GamePackSection,
} from "@/containers";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <MainSection />
      <GamesSection />
      <DailyGamesSection />
      <GamePackSection />
    </main>
  );
}
