import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import Hero from "@/components/common/gmc-hero";
import GMCOurPartners from "@/components/molecules/home/gmc-our-partners";
import GMCOurPortfolio from "@/components/molecules/home/gmc-our-portfolio";
import GMCTestimonies from "@/components/molecules/home/gmc-testimony";
import GMCWelcome from "@/components/molecules/home/gmc-welcome";
import GMCWhatWeDo from "@/components/molecules/home/gmc-what-we-do";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero
        videos={["assets/videos/hero-2.mp4", "assets/videos/hero-1.mp4"]}
        title="GAMAC   ENERGY  SARL"
        subtitle="Ensemble, donnons vie à une énergie durable."
        description="Chaque projet est une opportunité d’élever notre niveau d’exigence et de prouver que l’Afrique mérite le meilleur. "
        buttonText="ENTREZ EN CONTACT"
        buttonLink="/contact"
        overlayOpacity={0.7}
      />
      <GMCWelcome />
      <GMCWhatWeDo />
      <GMCOurPortfolio />
      <GMCOurPartners />
      <GMCTestimonies />
      <GMCGetInTouch />
    </div>
  );
}
