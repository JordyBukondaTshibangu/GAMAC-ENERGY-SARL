import Image from "next/image";
import Link from "next/link";

function GMCOurPortfolio() {
  const portfolio = [
    {
      image: "/assets/images/mission-1.jpg",
      title: "Lorem Ipsium",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus quod, dolorum dignissimos .",
    },
    {
      image: "/assets/images/mission-2.jpg",
      title: "Sit Amet Consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus quod, dolorum dignissimos .",
    },
    {
      image: "/assets/images/mission-3.jpg",
      title: "Adipisicing Elit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus quod, dolorum dignissimos .",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto py-10 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
      <h2 className="w-full lg:w-1/3 h-full flex flex-col gap-20 text-3xl leading-12 uppercase font-bold">
        Notre Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-10">
        {portfolio.map(({ image, title, description }, index) => (
          <div key={index} className="flex flex-col gap-8 lg:items-center">
            <Image width={800} height={600} alt={title} src={image} />
            <h4 className="text-3xl">{title}</h4>
            <p className="text-lg leading-10 font-normal lg:text-center lg:max-h-[180px]">
              {description}
            </p>
            <Link
              href="/services"
              className="w-64 bg-[#B71C1C] hover:bg-[#D32F2F] cursor-pointer text-white flex items-center justify-center rounded-md font-medium transition-all  text-xl h-14 duration-300"
            >
              En savoir plus
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GMCOurPortfolio;
