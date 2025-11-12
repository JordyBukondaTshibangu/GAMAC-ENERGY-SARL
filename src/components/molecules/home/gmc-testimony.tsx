import ClientCard from "@/components/atoms/client-card";

function GMCTestimonies() {
  return (
    <section className="max-w-7xl mx-auto w-full flex flex-col px-4 py-10 lg:py-20 gap-20">
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <h3 className="font-medium text-md md:text-lg text-[#B71C1C]">
          Commentaires des clients
        </h3>
        <h2 className="text-xl md:text-3xl font-medium text-black leading-10">
          Les Avis de nos Clients
        </h2>
        <p className="text-[#7A7A7A] leading-8 max-w-xl">
          Nos clients témoignent de leur satisfaction à travailler avec Malaika
          Services et des résultats obtenus grâce à notre expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ClientCard
          name="Jordy Tshibangu"
          title="Software Engineer"
          imageSrc="/assets/images/user-1.jpg"
          feedback="GAMAC nous a permis de simplifier la gestion de notre comptabilité tout en assurant une conformité parfaite avec les exigences locales."
        />
        <ClientCard
          name="David Kasongo"
          title="Entrepreneur"
          imageSrc="/assets/images/user-2.jpg"
          feedback="GAMAC m'a offert des services fiable, réactif et à l'écoute. Grâce à eux, je peux me concentrer sur mon activité sans me soucier des aspects fiscaux."
        />
      </div>
    </section>
  );
}

export default GMCTestimonies;
