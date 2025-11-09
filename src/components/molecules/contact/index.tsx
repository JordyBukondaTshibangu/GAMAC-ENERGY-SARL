"use client";

import React, { useState } from "react";
import GMCForm from "./gmc-form";
import GMCMap from "./gmc-map";
import GMCContactSidebar from "./gmc-sidebar";

type RequestType = {
  id: number;
  title: string;
  description: string;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const requestTypes: RequestType[] = [
  {
    id: 1,
    title: "Nos activités",
    description: "Nos solutions peuvent vous aider à atteindre vos objectifs.",
  },
  {
    id: 2,
    title: "Achats et approvisionnements",
    description:
      "Devenez fournisseur et contribuez à notre chaîne d’approvisionnement durable.",
  },
  {
    id: 3,
    title: "Innovation",
    description:
      "Proposez des idées innovantes et durables pour renforcer nos projets.",
  },
  {
    id: 4,
    title: "Presse et collaborations éditoriales",
    description:
      "Proposez des collaborations, des interviews ou des articles éditoriaux.",
  },
  {
    id: 5,
    title: "Autres demandes",
    description: "Pour toute demande générale ou non spécifiée.",
  },
];
const GMCContact: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  const [selectedRequest, setSelectedRequest] = useState<RequestType>(
    requestTypes[0]
  );

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <GMCForm
        formData={formData}
        selectedRequest={selectedRequest}
        handleInputChange={handleInputChange}
        setOpenSidebar={setOpenSidebar}
      />

      <GMCMap />

      {openSidebar && (
        <GMCContactSidebar
          isOpen={openSidebar}
          requestTypes={requestTypes}
          selectedRequest={selectedRequest}
          setSelectedRequest={setSelectedRequest}
          onOverlayClick={() => setOpenSidebar(false)}
        />
      )}
    </section>
  );
};

export default GMCContact;
