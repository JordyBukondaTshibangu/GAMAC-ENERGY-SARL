import HeroImage from "@/components/common/gmc-hero-image";
import GMCMaterialsList from "@/components/molecules/services/gmc-materials-list";

export default function GMCSPhysicalService() {
  return (
    <div className="w-full flex flex-col gap-20">
      <HeroImage
        title="PRESTATIRES DES TRAVAUX PHYSIQUES"
        image="/assets/images/manual-service.jpg"
        subtitle="Pour un futur plus vert, dès maintenant."
        description=""
        buttonText="ENTREZ EN CONTACT"
        buttonLink="/contact"
        overlayOpacity={0.7}
      />

      <GMCMaterialsList />
    </div>
  );
}
