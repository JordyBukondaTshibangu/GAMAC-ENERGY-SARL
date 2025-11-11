import HeroImage from "@/components/common/gmc-hero-image";
import GMCServiceList from "@/components/molecules/services/gmc-service-list";

import { studiesAndEngineering } from "@/utils/services-data";

export default function GMCSIntellectualService() {
  return (
    <div className="w-full flex flex-col gap-20">
      <HeroImage
        title="PRESTATIRES DES SERVICES INTELLECTUELS"
        image="/assets/images/mission-2.jpg"
        subtitle="Pour un futur plus vert, dès maintenant."
        description=""
        buttonText="ENTREZ EN CONTACT"
        buttonLink="/contact"
        overlayOpacity={0.7}
      />

      <GMCServiceList cases={studiesAndEngineering} />
    </div>
  );
}
