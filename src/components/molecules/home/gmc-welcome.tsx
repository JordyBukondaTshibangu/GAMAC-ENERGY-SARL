import Image from "next/image";

function GMCWelcome() {
  return (
    <section className="max-w-7xl mx-auto py-10 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-14">
      <div className="w-full h-full min-h-[600px] overflow-hidden bg-red-300">
        <Image
          src="/assets/images/mission-1.jpg"
          alt="GAMAC ENERGY SARL"
          width={400}
          height={800}
          className="object-cover w-full min-h-[600px] h-full"
        />
      </div>
      <div className="w-full flex flex-col gap-3">
        <h2 className="w-full flex flex-col gap-2 text-3xl leading-12">
          <span className="text-[16px]">GAMAC Energy</span>
          <span className="font-bold uppercase">Qui sommes-nous</span>
        </h2>
        <p className="text-lg leading-10 font-normal">
          <span className="font-bold">GAMAC Energy SARL</span> est une
          entreprise d’ingénierie et de solutions énergétiques créée en 2023 en
          République Démocratique du Congo. Nous sommes un{" "}
          <span className="font-bold">
            acteur de la transformation énergétique
          </span>
          , spécialisé dans la conception, le développement, la construction et
          la modernisation d’infrastructures électriques et hydrauliques en
          Afrique.
        </p>

        <p className="text-lg leading-10 font-normal">Nous opérons comme :</p>
        <ul className="flex flex-col gap-2 px-10 list-disc">
          <li className="text-md font-medium italic leading-normal ">
            Bureau d’études et d’ingénierie-conseil
          </li>
          <li className="text-md font-medium italic leading-normal ">
            Entreprise EPC (Engineering – Procurement – Construction)
          </li>{" "}
          <li className="text-md font-medium italic leading-normal ">
            Fournisseur d’équipements et matériels électriques spécialisés
          </li>{" "}
        </ul>
      </div>
    </section>
  );
}

export default GMCWelcome;
