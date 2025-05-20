export default function TimelineSeparator({ position, isVisible = true }) {
  if (!isVisible) {
    return <div className="opacity-0 max-md:hidden"></div>;
  }

  if (position === "left") {
    return (
      <div className="border-l dark:border-white/20 border-black/20 h-full max-md:hidden"></div>
    );
  } else {
    return (
      <div className="border-r -mr-[2rem] max-md:hidden dark:border-white/20 border-black/20 h-full"></div>
    );
  }
}
