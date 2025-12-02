function GMCWhatWeDo() {
  return (
    <div className="relative bg-[url('/assets/images/mission-1.jpg')] bg-cover bg-center w-full min-h-[700px] flex flex-col text-white gap-8">
      <div className="flex flex-col items-center w-full h-full bg-black/70 gap-24 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-32">
          <h2 className="w-full lg:w-1/3 h-full flex flex-col gap-20 text-3xl leading-12">
            <span className="font-bold uppercase">Ce que nous faisons</span>
            <span className="text-2xl leading-10">
              Depuis notre création, nous avons fait un choix : devenir un
              partenaire stratégique pour construire l’avenir énergétique de
              l’Afrique.
            </span>
          </h2>
          <div className="w-full lg:w-1/2 self-end flex flex-col gap-6 h-full">
            <p className="text-xl leading-10 font-normal">
              Nos équipes allient expertise locale, innovation technologique et
              standards internationaux pour offrir des solutions complètes,
              robustes et adaptées aux réalités du terrain. Chez GAMAC Energy,
              l’énergie n’est pas seulement un secteur,{" "}
              <span className="font-bold italic">
                c’est un levier de croissance, de résilience et de
                transformation socio-économique.
              </span>
            </p>
            <p className="text-xl leading-10 font-normal">
              Nous intervenons sur toute la chaîne de valeur énergétique :
            </p>
            <ul className="flex flex-col gap-2 px-10 list-disc">
              <li className="text-xl font-medium  leading-normal ">
                Études & ingénierie
              </li>
              <li className="text-xl font-medium  leading-normal ">
                Construction et maintenance
              </li>{" "}
              <li className="text-xl font-medium  leading-normal ">
                Modernisation et mise en conformité
              </li>{" "}
              <li className="text-xl font-medium  leading-normal ">
                Approvisionnement en équipements spécialisés
              </li>{" "}
              <li className="text-xl font-medium  leading-normal ">
                Assistance technique, supervision et contrôle
              </li>{" "}
            </ul>

            <p className="text-xl leading-10 font-normal">
              Chaque projet que nous concevons vise à{" "}
              <span className="font-bold italic">
                améliorer l’accès à l’énergie, renforcer les infrastructures et
                créer de la valeur locale durable.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GMCWhatWeDo;
