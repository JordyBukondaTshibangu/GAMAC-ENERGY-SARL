import Hero from "@/components/common/gmc-hero";

export default function Home() {
  return (
    <div className="">
      <Hero
        videos={["assets/videos/hero-2.mp4", "assets/videos/hero-1.mp4"]}
        title="GAMAC   ENERGY  SARL"
        subtitle="Ensemble, donnons vie à une énergie durable."
        description="Chaque projet est une opportunité d’élever notre niveau d’exigence et de prouver que l’Afrique mérite le meilleur. "
        buttonText="ENTREZ EN CONTACT"
        buttonLink="/contact"
        overlayOpacity={0.7}
      />
    </div>
  );
}
