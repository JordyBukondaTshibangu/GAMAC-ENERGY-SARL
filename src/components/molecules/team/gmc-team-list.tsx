"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

type Member = {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string | null;
  email: string | null;
};

// Shape of a member as it appears in the JSON dictionary
type RawMember = {
  name?: string;
  "name: "?: string; // to handle the typo in your JSON
  role: string;
  description: string;
  linkedin?: string;
  email?: string;
};

function GMCTeamList() {
  const t = useTranslations("Team");

  const rawMembers = t.raw("members") as RawMember[];

  const images = [
    "/assets/images/membres/dg.png",
    "/assets/images/membres/coordonatrice.png",
    "/assets/images/membres/coordonateur.png",
    "/assets/images/membres/ingenieur.png",
    "/assets/images/membres/analiste.png",
    "/assets/images/membres/manager.jpg",
  ];

  const members: Member[] = rawMembers.map(
    (member: RawMember, index: number) => ({
      name: member.name ?? member["name: "] ?? "",
      role: member.role,
      description: member.description,
      image: images[index] ?? images[images.length - 1],
      linkedin: member.linkedin ?? null,
      email: member.email ?? null,
    })
  );

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full grid grid-cols-1 gap-20">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-full flex flex-col md:flex-row justify-between gap-20"
          >
            {/* Profile section */}
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

              {/* Optional links */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm mt-1"
                >
                  LinkedIn
                </a>
              )}
              {member.email && (
                <a
                  href={member.email}
                  className="text-blue-600 underline text-sm"
                >
                  Email
                </a>
              )}
            </div>

            {/* Description */}
            <div>
              <p className="text-lg leading-10 font-normal text-center md:text-left">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GMCTeamList;
