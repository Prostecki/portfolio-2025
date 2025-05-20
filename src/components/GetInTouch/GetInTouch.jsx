/** @jsxImportSource @emotion/react */
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function GetInTouch() {
  return (
    <div className="w-full min-h-screen max-md:mt-32 flex flex-col items-center justify-center gap-4 text-white overflow-x-hidden px-4">
      <span className="inline-block py-1 px-3 rounded-full text-sm font-medium dark:bg-teal-500/10 dark:text-blue-500 bg-slate-300/30 drop-shadow-2xl text-slate-800/60 mb-4">
        Contact
      </span>

      <h1 className="text-4xl bg-gradient-to-r dark:from-white dark:via-gray-400 dark:to-slate-500 text-transparent bg-clip-text font-[700] from-black via-gray-700 to-slate-500 mb-2">
        Let's Connect
      </h1>

      <div className="flex max-md:flex-col max-md:items-center gap-5 p-4 w-full max-w-[100vw] box-border">
        <ContactInfo />

        <div className="md:w-1/2 w-full flex flex-col items-center px-0 md:px-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
