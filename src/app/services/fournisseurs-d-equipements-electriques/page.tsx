import HeroImage from "@/components/common/gmc-hero-image";
import GMCMaterialsList from "@/components/molecules/services/gmc-materials-list";

export default function GMCSPhysicalService() {
  return (
    <div className="w-full flex flex-col gap-20">
      <HeroImage
        title="FOURNISSEURS D'EQUIPEMENTSÉLECTRIQUES"
        image="/assets/images/solar-panels.jpg"
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
