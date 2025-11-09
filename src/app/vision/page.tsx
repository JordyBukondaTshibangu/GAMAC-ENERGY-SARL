import Hero from "@/components/common/gmc-hero";

function VisionPage() {
  return (
    <div className="">
      <Hero
        videos={["assets/videos/vision.mp4"]}
        title="NOTRE VISION"
        subtitle="L’énergie d’aujourd’hui pour le monde de demain."
        description="Chaque projet est une opportunité d’élever notre niveau d’exigence et de prouver que l’Afrique mérite le meilleur. "
        overlayOpacity={0.7}
      />
    </div>
  );
}

export default VisionPage;
