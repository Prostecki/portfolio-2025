import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { fadeInUp, viewportOptions } from "../utils/animations";

export default function Home({ scrollTo }) {
  const { theme } = useContext(ThemeContext);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-slate-800 flex pt-16 mt-14 pb-12 px-8 max-w-[55rem]">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="flex flex-col gap-6 items-center justify-center"
      >
        <motion.span
          custom={0}
          variants={fadeInUp}
          className="inline-block py-1 px-3 rounded-full text-sm font-medium dark:bg-teal-500/10 dark:text-blue-500 bg-slate-300/30 text-slate-800/60 mb-4"
        >
          Welcome to my portfolio
        </motion.span>

        <motion.div
          custom={1}
          variants={fadeInUp}
          className="relative rounded-full w-40 h-40 flex items-center justify-center"
        >
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            initial={{
              boxShadow:
                theme === "dark"
                  ? "0 0 110px rgba(96, 165, 250, 0.7)"
                  : "0 0 110px rgba(100, 116, 139, 0.6)",
            }}
            animate={{
              boxShadow:
                theme === "dark"
                  ? [
                      "0 0 110px rgba(96, 165, 250, 0.7)",
                      "0 0 120px rgba(147, 197, 253, 1)",
                      "0 0 110px rgba(96, 165, 250, 0.7)",
                    ]
                  : [
                      "0 0 110px rgba(100, 116, 139, 0.6)",
                      "0 0 120px rgba(71, 85, 105, 0.8)",
                      "0 0 110px rgba(100, 116, 139, 0.6)",
                    ],
            }}
          />
          <img
            src="/images/me.jpeg"
            alt="Avatar"
            className="w-40 h-40 rounded-full z-10 object-cover border-2 dark:border-white/40 border-black/40 cursor-pointer"
          />
        </motion.div>

        <motion.h1
          custom={2}
          variants={fadeInUp}
          style={{
            textShadow:
              "0px 4px 8px rgba(255, 255, 255, .05), 0px 8px 30px rgba(255, 255, 255, .25)",
          }}
          className="text-4xl max-sm:text-2xl font-bold tracking-tight text-slate-900 dark:bg-gradient-to-r dark:from-white dark:to-blue-200 dark:text-transparent dark:bg-clip-text text-center"
        >
          Mark Taratynov
        </motion.h1>

        <motion.div
          custom={3}
          variants={fadeInUp}
          className="flex relative items-center justify-between gap-2 border dark:border-slate-300/40 border-black/50 rounded-xl px-4 py-2"
        >
          <span className="relative w-3 h-3">
            <span className="absolute w-full h-full animate-ping bg-slate-400 opacity-75 rounded-full"></span>
            <span className="absolute w-3 h-3 dark:bg-blue-500 bg-green-500 rounded-full"></span>
          </span>
          <p className="dark:text-white text-slate-800 text-center">
            Open to work
          </p>
        </motion.div>

        <motion.h2
          custom={4}
          variants={fadeInUp}
          className="text-2xl dark:bg-gradient-to-r dark:from-white dark:to-gray-400 dark:text-transparent dark:bg-clip-text font-bold text-balance text-center text-slate-800/80"
        >
          I build and enjoy things for the web.
        </motion.h2>

        <motion.p
          custom={5}
          variants={fadeInUp}
          className="text-balance dark:text-slate-100 text-black/90 text-center"
        >
          I'm a fullstack developer who enjoys building web applications that
          are both useful and easy to use. My journey started with curiosity and
          grew through consistent practice. I focus on learning modern
          technologies and applying them in real projects step by step.
        </motion.p>

        <motion.div
          custom={6}
          variants={fadeInUp}
          className="flex gap-4 w-max mx-auto"
        >
          <motion.a
            custom={6.5}
            variants={fadeInUp}
            href="https://taratynov-cv-page.vercel.app/"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 cursor-pointer border border-black/40 hover:border-black/60 hover:shadow-md duration-300 dark:text-white dark:border-white/40"
          >
            Link to CV
            <IoIosArrowRoundBack
              style={{ color: theme === "dark" ? "white" : "black" }}
              size={30}
              className="arrow-shake"
            />
          </motion.a>

          <motion.button
            custom={7}
            variants={fadeInUp}
            onClick={() => scrollToSection(scrollTo.getInTouchRef)}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 cursor-pointer border border-black/40 hover:border-black/60 hover:shadow-md duration-300 bg-blue-200/80 dark:bg-blue-600/95 dark:text-white"
          >
            Contact me!
          </motion.button>
        </motion.div>
      </motion.div>
      <div className="w-4 flex justify-center"></div>
    </div>
  );
}
