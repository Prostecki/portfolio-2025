import BorderLine from "./BorderLine";
import { IoCalendarOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";

export default function Education() {
  return (
    <section className="min-w-[40rem]">
      <div className="w-full flex justify-between gap-5">
        <div className="w-1/2"></div>
        <BorderLine />
        <div className="w-1/2 max-w-[20rem]">
          <h1 className="text-white font-[600] mb-2 tracking-wide uppercase">
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
      </div>
      <div className="w-full flex justify-between gap-5">
        <div className="w-1/2 flex flex-col items-end pr-2">
          <h1 className="text-white font-[600] text-end uppercase mb-2">
            Bachelor's degree in Athletics
          </h1>
          <div className="flex items-center gap-1 w-max">
            <IoSchoolOutline style={{ color: "white" }} size={22} />
            <p className="text-slate-500 text-end">
              Lesgaft National State University
            </p>
          </div>
          <div className="flex items-center gap-1 mt-3">
            <IoCalendarOutline style={{ color: "white" }} size={12} />
            <p className="text-sm text-gray-400">Sep 2014 - May 2018</p>
          </div>
        </div>
        <BorderLine />
        <div className="w-1/2"></div>
      </div>
    </section>
  );
}
