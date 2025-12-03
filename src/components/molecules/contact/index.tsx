"use client";

import { useTranslations } from "next-intl";
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

const GMCContact: React.FC = () => {
  const t = useTranslations("Contact.request_types.items");

  const requestTypes: RequestType[] = [
    {
      id: 1,
      title: t("activites.title"),
      description: t("activites.description"),
    },
    {
      id: 2,
      title: t("achats.title"),
      description: t("achats.description"),
    },
    {
      id: 3,
      title: t("innovation.title"),
      description: t("innovation.description"),
    },
    {
      id: 4,
      title: t("presse.title"),
      description: t("presse.description"),
    },
    {
      id: 5,
      title: t("autres.title"),
      description: t("autres.description"),
    },
  ];

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
    <section className="w-full mx-auto lg:py-20 px-4 sm:px-6 lg:px-8">
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
