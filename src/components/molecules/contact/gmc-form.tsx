"use client";

import { useTranslations } from "next-intl";
import React from "react";

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

type GMCFormProps = {
  formData: FormData;
  selectedRequest: RequestType;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const GMCForm: React.FC<GMCFormProps> = ({
  formData,
  selectedRequest,
  handleInputChange,
  setOpenSidebar,
}) => {
  const t = useTranslations("Contact");

  return (
    <main className="max-w-7xl mx-auto py-20">
      <div className="flex flex-col gap-52">
        <div className="flex flex-col gap-6">
          <span className="uppercase text-md font-bold">
            {t("form_section.subtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("form_section.title")}
          </h2>

          <button
            className="w-fit bg-[#B71C1C] hover:bg-[#D32F2F] cursor-pointer text-white px-6 py-2 rounded-md duration-300 font-medium transition-all  text-xl h-14"
            onClick={() => setOpenSidebar(true)}
            type="button"
          >
            {t("form_section.button_select_request")}
          </button>
        </div>

        <h2 className="w-fit text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-4 border-[#B71C1C] inline-block pb-1">
          {selectedRequest.title.toUpperCase()}
        </h2>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mt-10">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("bottom_form.labels.first_name")}
          </label>
          <input
            type="text"
            name="firstName"
            placeholder={t("bottom_form.placeholders.first_name")}
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1C5E58] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("bottom_form.labels.last_name")}
          </label>
          <input
            type="text"
            name="lastName"
            placeholder={t("bottom_form.placeholders.last_name")}
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1C5E58] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("bottom_form.labels.email")}
          </label>
          <input
            type="email"
            name="email"
            placeholder={t("bottom_form.placeholders.email")}
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1C5E58] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("bottom_form.labels.phone")}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder={t("bottom_form.placeholders.phone")}
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1C5E58] focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("bottom_form.labels.message")}
          </label>
          <textarea
            name="message"
            placeholder={t("bottom_form.placeholders.message")}
            maxLength={300}
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1C5E58] focus:outline-none"
          />
          <p className="text-right text-sm text-gray-500">
            {formData.message.length}/300 characters
          </p>
        </div>

        <div className="md:col-span-2 flex items-center space-x-2">
          <input type="checkbox" id="privacy" className="w-4 h-4" />
          <label
            htmlFor="privacy"
            className="text-sm text-gray-600 leading-relaxed"
          >
            {/* You can keep this hardcoded or later wire to a more granular translation */}
            Your data will be processed according to our{" "}
            <a href="#" className="text-[#1C5E58] underline">
              privacy policy
            </a>
            .
          </label>
        </div>

        <div className="md:col-span-2 flex justify-between">
          <button
            className="w-64 bg-[#B71C1C] hover:bg-[#D32F2F] cursor-pointer text-white px-6 py-2 rounded-md font-medium transition-all  text-xl h-14 duration-300"
            type="submit"
          >
            {t("bottom_form.button_submit")}
          </button>
        </div>
      </form>
    </main>
  );
};

export default GMCForm;
