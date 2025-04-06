import BorderLine from "./BorderLine";
import { IoCalendarOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";

export default function Education() {
  return (
    <section className="flex flex-col w-full justify-center items-center gap-6">
      <div className="max-w-[50rem] w-full h-max flex justify-between gap-2">
        <div className="w-1/2 max-md:w-full bg-slate-900 p-3 py-2 max-md:items-center rounded-md drop-shadow-lg flex flex-col border-b-4 border-blue-500">
          <h1 className="text-white font-[600] mb-2 text-nowrap tracking-wide uppercase">
            Fullstack Developer, open source
          </h1>
          <div className="flex items-center w-max gap-1">
            <IoSchoolOutline style={{ color: "white" }} size={22} />
            <p className="text-slate-500">Nackademin, Stockholm</p>
          </div>
          <div className="flex items-center gap-1 mt-3">
            <IoCalendarOutline style={{ color: "white" }} size={12} />
            <p className="text-sm text-gray-400">Aug 2024 - Juni 2026</p>
          </div>
        </div>
        <BorderLine />
        <div className="w-1/2 hidden md:block"></div>
      </div>

      <div className="max-w-[50rem] w-full h-max flex justify-between gap-2">
        <div className="w-1/2 hidden md:block"></div>
        <BorderLine />
        <div className="w-1/2 max-md:w-full bg-slate-900 p-3 py-2 rounded-md drop-shadow-lg flex flex-col max-md:items-center items-start gap-2 border-b-4 border-blue-500">
          <h1 className="text-white font-[600] text-end uppercase mb-2">
            Municipal Adult Education
          </h1>
          <div>
            <ul className="text-white ml-5 list-disc">
              <li className="my-2">Swedish</li>
              <li className="my-2">English</li>
            </ul>
          </div>
          <div className="flex items-end gap-1">
            <IoSchoolOutline style={{ color: "white" }} size={22} />
            <p className="text-slate-500">Solna KomVux, Stockholm</p>
          </div>
          <div className="flex items-center justify-end gap-1 mt-3">
            <IoCalendarOutline style={{ color: "white" }} size={12} />
            <p className="text-sm text-gray-400">Sep 2022 - April 2024</p>
          </div>
        </div>
      </div>
      <div className="max-w-[50rem] w-full h-max flex justify-between gap-2">
        <div className="w-1/2 max-md:w-full bg-slate-900 p-3 py-2 rounded-md drop-shadow-lg flex flex-col items-end max-md:items-center border-b-4 border-blue-500">
          <h1 className="text-white font-[600] text-end uppercase mb-2">
            Bachelor's degree in Athletics
          </h1>
          <div className="flex items-end gap-1">
            <IoSchoolOutline style={{ color: "white" }} size={22} />
            <p className="text-slate-500">
              Lesgaft National State University, Russia
            </p>
          </div>
          <div className="flex items-center justify-end gap-1 mt-3">
            <IoCalendarOutline style={{ color: "white" }} size={12} />
            <p className="text-sm text-gray-400">Sep 2014 - May 2018</p>
          </div>
        </div>
        <BorderLine />
        <div className="w-1/2 hidden md:block"></div>
      </div>
    </section>
  );
}
