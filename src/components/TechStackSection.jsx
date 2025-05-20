import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Chip from "@mui/material/Chip";
import { staggerContainer } from "../utils/animations";

const StackIcon = React.lazy(() => import("tech-stack-icons"));

export default function TechStackSection({ title, icons, theme, order }) {
  const capitalizeFirstLetter = (str) => {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
  };

  return (
    <motion.div
      className={`flex-1 border dark:border-white/20 border-black/10 dark:bg-black/80 bg-white p-5 rounded-xl ${order}`}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      }}
    >
      <h1 className="text-2xl text-center font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-white dark:to-gray-400 mb-5 text-black">
        {title}
      </h1>

      <motion.div
        className="flex flex-wrap ml-4 justify-center gap-1"
        variants={staggerContainer}
      >
        {icons.map((icon, i) => (
          <Suspense
            key={i}
            fallback={<div className="w-4 h-4 bg-gray-200 rounded-full" />}
          >
            <Chip
              icon={<StackIcon name={icon.name} className="w-4 h-4" />}
              label={capitalizeFirstLetter(icon.headline)}
              sx={{
                color: theme === "dark" ? "white" : "black",
                borderColor: "gray",
                backgroundColor:
                  theme === "dark" ? "black" : "rgba(255, 255, 255, 0.8)",
                padding: "1rem 0.5rem",
                "&:hover": {
                  backgroundColor: "rgba(200, 200, 200, 0.8)",
                },
                "& .MuiChip-icon": {
                  filter:
                    theme === "dark"
                      ? "none"
                      : "grayscale(100%) contrast(1.5) brightness(0.9)",
                },
                transition: "all 0.3s ease",
                marginBottom: "0.5rem",
                marginRight: "0.5rem",
              }}
            />
          </Suspense>
        ))}
      </motion.div>
    </motion.div>
  );
}
