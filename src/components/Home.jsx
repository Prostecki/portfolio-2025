import HomeSocial from "./HomeSocial";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";

export default function Home({ scrollTo }) {
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  return (
    <div className="text-black flex pt-16 mt-14 pb-12 px-8 max-w-[55rem]">
      <div className="-translate-x-20 flex items-center">
        <HomeSocial />
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-teal-500/10 text-blue-500 mb-4">
          Welcome to my portfolio
        </span>
        <div className="relative rounded-full w-64 h-64 flex items-center justify-center">
          <motion.div
            className="absolute w-72 h-72 rounded-full z-0"
            style={{
              background:
                "conic-gradient(from 0deg, #3b82f6, #64748b, #1e293b, #3b82f6, #64748b, #ffffff 99%, #ffffff)",
              padding: "6px",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              boxShadow: "0 0 10px rgba(100, 116, 139, 0.4)",
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />
          <img
            src="/images/me.jpeg"
            alt="Avatar"
            className="w-64 h-64 rounded-full z-10 drop-shadow-lg object-cover cursor-pointer"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* <p className="text-slate-400 text-lg uppercase tracking-widest mb-2">
            Hi, my name is
          </p> */}
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text drop-shadow-md">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r font-bold from-blue-200 via-blue-400 to-blue-700 text-transparent bg-clip-text">
              Mark Taratynov
            </span>
          </h1>
        </motion.div>
        <div className="flex relative items-center justify-between gap-2 border rounded-xl px-4 py-2">
          <span className="relative w-3 h-3">
            <span className="absolute w-full h-full animate-ping bg-slate-400 opacity-75 rounded-full"></span>
            <span className="absolute w-3 h-3 bg-blue-500 rounded-full"></span>
          </span>
          <p className="text-white text-center">Open to work</p>
        </div>
        <h3 className="text-2xl bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text font-bold text-balance text-center">
          I build and enjoy things for the web.
        </h3>
        <p className="text-balance text-slate-100 text-center">
          I'm a fullstack developer who enjoys building web applications that
          are both useful and easy to use. My journey started with curiosity and
          grew through consistent practice. I focus on learning modern
          technologies and applying them in real projects step by step.
        </p>
        <div className="flex gap-5 w-max">
          <div className="bg-slate-200 cursor-pointer border-slate-200 text-black w-[10rem] rounded-lg shadow-md hover:bg-slate-300 hover:text-black duration-300">
            <a
              href="https://taratynov-cv-page.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 justify-center py-2 px-4"
            >
              Link to CV
              <IoIosArrowRoundBack
                style={{
                  color: "black",
                }}
                size={30}
                className="arrow-shake"
              />
            </a>
          </div>
          <button
            onClick={() => scrollToSection(scrollTo.getInTouchRef)}
            className="border focus-visible:ring-2 border-slate-400 text-white w-max px-4 rounded-lg shadow-md py-2 hover:bg-gray-800 duration-300"
          >
            Contact me!
          </button>
        </div>
        <div className="w-4 flex justify-center">
          {/* <FaArrowDownLong
            style={{ color: "white" }}
            className="size-6  animate-bounce mt-6 cursor-pointer"
            size={25}
          /> */}
        </div>
      </div>
    </div>
  );
}
