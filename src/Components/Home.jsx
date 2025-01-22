import HomeSocial from "./HomeSocial";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="text-black m-auto flex py-32 px-8 w-[55rem] border-b">
      <div className="-translate-x-20 flex items-center">
        <HomeSocial />
      </div>
      <div className="flex flex-col gap-6 items-start justify-center">
        <p className="text-slate-500">Hi, my name is</p>
        <h1 className="text-7xl text-slate-200 font-extrabold tracking-wide drop-shadow-lg">
          Mark Taratynov
        </h1>
        <h3 className="text-5xl text-slate-500 font-bold text-balance">
          I build and enjoy things for the web.
        </h3>
        <p className="text-balance text-slate-100">
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
