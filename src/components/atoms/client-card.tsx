import { Quote } from "lucide-react";
import Image from "next/image";

function ClientCard({
  name,
  title,
  imageSrc,
  feedback,
}: {
  name: string;
  title: string;
  imageSrc: string;
  feedback: string;
}) {
  return (
    <div className="flex flex-col gap-6 bg-white rounded-lg shadow-lg p-8 w-full">
      <div className="flex items-center justify-between gap-4">
        <div className="w-10 h-10 overflow-hidden rounded-full flex items-center justify-center">
          <Image
            src={imageSrc}
            width={60}
            height={60}
            alt={name}
            className="object-cover rounded-full h-full w-full"
            priority
          />
        </div>
        <div className="flex-1">
          <span className="block font-medium text-black text-lg">{name}</span>
          <span className="text-[#7A7A7A]">{title}</span>
        </div>
        <Quote color="#B71C1C" size={30} />
      </div>
      <p className="text-[#7A7A7A] leading-7">{feedback}</p>
    </div>
  );
}

export default ClientCard;
