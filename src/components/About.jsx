import { forwardRef, useContext } from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import "animate.css";
import { ThemeContext } from "../context/ThemeContext";

const About = forwardRef((_, ref) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        delay: index * 0.15,
      },
    }),
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="about"
      ref={ref}
      className="flex flex-col items-center justify-center w-full min-h-screen pt-24 pb-16 px-6 scroll-mt-20"
    >
      <motion.div
        custom={0}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-2"
      >
        <span className="inline-block py-1 px-3 rounded-full text-xs font-medium dark:bg-teal-500/10 dark:text-blue-500 bg-slate-300/30 drop-shadow-2xl text-slate-800/60 mb-4">
          About
        </span>
      </motion.div>

      <motion.div
        custom={1}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-8"
      >
        <h1 className="text-4xl bg-gradient-to-r dark:from-white dark:via-gray-400 dark:to-slate-500 text-transparent bg-clip-text font-[700] from-black via-gray-700 to-slate-500">
          About Me
        </h1>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10 md:gap-16">
        <motion.div
          className="md:mb-0"
          custom={2}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            className="max-w-80 max-md:max-w-60 rounded-3xl shadow-2xl shadow-blue-600/30 border border-slate-300/30"
            src="images/about-section.jpeg"
            alt="profile picture"
            width={320}
            height={480}
          />
        </motion.div>

        <div className="w-full md:w-1/3 max-md:flex max-md:items-center max-md:justify-center max-md:px-4 flex flex-col gap-6 mt-8 md:mt-0">
          <motion.div
            custom={3}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="dark:text-slate-400 text-slate-700 max-md:text-center">
              Since my childhood, I've been eager to solve problems. When I got
              my first PC with an AMD Duron 700MHz processor, if I remember
              correctly, something went wrong. Without the internet, I managed
              to fix it on my own by delving into the BIOS and installing
              different drivers, and I was just 10 y.o.
            </p>
          </motion.div>
          <motion.div
            custom={4}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="dark:text-slate-400 text-slate-700 max-md:text-center">
              I'm highly motivated by a growth mindset, always looking for
              opportunities to learn, improve, and contribute.
            </p>
          </motion.div>
          <motion.div
            custom={5}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="dark:text-slate-400 text-slate-700 max-md:text-center">
              My principle in life is:{" "}
              <span className="italic dark:text-slate-300 text-slate-700/80 font-[500]">
                "Patience and diligent effort are the keys to personal
                development and progress."
              </span>
            </p>
          </motion.div>

          <motion.div
            custom={6}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Button
              component="a"
              href="https://taratynov-cv-page.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color={theme === "dark" ? "primary" : "black"}
              size="medium"
              style={{ borderRadius: "20px" }}
              className="w-[5rem] text-center mt-4 bg-slate-300/80 rounded-full shadow-md duration-200"
            >
              CV
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default About;
