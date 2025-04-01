import HomeSocial from "./HomeSocial";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="text-black flex py-20 px-8 max-w-[55rem] border-b">
      <div className="-translate-x-20 flex items-center">
        <HomeSocial />
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <img
          src="/src/assets/avatar.jpeg"
          alt="avatar"
          className="w-64 rounded-full animate-ultra-smooth-spin border-4 drop-shadow-lg"
        />
        <p className="text-slate-500">Hi, my name is</p>
        <h1 className="text-3xl text-slate-200 font-extrabold tracking-wide drop-shadow-lg">
          Mark Taratynov
        </h1>
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
