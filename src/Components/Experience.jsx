export default function Experience() {
  return (
    <section className="py-20 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-[600]">Experience</h1>
        <p className="text-slate-500">My journey</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-8 my-10">
          <div className="">Work</div>
          <div>Education</div>
        </div>
        <div className="w-full h-[8rem] flex justify-between">
          <div className="w-1/2">
            <h1 className="text-black font-[600] mb-2">
              Frontend developer Freelance
            </h1>
            <p className="text-slate-600">Self-Employed</p>
            <p className="mt-5 text-sm text-gray-400">Sep 2023 - Present</p>
          </div>

          <div>
            <span className="inline-block h-4 w-4 rounded-full bg-blue-500"></span>
            <span className="w-[1px] h-[100%] translate-x-[7px] -translate-y-2 bg-blue-500 block"></span>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="flex flex-col w-[30rem]">
          <div className="w-full h-[8rem] flex justify-between gap-5">
            <div className="w-1/2"></div>
            <div>
              <span className="inline-block h-4 w-4 rounded-full bg-blue-500"></span>
              <span className="w-[1px] h-[100%] translate-x-[7px] -translate-y-2 bg-blue-500 block"></span>
            </div>
            <div className="w-1/2">
              <h1 className="text-black font-[600] mb-2">
                Web Development Intern
              </h1>
              <p className="text-slate-600">Nordic IT School, Moscow</p>
              <p className="mt-5 text-sm text-gray-400">
                Oct 2022 - March 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
