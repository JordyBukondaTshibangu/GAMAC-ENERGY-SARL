import MissionCard from "@/components/atoms/mission-card";

type GMCMissionProps = {
  fournirRef: React.RefObject<HTMLElement | null>;
  valoriserRef: React.RefObject<HTMLElement | null>;
  innoverRef: React.RefObject<HTMLElement | null>;
};

function GMCMission({ fournirRef, valoriserRef, innoverRef }: GMCMissionProps) {
  const missions = [
    {
      title: "FOURNIR UNE ÉNERGIE FIABLE ET ACCESSIBLE",
      description:
        "Notre première mission est de garantir à nos clients, qu’ils soient industriels, institutionnels ou communautaires, une énergie fiable, continue et compétitive. Nous concevons et déployons des solutions adaptées aux besoins locaux, en combinant technologies modernes et expertise terrain. De l’étude de faisabilité à la maintenance, nous accompagnons chaque étape pour offrir une énergie qui soutient la croissance, stimule l’économie et améliore la qualité de vie des populations.",
      image: "/assets/images/mission-1.jpg",
      ref: fournirRef,
    },
    {
      title: "VALORISER LES TALENTS LOCAUX ET RENFORCER LES COMPÉTENCES",
      description:
        "Notre troisième mission est de faire de chaque projet énergétique une opportunité de développement humain. Nous nous engageons à former, employer et accompagner les talents locaux, afin de bâtir une main-d’œuvre qualifiée et fière de contribuer à la souveraineté énergétique de la République Démocratique du Congo et du continent africain.",
      image: "/assets/images/mission-3.jpg",
      ref: valoriserRef,
    },
    {
      title: "INNOVER POUR UN DÉVELOPPEMENT DURABLE",
      description:
        "Notre seconde mission est d’être un acteur d’innovation responsable, en intégrant dans nos projets des solutions quifavorisent la transition énergétique et réduisent l’empreinte carbone.Nous croyons que l’avenir de l’Afrique passe par des infrastructures capables de concilier performance, sécurité etdurabilité.À travers l’électrification rurale, la valorisation des énergies renouvelables et la modernisation des installationsexistantes, nous faisons de chaque projet un levier de développement inclusif pour le continent.",
      image: "/assets/images/mission-2.jpg",
      ref: innoverRef,
    },
  ];
  return (
    <section className="max-w-7xl mx-auto py:10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-20  md:gap-64">
        {missions.map(({ ref, title, description, image }, index) => (
          <MissionCard
            // ref={ref!}
            key={index}
            title={title}
            reverse={index % 2 === 1}
            description={description}
            image={image}
          />
        ))}
      </div>
    </section>
  );
}

export default GMCMission;
