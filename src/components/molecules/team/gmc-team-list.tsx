import Image from "next/image";

function GMCTeamList() {
  const members = [
    {
      name: "Tony DINO CHERMANI",
      role: "DIRECTEUR GENERAL",
      image: "/assets/images/membres/dg.png",
    },
    {
      name: "Renelle TSHIBANGU",
      role: "COORDINATRICE",
      image: "/assets/images/membres/coordonatrice.png",
    },
    {
      name: "Rhamia CHAKOPO",
      role: "COORDINATEUR TECHNIQUE",
      image: "/assets/images/membres/coordonateur.png",
    },
    {
      name: "Theoda TSHIBANGU",
      role: "Ingénieur Projet",
      image: "/assets/images/membres/ingenieur.png",
    },

    {
      name: "JOHN MFUTA",
      role: "Business Intelligence & Business developper",
      image: "/assets/images/membres/analiste.png",
    },
    {
      name: "Aline Makambo",
      role: "Responsable Administrative et IT Manager",
      image: "/assets/images/membres/manager.jpg",
      linkedin: "https://www.linkedin.com/in/aline-maka-3121b1390/",
      email: "mailto:alinemaheli@bigemip.com",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full grid grid-cols-1 gap-20">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-full flex flex-col md:flex-row justify-between gap-20"
          >
            <div className="w-full self-start flex flex-col items-center">
              <Image
                src={member.image}
                alt={member.name}
                width={800}
                height={600}
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
            <div>
              <p className="text-lg leading-10 font-normal text-center md:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem molestias perferendis quis odit totam reiciendis veniam
                culpa placeat nemo in dicta modi nesciunt nam et, dolor, tenetur
                architecto vel tempore.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GMCTeamList;
