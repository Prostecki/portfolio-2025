const Separator = ({ isRight }) => (
  <div
    className={`border-${isRight ? "l" : "r"} ${
      isRight ? "" : "-mr-[2rem]"
    } dark:border-white/20 border-black/20 h-full max-md:hidden`}
  ></div>
);

export default Separator;
