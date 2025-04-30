export default function Footer() {
  return (
    <footer className="w-full h-[10rem] bg-[#04081A] py-8 text-white flex flex-col items-center justify-center">
      <div className="h-1 w-full bg-gradient-to-r from-white via-neutral-600 to-white"></div>
      <h1 className="text-center text-lg uppercase">
        Made with ❤️ by{" "}
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-900 via-blue-600 to-blue-300 font-bold ">
          Mark
        </span>{" "}
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-white via-gray-300 to-gray-500 font-bold">
          Taratynov
        </span>
      </h1>
    </footer>
  );
}
