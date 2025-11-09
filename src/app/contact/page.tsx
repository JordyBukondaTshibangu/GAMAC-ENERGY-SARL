import Hero from "@/components/common/gmc-hero";

function ContactPage() {
  return (
    <Hero
      videos={["assets/videos/contact.mp4"]}
      title="CONTACTEZ-NOUS"
      subtitle="Ensemble, faisons briller un futur vert."
      description="Une question, un projet ou une idée à partager ? Notre équipe est à votre écoute pour vous accompagner dans vos démarches énergétiques. Ensemble, donnons vie à des solutions durables et responsables."
      overlayOpacity={0.7}
    />
  );
}

export default ContactPage;
