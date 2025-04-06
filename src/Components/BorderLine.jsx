export default function BorderLine() {
  return (
    <div className="hidden md:block">
      <span className="inline-block h-4 w-4 bg-blue-500 rounded-full"></span>
      <span className="w-[1px] h-[100%] translate-x-[0.5rem] -translate-y-2 bg-blue-500 block"></span>
    </div>
  );
}
