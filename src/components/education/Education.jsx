import { motion } from "framer-motion";
import React from "react";
import { educationData } from "../../data/education";
import EducationCard from "./EducationCard";
import EducationHeader from "./EducationHeader";
import TimelineSeparator from "./TimelineSeparator";

export default function Education() {
  return (
    <div className="w-full px-6 text-white">
      <div className="max-w-[1200px] mx-auto">
        <EducationHeader />

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="grid md:grid-cols-2 gap-x-[31px] max-md:gap-y-[.5rem]"
        >
          {educationData.map((entry, index) => (
            <React.Fragment key={entry.id}>
              {index % 2 === 0 ? (
                <>
                  <EducationCard {...entry} />
                  <TimelineSeparator position="left" />
                  <TimelineSeparator isVisible={false} />
                </>
              ) : (
                <>
                  <TimelineSeparator isVisible={false} />
                  <TimelineSeparator position="right" />
                  <EducationCard {...entry} />
                </>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
