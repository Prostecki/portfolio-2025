// components/contact/ContactForm.jsx
import { useContactForm } from "../../hooks/useContactForm";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation("common");
  const {
    formValues,
    isSubmitting,
    isSuccess,
    messageError,
    handleInputChange,
    handleFormSubmit,
  } = useContactForm();

  return (
    <div className="bg-white dark:bg-gray-800 md:w-[30rem] border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm">
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            {t("contact.form.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-gray-100"
            placeholder={t("contact.form.namePlaceholder")}
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            {t("contact.form.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-gray-100"
            placeholder={t("contact.form.emailPlaceholder")}
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            {t("contact.form.message")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-gray-100 resize-none"
            placeholder={t("contact.form.messagePlaceholder")}
            required
          />
        </div>

        {/* Статус сообщения */}
        <div className="min-h-[1.5rem] text-center text-sm">
          {isSuccess ? (
            <p className="text-green-600 dark:text-green-400 font-medium">
              {t("contact.form.success")}
            </p>
          ) : messageError ? (
            <p className="text-red-600 dark:text-red-400 font-medium">
              {messageError}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className="w-full bg-black/80 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 font-medium"
        >
          {isSubmitting
            ? t("contact.form.sending")
            : t("contact.form.sendButton")}
        </button>
      </form>
    </div>
  );
}
