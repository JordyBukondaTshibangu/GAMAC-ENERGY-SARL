import Hero from "@/components/common/gmc-hero";

function ServicesPage() {
  return (
    <Hero
      title="NOTRE SERVICES"
      videos={["assets/videos/service.mp4"]}
      subtitle="Pour un futur plus vert, dès maintenant."
      description="Nous accompagnons nos clients et partenaires dans la réussite de leurs projets énergétiques en électricité, hydraulique et aval pétrolier. Notre expertise couvre toutes les étapes clés : de la conception à la mise en service, avec un accompagnement technique et stratégique de bout en bout."
      buttonText="ENTREZ EN CONTACT"
      buttonLink="/contact"
      overlayOpacity={0.7}
    />
  );
}

export default ServicesPage;
