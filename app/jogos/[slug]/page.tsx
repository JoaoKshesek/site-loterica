"use client";
import { GameBannerSection, GameBetSection, GameInfoSection } from "@/containers";
import { useParams } from "next/navigation";

export default function Game() {
  const params = useParams();
  const { slug } = params;

  return (
    <main>
      <GameBannerSection />
      <GameBetSection />
      <GameInfoSection />
    </main>
  );
}
