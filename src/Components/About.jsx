import { forwardRef } from "react";

const About = forwardRef((_, ref) => {
  return (
    <section ref={ref} className="flex flex-col items-center w-full py-24 px-8">
      <div className="flex justify-center items-center w-full gap-20 py-8">
        <div className="">
          <img
            className="max-w-80 content-center bg-center rounded-lg drop-shadow-md"
            src="/src/assets/deepai-dev-2.jpeg"
            alt="profile picture"
          />
        </div>
        <div className="w-1/3 flex flex-col gap-5">
          <div className="flex items-center relative gap-5">
            <h1 className="text-3xl text-slate-200 font-[600] mb-2">
              About Me
            </h1>
            <div className="about-line"></div>
          </div>
          <p className="text-slate-500">My introduction</p>
          <p className="text-slate-400">
            Since my childhood, I've been eager to solve problems. When I got my
            first PC with an AMD Duron 700MHz processor, if I remember
            correctly, something went wrong. Without the internet, I managed to
            fix it on my own by delving into the BIOS and installing different
            drivers, and I was just 10 y.o.
          </p>
          <p className="text-slate-400">
            I’m highly motivated by a growth mindset, always looking for
            opportunities to learn, improve, and contribute.
          </p>
          <p className="text-slate-400">
            My principle in life is:{" "}
            <span className="italic text-slate-300 font-[500]">
              "Patience and diligent effort are the keys to personal development
              and progress."
            </span>
          </p>
          <a className="cv-button border cursor-pointer text-center mt-2 border-slate-400 text-slate-200 w-24 px-2 rounded-lg shadow-md py-1 duration-200">
            CV
          </a>
        </div>
      </div>
    </section>
  );
});

export default About;
