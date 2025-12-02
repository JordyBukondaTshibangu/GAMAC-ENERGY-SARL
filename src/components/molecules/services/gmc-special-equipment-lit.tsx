import { CheckIcon } from "lucide-react";

export default function GMCSpecializedEquipment() {
  const equipmentList = [
    "Panneaux et batteries solaires",
    "Onduleurs, alternateurs, régulateurs",
    "Transformateurs HT/MT/BT",
    "Appareillage électrique (disjoncteurs, sectionneurs, cellules)",
    "Postes électriques préfabriqués",
    "Turbines hydroélectriques",
    "Câbles, accessoires et équipements de protection",
    "Systèmes de pompage et équipements hydrauliques",
  ];

  return (
    <section className="max-w-7xl mx-auto w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#a02c0f]">
          Approvisionnement en Équipements Spécialisés
        </h2>

        <p className="text-lg leading-10 text-gray-700">
          GAMAC Energy dispose d’un réseau de partenaires internationaux
          permettant d’approvisionner des équipements spécialisés conformes aux
          normes internationales et adaptés aux conditions africaines.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-lg">
          {equipmentList.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <CheckIcon size={24} className="text-amber-500 min-w-10" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
