import { motion } from "framer-motion";
import WorkExperience from "./WorkExperience";
import Separator from "./Separator";
import WorkHeader from "./WorkHeader";
import { workExperienceData } from "../../data/workExperienceData";

export default function Work() {
  return (
    <div className="w-full py-2 px-6 text-white">
      <div className="max-w-[1200px] mx-auto">
        <WorkHeader />

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="grid md:grid-cols-2 gap-x-[31px] max-md:gap-y-[1rem]"
        >
          {/* First row */}
          <WorkExperience {...workExperienceData[0]} />
          <Separator isRight={true} />

          {/* Second row */}
          <Separator isRight={false} />
          <WorkExperience {...workExperienceData[1]} isRight={true} />

          {/* Third row */}
          <WorkExperience {...workExperienceData[2]} />
          <Separator isRight={true} />

          {/* Empty block */}
          <div className="relative bg-black/80 p-7 rounded-2xl border border-white/10 opacity-0"></div>
        </motion.div>
      </div>
    </div>
  );
}
