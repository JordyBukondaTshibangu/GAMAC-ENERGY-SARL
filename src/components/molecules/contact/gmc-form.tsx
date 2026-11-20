"use client";

import Button from "@/components/atoms/button";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const requestKeys = ["activites", "achats", "innovation", "presse", "autres"] as const;

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const fieldClass =
  "w-full rounded-[3px] border border-ink/20 bg-white px-4 py-3 text-[16px] text-text placeholder:text-muted/60 transition-colors focus:border-ink focus:outline-none focus:ring-2 focus:ring-sun/60";

/**
 * The site has no mail backend yet, so the form opens the visitor's email app
 * with the request pre-filled and addressed to GAMAC.
 */
const GMCForm = ({ recipient }: { recipient: string }) => {
  const t = useTranslations("Contact");
  const [request, setRequest] = useState<(typeof requestKeys)[number]>("activites");
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestTitle = t(`request_types.items.${request}.title`);
    const subject = `[${requestTitle}] ${formData.firstName} ${formData.lastName}`;
    const body = [
      formData.message,
      "",
      `${formData.firstName} ${formData.lastName}`,
      formData.email,
      formData.phone,
    ]
      .filter((line, i) => i < 2 || line)
      .join("\n");
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = (
    name: keyof FormData,
    type: string,
    required: boolean,
    autoComplete: string
  ) => (
    <div>
      <label htmlFor={name} className="mb-2 block text-[14px] font-semibold text-ink">
        {t(`bottom_form.labels.${snake(name)}`)}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={t(`bottom_form.placeholders.${snake(name)}`)}
        value={formData[name]}
        onChange={onChange}
        className={fieldClass}
      />
    </div>
  );

  return (
    <div>
      <h2 className="display text-[clamp(2rem,3.6vw,3rem)] text-ink">
        {t("form_section.title")}
      </h2>
      <p className="mt-4 max-w-[36rem] text-[17px] text-muted">
        {t("form_section.description")}
      </p>

      <form onSubmit={onSubmit} className="mt-10 space-y-8">
        <fieldset>
          <legend className="mb-3 text-[14px] font-semibold text-ink">
            {t("form_section.request_label")}
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {requestKeys.map((key) => {
              const checked = request === key;
              return (
                <label
                  key={key}
                  className={`flex cursor-pointer gap-3 border p-4 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-sun ${
                    checked
                      ? "border-ink bg-ink text-white"
                      : "border-ink/15 bg-white text-ink hover:border-ink/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="request"
                    value={key}
                    checked={checked}
                    onChange={() => setRequest(key)}
                    className="sr-only"
                  />
                  <span
                    className={`mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full border-2 ${
                      checked ? "border-sun" : "border-ink/30"
                    }`}
                    aria-hidden
                  >
                    {checked && <span className="h-1.5 w-1.5 rounded-full bg-sun" />}
                  </span>
                  <span>
                    <span className="block text-[16px] font-semibold">
                      {t(`request_types.items.${key}.title`)}
                    </span>
                    <span
                      className={`mt-1 block text-[14px] leading-snug ${
                        checked ? "text-white/70" : "text-muted"
                      }`}
                    >
                      {t(`request_types.items.${key}.description`)}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="grid gap-6 md:grid-cols-2">
          {field("firstName", "text", true, "given-name")}
          {field("lastName", "text", true, "family-name")}
          {field("email", "email", true, "email")}
          {field("phone", "tel", false, "tel")}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-[14px] font-semibold text-ink">
            {t("bottom_form.labels.message")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder={t("bottom_form.placeholders.message")}
            maxLength={300}
            rows={5}
            value={formData.message}
            onChange={onChange}
            className={fieldClass}
          />
          <p className="mt-1 text-right text-[13px] text-muted">
            {t("form_section.counter", { count: formData.message.length })}
          </p>
        </div>

        <label className="flex items-start gap-3 text-[15px] text-muted">
          <input type="checkbox" required className="mt-1 h-4 w-4 accent-flame" />
          {t("form_section.consent")}
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button type="submit" buttonText={t("bottom_form.button_submit")} />
          {sent && (
            <p role="status" className="text-[15px] text-ink">
              {t("form_section.sent")}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

function snake(name: keyof FormData) {
  return name === "firstName" ? "first_name" : name === "lastName" ? "last_name" : name;
}

export default GMCForm;
