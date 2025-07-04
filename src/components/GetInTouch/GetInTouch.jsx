/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

export default function GetInTouch() {
  const { t } = useTranslation("common");

  return (
    <div className="w-full min-h-screen max-md:mt-32 flex flex-col items-center justify-center gap-4 text-white overflow-x-hidden px-4">
      <motion.span
        className="inline-block py-1 px-3 rounded-full text-sm font-medium dark:bg-teal-500/10 dark:text-blue-500 bg-slate-300/30 drop-shadow-2xl text-slate-800/60 mb-4"
        style={{ willChange: "opacity, transform" }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
      >
        {t("navigation.contact")}
      </motion.span>

      <h1 className="text-4xl bg-gradient-to-r dark:from-white dark:via-gray-400 dark:to-slate-500 text-transparent bg-clip-text font-[700] from-black via-gray-700 to-slate-500 mb-2">
        {t("contact.title")}
      </h1>

      <div className="flex max-md:flex-col max-md:items-center justify-center gap-5 p-4 w-full max-w-[100vw] box-border">
        <ContactInfo />

        <div className="md:w-1/2 w-full flex flex-col items-center px-0 md:px-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
