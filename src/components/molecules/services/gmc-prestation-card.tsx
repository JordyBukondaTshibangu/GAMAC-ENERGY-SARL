import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PrestationCardProps = {
  link: string;
  title: string;
  image: string;
  order?: number;
  description: string;
};

export default function GMCPrestationServiceCard({
  link,
  order,
  title,
  image,
  description,
}: PrestationCardProps) {
  console.log("Link", link);
  return (
    <div
      className={`max-w-7xl mx-auto w-full flex flex-col gap-10 md:flex-row items-center bg-white ${
        order! % 2 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="hidden lg:flex rounded-xl md:min-w-[50%]">
        <Image
          src={image}
          alt={title}
          width={900}
          height={900}
          className="w-full min-w-[500px] 2xl:min-w-[900px] lg:min-h-[600px] h-auto object-cover rounded-xl"
        />
      </div>

      <div
        className={`w-full lg:min-w-[50%] space-y-5 bg-slate-50 p-10  xl:py-6  ${
          order! % 2
            ? "lg:translate-x-40 2xl:translate-x-25"
            : "lg:-translate-x-40 2xl:translate-x-10"
        }`}
      >
        <h2 className="text-2xl xl:text-3xl leading-10 xl:leading-10 font-bold text-gray-900">
          {title}
        </h2>

        <p className="text-base xl:text-lg leading-8 xl:leading-10 font-normal">
          {description}
        </p>

        <Link
          href={`/services/${link}`}
          className="w-fit flex items-center gap-2 bg-[#B71C1C] hover:bg-[#D32F2F] cursor-pointer text-white px-14 py-2 rounded-md font-medium transition-all  text-xl h-14 duration-300"
          type="submit"
        >
          Voir plus
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
