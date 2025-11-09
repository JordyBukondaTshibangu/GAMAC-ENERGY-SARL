import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import Hero from "@/components/common/gmc-hero";
import GMCTeamDescription from "@/components/molecules/team/gmc-team-description";
import GMCTeamList from "@/components/molecules/team/gmc-team-list";

function TeamPage() {
  return (
    <div className="flex flex-col gap-20">
      <Hero
        title="NOTRE EQUIPE"
        videos={["assets/videos/team.mp4"]}
        subtitle="Réinventons l’énergie, préservons la planète."
        description="Notre équipe réunit des passionnés engagés pour un avenir durable. Ensemble, nous concevons des solutions d’énergie propre, innovantes et accessibles à tous. Guidés par la même vision, nous transformons l’énergie d’aujourd’hui pour préserver celle de demain."
        buttonText="VOIR PLUS A PROPOS DE NOUS"
        buttonLink="/about"
        overlayOpacity={0.7}
      />
      <GMCTeamDescription />
      <GMCTeamList />
      <GMCGetInTouch />
    </div>
  );
}

export default TeamPage;
