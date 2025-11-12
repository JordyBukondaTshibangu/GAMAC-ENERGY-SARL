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
          <span className="">Lorem Ipsum</span>
          <span className="font-bold uppercase">
            Lorem Ipsum Dolor sit amet consectetur
          </span>
        </h2>
        <p className="text-lg leading-10 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, itaque
          expedita aut totam nisi eligendi corporis incidunt, voluptatem debitis
          voluptate omnis soluta, perspiciatis harum sunt ut neque ducimus
          distinctio. Unde assumenda nulla at, soluta accusantium tempora eaque
          beatae error quidem nobis reprehenderit similique sit suscipit rem
          placeat obcaecati vitae architecto, quisquam facilis perspiciatis.
          Quos, perferendis. Consequuntur. Quos, perferendis. Consequuntur.
          Quos, perferendis. Consequuntur.
        </p>
      </div>
    </section>
  );
}

export default GMCWelcome;
