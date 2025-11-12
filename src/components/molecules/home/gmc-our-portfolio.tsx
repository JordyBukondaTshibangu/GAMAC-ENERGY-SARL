import Image from "next/image";
import Link from "next/link";

function GMCOurPortfolio() {
  return (
    <section className="max-w-7xl mx-auto py-10 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
      <h2 className="w-full lg:w-1/3 h-full flex flex-col gap-20 text-3xl leading-12 uppercase font-bold">
        Notre Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="flex flex-col gap-8 items-center">
            <Image
              width={800}
              height={600}
              alt="GAMAC ENERGY SARL"
              src="/assets/images/mission-1.jpg"
            />
            <h4 className="text-3xl">Lorem Ipsium</h4>
            <p className="text-lg leading-10 font-normal text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              minus quod, dolorum dignissimos .
            </p>
            <Link
              href="#"
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
