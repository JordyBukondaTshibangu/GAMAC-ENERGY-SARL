import Hero from "@/components/common/gmc-hero";

function ProjectsPage() {
  return (
    <Hero
      title="NOTRE PROJETS"
      videos={["assets/videos/projets.mp4"]}
      subtitle="La nature nous inspire, nous innovons."
      description="Nous accompagnons nos clients et partenaires dans la réussite de leurs projets énergétiques en électricité, hydraulique et aval pétrolier. Notre expertise couvre le cycle de vie de vos infrastructures énergétiques"
      buttonText="ENTREZ EN CONTACT"
      buttonLink="/contact"
      overlayOpacity={0.7}
    />
  );
}

export default ProjectsPage;
