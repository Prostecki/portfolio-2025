import { IoCalendarOutline } from "react-icons/io5";
import BorderLine from "./BorderLine";
import { MdLocationCity } from "react-icons/md";
export default function Work() {
  return (
    <section className="flex flex-col w-full justify-center gap-6 items-center">
      <div className="max-w-[35rem] w-full h-max flex justify-between gap-2">
        <div className="w-1/2 hidden md:block"></div>
        <BorderLine />
        <div className="w-1/2 max-md:w-full flex flex-col items-start pl-4 py-2 bg-slate-900 drop-shadow-lg rounded-md  border-b-4 border-blue-500">
          <h1 className="text-slate-200 font-[600] text-lg uppercase mb-2 tracking-wide">
            Delivery Driver
          </h1>
          <div className="flex items-center gap-1">
            <MdLocationCity style={{ color: "white" }} size={18} />
            <p className="text-slate-500 text-nowrap">ICA Brunna, Stockholm</p>
          </div>
          <div className="text-slate-600 text-sm mt-2">
            <p>
              <span className="text-slate-500 uppercase tracking-wide">
                Skills:{" "}
              </span>
              Time Management, Communication, Problem Solving, GPS, Swedish,
              English
            </p>
          </div>
          <div className="flex items-center mt-3 gap-1">
            <IoCalendarOutline style={{ color: "white" }} size={12} />
            <p className="text-sm text-white">May 2024 - Present</p>
          </div>
        </div>
      </div>
      <div className="max-w-[35rem] w-full h-max flex justify-between gap-2">
        <div className="w-1/2 max-md:w-full flex flex-col items-start py-2 pl-4 drop-shadow-lg rounded-md bg-slate-900 border-b-4 border-blue-500">
          <h1 className="text-white font-[600] mb-2 text-lg uppercase tracking-wide">
            Web Dev Freelancer
          </h1>
          <div className="flex items-center gap-1">
            <MdLocationCity style={{ color: "white" }} size={18} />
            <p className="text-slate-600 text-nowrap">Self-Employed, Remote</p>
          </div>
          <div className="text-slate-600 text-sm mt-2">
            <p>
              <span className="text-slate-500 uppercase tracking-wide">
                Skills:{" "}
              </span>
              HTML, CSS, JavaScript, React.js, Tailwind.CSS
            </p>
          </div>
          <div className="flex items-center mt-3 gap-1">
            <IoCalendarOutline style={{ color: "white" }} size={12} />
            <p className="text-sm text-gray-400">Sep 2023 - Present</p>
          </div>
        </div>
        <BorderLine />
        <div className="w-1/2 hidden md:block"></div>
      </div>
      <div className="max-w-[35rem] w-full h-max flex justify-between gap-2">
        <div className="w-1/2 hidden md:block"></div>
        <BorderLine />
        <div className="w-1/2 max-md:w-full flex flex-col items-start py-2 pl-4 drop-shadow-lg rounded-md bg-slate-900 border-b-4 border-blue-500">
          <h1 className="text-slate-400 uppercase font-[600] text-lg tracking-wide mb-2">
            Web Development Intern
          </h1>
          <div className="flex items-center gap-1">
            <MdLocationCity style={{ color: "white" }} size={18} />
            <p className="text-slate-600">Nordic IT School, Moscow</p>
          </div>
          <div className="text-slate-600 text-sm mt-2">
            <p>
              <span className="text-slate-500 uppercase tracking-wide">
                Skills:{" "}
              </span>
              HTML, CSS, JavaScript, PHP, MySQL, Docker, GO
            </p>
          </div>
          <div className="flex items-center gap-1 mt-3">
            <IoCalendarOutline style={{ color: "white" }} size={12} />
            <p className="text-sm text-gray-400">Oct 2022 - March 2023</p>
          </div>
        </div>
      </div>
      <div className="max-w-[35rem] w-full h-max flex justify-between gap-2">
        <div className="w-1/2 max-md:w-full flex flex-col items-start pl-4 py-2 drop-shadow-lg rounded-md bg-slate-900 border-b-4 border-blue-500">
          <h1 className="text-slate-400 tracking-wide text-lg font-[600] uppercase mb-2">
            Locksmith Specialist
          </h1>
          <div className="flex items-center gap-1">
            <MdLocationCity style={{ color: "white" }} size={18} />
            <p className="text-slate-600">Self-Employed, Russia</p>
          </div>
          <div className="text-slate-600 text-sm mt-2">
            <p>
              <span className="text-slate-500 uppercase tracking-wide">
                Skills:{" "}
              </span>
              Emergency Lock Opening, Patience, Problem Solving, Customer
              Service, Sales
            </p>
          </div>
          <div className="flex items-center mt-3 gap-1">
            <IoCalendarOutline style={{ color: "white" }} size={12} />
            <p className="text-sm text-gray-400">Dec 2019 - Sept 2022</p>
          </div>
        </div>
        <BorderLine />
        <div className="w-1/2 hidden md:block"></div>
      </div>
      <div className="max-w-[35rem] w-full h-max flex justify-between gap-2">
        <div className="w-1/2 hidden md:block"></div>
        <BorderLine />
        <div className="w-1/2 max-md:w-full flex flex-col items-start pl-4 py-2 drop-shadow-lg rounded-md bg-slate-900 border-b-4 border-blue-500">
          <h1 className="text-slate-400 font-[600] text-lg mb-2 uppercase tracking-wide">
            Coach in Athletics
          </h1>
          <div className="flex items-start gap-1">
            <MdLocationCity style={{ color: "white" }} size={18} />
            <p className="text-slate-600">Athletics School, Russia</p>
          </div>
          <div className="text-slate-600 text-sm mt-2">
            <p>
              <span className="text-slate-500 uppercase tracking-wide">
                Skills:{" "}
              </span>
              Communication, Interpersonal Skills, Leadership, Problem Solving,
              Motivation, Planning
            </p>
          </div>
          <div className="flex items-center gap-1 mt-3">
            <IoCalendarOutline style={{ color: "white" }} size={12} />
            <p className="text-sm text-gray-400">Sep 2018 - May 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
}
