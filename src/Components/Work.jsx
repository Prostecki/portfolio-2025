import { IoCalendarOutline } from "react-icons/io5";
import BorderLine from "./BorderLine";
export default function Work() {
  return (
    <section>
      <div className="w-full h-[8rem] flex justify-between">
        <div className="w-1/2">
          <h1 className="text-black font-[500] mb-2">Frontend freelancer</h1>
          <p className="text-slate-600">Self-Employed</p>
          <div className="flex items-center mt-3 gap-1">
            <IoCalendarOutline size={12} />
            <p className="text-sm text-gray-400">Sep 2023 - Present</p>
          </div>
        </div>
        <BorderLine />
        <div className="w-1/2"></div>
      </div>
      <div className="flex flex-col w-[30rem]">
        <div className="w-full h-[8rem] flex justify-between gap-5">
          <div className="w-1/2"></div>
          <BorderLine />
          <div className="w-1/2">
            <h1 className="text-black font-[500] mb-2">
              Web Development Intern
            </h1>
            <p className="text-slate-600">Nordic IT School, Moscow</p>
            <div className="flex items-center gap-1 mt-3">
              <IoCalendarOutline size={12} />
              <p className="text-sm text-gray-400">Oct 2022 - March 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[30rem]">
        <div className="w-full h-[8rem] flex justify-between gap-5">
          <div className="w-1/2">
            <h1 className="text-black font-[500] mb-2">Locksmith Specialist</h1>
            <p className="text-slate-600">Self-Employed</p>
            <div className="flex items-center mt-3 gap-1">
              <IoCalendarOutline size={12} />
              <p className="text-sm text-gray-400">Dec 2019 - Sept 2022</p>
            </div>
          </div>
          <BorderLine />
          <div className="w-1/2"></div>
        </div>
      </div>
      <div className="flex flex-col w-[30rem]">
        <div className="w-full h-[8rem] flex justify-between gap-5">
          <div className="w-1/2"></div>
          <BorderLine />
          <div className="w-1/2">
            <h1 className="text-black font-[500] mb-2">Coach in Athletics</h1>
            <p className="text-slate-600">Сomprehensive School</p>
            <div className="flex items-center gap-1 mt-3">
              <IoCalendarOutline size={12} />
              <p className="text-sm text-gray-400">Sep 2018 - May 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
