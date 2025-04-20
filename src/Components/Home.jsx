import HomeSocial from "./HomeSocial";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="text-black flex pt-32 pb-12 px-8 max-w-[55rem] border-b">
      <div className="-translate-x-20 flex items-center">
        <HomeSocial />
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-teal-500/10 text-blue-500 mb-4">
          Welcome to my portfolio
        </span>
        <div className="rounded-full">
          <img
            src="/src/assets/avatar.jpeg"
            alt="avatar"
            className="w-64 rounded-full z-20 drop-shadow-lg"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-slate-400 text-lg uppercase tracking-widest mb-2">
            Hi, my name is
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text drop-shadow-md">
            Mark Taratynov
          </h1>
        </motion.div>
        <div className="flex relative items-center justify-between gap-2 border rounded-xl px-4 py-2">
          <span className="relative w-2 h-2">
            <span className="absolute w-full h-full animate-ping bg-green-500 opacity-75 rounded-full"></span>
            <span className="absolute w-2 h-2 bg-green-500 rounded-full"></span>
          </span>
          <p className="text-white text-center">Open to work</p>
        </div>
        <h3 className="text-2xl text-slate-500 font-bold text-balance text-center">
          I build and enjoy things for the web.
        </h3>
        <p className="text-balance text-slate-100 text-center">
          I'm fullstack developer Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos tempora vitae deserunt explicabo quia cumque.
        </p>
        <button className="border border-slate-400 text-white w-max px-2 rounded-lg shadow-md py-2 hover:bg-blue-500 duration-300">
          Contact me!
        </button>
        <div className="w-28 flex justify-center">
          <FaArrowDownLong
            style={{ color: "white" }}
            className="animate-bounce mt-2 cursor-pointer"
            size={25}
          />
        </div>
      </div>
    </section>
  );
}
