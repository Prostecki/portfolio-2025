// hooks/useContactForm.js
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useContactForm = () => {
  const { t } = useTranslation("common");
  const [isSuccess, setIsSuccess] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessageError("");

    // Validate form with RegEx
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !formValues.name ||
      !formValues.email ||
      !formValues.message ||
      formValues.name.length > 50 ||
      formValues.message.length > 500 ||
      !emailRegex.test(formValues.email)
    ) {
      setMessageError(t("contact.form.error"));
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mark.taratynov@yh.nackademin.se",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      if (!response.ok) throw new Error("Send failed");

      // mail was sent successfully
      setIsSuccess(true);
      setFormValues({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(`Error, ${error}`);
      setMessageError(t("contact.form.errorGeneral"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formValues,
    isSubmitting,
    isSuccess,
    messageError,
    handleInputChange,
    handleFormSubmit,
  };
};
