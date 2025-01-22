import { IoCalendarOutline } from "react-icons/io5";
import BorderLine from "./BorderLine";
import { MdLocationCity } from "react-icons/md";
export default function Work() {
  return (
    <section className="w-[50rem] flex flex-col justify-center items-center">
      <div className="max-w-[35rem] w-[30rem] h-[8rem] flex justify-between">
        <div className="w-1/2"></div>
        <BorderLine />
        <div className="w-1/2 flex flex-col items-start pl-2">
          <h1 className="text-slate-200 font-[600] uppercase mb-2 tracking-wide">
            Delivery Driver
          </h1>
          <div className="flex items-center gap-1">
            <MdLocationCity style={{ color: "white" }} size={18} />
            <p className="text-slate-500">ICA Brunna, Stockholm</p>
          </div>
          <div className="flex items-center mt-3 gap-1">
            <IoCalendarOutline style={{ color: "white" }} size={12} />
            <p className="text-sm text-white">May 2024 - Present</p>
          </div>
        </div>
      </div>
      <div className="max-w-[35rem] w-[30rem] h-[8rem] flex justify-between">
        <div className="w-1/2 flex flex-col items-end pr-2">
          <h1 className="text-white font-[600] mb-2 uppercase tracking-wide">
            Web Dev Freelancer
          </h1>
          <div className="flex items-center gap-1">
            <MdLocationCity style={{ color: "white" }} size={18} />
            <p className="text-slate-600">Self-Employed, Remote</p>
          </div>
          <div className="flex items-center mt-3 gap-1">
            <IoCalendarOutline style={{ color: "white" }} size={12} />
            <p className="text-sm text-gray-400">Sep 2023 - Present</p>
          </div>
        </div>
        <BorderLine />
        <div className="w-1/2"></div>
      </div>
      <div className="flex flex-col w-[30rem]">
        <div className="w-full h-[8rem] flex justify-between">
          <div className="w-1/2"></div>
          <BorderLine />
          <div className="w-1/2 flex flex-col items-start pl-2">
            <h1 className="text-slate-400 uppercase font-[600] tracking-wide  mb-2">
              Web Development Intern
            </h1>
            <div className="flex items-center gap-1">
              <MdLocationCity style={{ color: "white" }} size={18} />
              <p className="text-slate-600">Nordic IT School, Moscow</p>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <IoCalendarOutline style={{ color: "white" }} size={12} />
              <p className="text-sm text-gray-400">Oct 2022 - March 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[30rem]">
        <div className="w-full h-[8rem] flex justify-between">
          <div className="w-1/2 flex flex-col items-end pr-2">
            <h1 className="text-slate-400 tracking-wide font-[600] uppercase mb-2">
              Locksmith Specialist
            </h1>
            <div className="flex items-center gap-1">
              <MdLocationCity style={{ color: "white" }} size={18} />
              <p className="text-slate-600">Self-Employed, Russia</p>
            </div>
            <div className="flex items-center mt-3 gap-1">
              <IoCalendarOutline style={{ color: "white" }} size={12} />
              <p className="text-sm text-gray-400">Dec 2019 - Sept 2022</p>
            </div>
          </div>
          <BorderLine />
          <div className="w-1/2"></div>
        </div>
      </div>
      <div className="flex flex-col w-[30rem]">
        <div className="w-full h-[8rem] flex justify-between">
          <div className="w-1/2"></div>
          <BorderLine />
          <div className="w-1/2 flex flex-col items-start pl-2">
            <h1 className="text-slate-400 font-[600] mb-2 uppercase tracking-wide">
              Coach in Athletics
            </h1>
            <div className="flex items-start gap-1">
              <MdLocationCity style={{ color: "white" }} size={18} />
              <p className="text-slate-600">Athletics School, Russia</p>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <IoCalendarOutline style={{ color: "white" }} size={12} />
              <p className="text-sm text-gray-400">Sep 2018 - May 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
