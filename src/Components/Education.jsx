import BorderLine from "./BorderLine";
import { IoCalendarOutline } from "react-icons/io5";

export default function Education() {
  return (
    <section>
      <div className="flex flex-col w-[30rem]">
        <div className="w-full h-[8rem] flex justify-between gap-5">
          <div className="w-1/2"></div>
          <BorderLine />
          <div className="w-1/2">
            <h1 className="text-black font-[500] mb-2">
              Bachelor's degree in Athletics
            </h1>
            <p className="text-slate-600">
              Lesgaft National State University of Physical Education, Sport and
              Health
            </p>
            <div className="flex items-center gap-1 mt-3">
              <IoCalendarOutline size={12} />
              <p className="text-sm text-gray-400">Sep 2014 - May 2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
