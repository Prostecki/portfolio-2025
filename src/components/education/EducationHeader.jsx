import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { viewportOptions } from "../../utils/animations";

export default function EducationHeader() {
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOptions}
      variants={{
        hidden: { opacity: 0, y: 60 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay: 0 },
        },
      }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl max-md:text-3xl font-extrabold text-transparent bg-clip-text drop-shadow-xl bg-gradient-to-r dark:from-white dark:to-gray-500 from-slate-600 to-gray-600">
        {t("experience.educationTitle")}
      </h2>
      <p className="text-lg sm:text-xl text-gray-400 mt-4">
        {t("experience.educationSubtitle")}
      </p>
    </motion.div>
  );
}
