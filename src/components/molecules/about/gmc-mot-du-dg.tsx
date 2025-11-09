import Image from "next/image";

function GMCMotDuDG() {
  return (
    <section className="w-full mx-auto py-20 px-4 sm:px-6 lg:px-8 bg-[#a02c0f]">
      <div className="max-w-7xl mx-auto py-28">
        <h2 className="w-full flex flex-col gap-6 text-5xl mb-16 text-white">
          <span className="">Mots du</span>
          <span className="font-bold uppercase">Directeur General</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
          <Image
            src="/assets/images/mot-du-dg.png"
            alt="GAMAC ENERGY SARL"
            width={800}
            height={600}
          />

          <Image
            src="/assets/images/dg.png"
            alt="GAMAC ENERGY SARL"
            width={800}
            height={600}
            className="lg:hidden xl:block"
          />
        </div>
      </div>
    </section>
  );
}

export default GMCMotDuDG;
