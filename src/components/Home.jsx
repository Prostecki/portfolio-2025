import HomeSocial from "./HomeSocial";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";

export default function Home({ scrollTo }) {
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.45,
      },
    }),
  };

  return (
    <div className="text-black flex pt-16 mt-14 pb-12 px-8 max-w-[55rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-6 items-center justify-center"
      >
        <motion.span
          custom={0}
          variants={itemVariants}
          className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-teal-500/10 text-blue-500 mb-4"
        >
          Welcome to my portfolio
        </motion.span>

        <motion.div
          custom={1}
          variants={itemVariants}
          className="relative rounded-full w-64 h-64 flex items-center justify-center"
        >
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            animate={{
              boxShadow: [
                "0 0 110px rgba(59, 130, 246, 0.7)",
                "0 0 120px rgba(59, 130, 246, 1)",
                "0 0 110px rgba(59, 130, 246, 0.7)",
              ],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <img
            custom={1.5}
            variants={itemVariants}
            src="/images/me.jpeg"
            alt="Avatar"
            className="w-64 h-64 rounded-full z-10 drop-shadow-lg object-cover cursor-pointer"
          />
        </motion.div>

        <motion.h1
          custom={2}
          variants={itemVariants}
          style={{
            textShadow:
              "0px 4px 8px rgba(255, 255, 255, .05), 0px 8px 30px rgba(255, 255, 255, .25)",
          }}
          className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text drop-shadow-md text-center"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r font-bold from-blue-200 via-blue-400 to-blue-700 text-transparent bg-clip-text">
            Mark Taratynov
          </span>
        </motion.h1>

        <motion.div
          custom={3}
          variants={itemVariants}
          className="flex relative items-center justify-between gap-2 border rounded-xl px-4 py-2"
        >
          <span className="relative w-3 h-3">
            <span className="absolute w-full h-full animate-ping bg-slate-400 opacity-75 rounded-full"></span>
            <span className="absolute w-3 h-3 bg-blue-500 rounded-full"></span>
          </span>
          <p className="text-white text-center">Open to work</p>
        </motion.div>

        <motion.h3
          custom={4}
          variants={itemVariants}
          className="text-2xl bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text font-bold text-balance text-center"
        >
          I build and enjoy things for the web.
        </motion.h3>

        <motion.p
          custom={5}
          variants={itemVariants}
          className="text-balance text-slate-100 text-center"
        >
          I'm a fullstack developer who enjoys building web applications that
          are both useful and easy to use. My journey started with curiosity and
          grew through consistent practice. I focus on learning modern
          technologies and applying them in real projects step by step.
        </motion.p>

        <motion.div
          custom={6}
          variants={itemVariants}
          className="flex gap-5 w-max"
        >
          <motion.a
            custom={6.1}
            variants={itemVariants}
            href="https://taratynov-cv-page.vercel.app/"
            target="_blank"
            className="bg-slate-200 cursor-pointer border-slate-200 text-black w-[10rem] rounded-lg shadow-md hover:bg-slate-300 hover:text-black duration-300 flex items-center gap-2 justify-center py-2 px-4"
          >
            Link to CV
            <IoIosArrowRoundBack
              style={{ color: "black" }}
              size={30}
              className="arrow-shake"
            />
          </motion.a>
          <motion.button
            custom={6.2}
            variants={itemVariants}
            onClick={() => scrollToSection(scrollTo.getInTouchRef)}
            className="border focus-visible:ring-2 border-slate-400 text-white w-max px-4 rounded-lg shadow-md py-2 hover:bg-gray-800 duration-300"
          >
            Contact me!
          </motion.button>
        </motion.div>
      </motion.div>
      <div className="w-4 flex justify-center"></div>
    </div>
  );
}
