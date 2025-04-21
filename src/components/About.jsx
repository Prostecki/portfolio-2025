import { forwardRef } from "react";
import Button from "@mui/material/Button";
import "animate.css";

const About = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col items-center justify-center w-full min-h-screen pt-12 px-4 max-md:px-0 max-md:py-12"
    >
      <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-blue-500 mb-4">
        About
      </span>
      <h1 className="text-4xl bg-gradient-to-r from-white via-gray-400 to-slate-500 text-transparent bg-clip-text font-[600] mb-2">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-12 md:gap-20 max-md:py-0 py-8">
        <div className="mb-8 md:mb-0">
          <img
            className="max-w-80 max-md:hidden content-center bg-center rounded-lg drop-shadow-md"
            src="images/deepai-dev-2.jpeg"
            alt="profile picture"
          />
        </div>
        <div className="w-full md:w-1/3 max-md:flex max-md:items-center max-md:justify-center max-md:px-4 flex flex-col gap-5">
          <p className="text-slate-500">My introduction</p>
          <p className="text-slate-400 max-md:text-center">
            Since my childhood, I've been eager to solve problems. When I got my
            first PC with an AMD Duron 700MHz processor, if I remember
            correctly, something went wrong. Without the internet, I managed to
            fix it on my own by delving into the BIOS and installing different
            drivers, and I was just 10 y.o.
          </p>
          <p className="text-slate-400 max-md:text-center">
            I’m highly motivated by a growth mindset, always looking for
            opportunities to learn, improve, and contribute.
          </p>
          <p className="text-slate-400 max-md:text-center">
            My principle in life is:{" "}
            <span className="italic text-slate-300 font-[500]">
              "Patience and diligent effort are the keys to personal development
              and progress."
            </span>
          </p>
          <Button
            variant="outlined"
            color="primary"
            style={{ borderRadius: "20px" }}
            className="w-24 text-center mt-2 px-4 py-1 rounded-full shadow-md duration-200"
          >
            CV
          </Button>
        </div>
      </div>
    </section>
  );
});

export default About;
