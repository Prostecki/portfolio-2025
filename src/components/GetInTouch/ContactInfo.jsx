// components/contact/ContactInfo.jsx
import { Mail, MapPin } from "lucide-react";
import HomeSocial from "../HomeSocial";

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-start max-md:items-center justify-center max-h-[30rem] w-full max-w-[20rem]">
      <h2 className="mb-10 mt-4 text-lg md:text-xl max-md:text-center text-start font-light text-black/60 max-w-2xl mx-auto dark:text-slate-400">
        Have a project in mind or just want to say hello? I'm always open to new
        ideas and collaborations.
      </h2>
      <div className="flex flex-col max-md:gap-8 items-start gap-3 justify-center max-w-[20rem]">
        <address>
          <div className="flex gap-3 items-center">
            <div className="bg-red-500/20 p-3 dark:bg-blue-500/20 rounded-lg">
              <Mail className="w-6 h-6 text-black/80 dark:text-white/80" />
            </div>
            <div>
              <h1
                style={{ fontStyle: "normal" }}
                className="text-xl font-bold dark:text-white/80 text-black/80"
              >
                Email
              </h1>
              <h2
                style={{ fontStyle: "normal" }}
                className="text-lg text-black/80 dark:text-white/80"
              >
                mark.taratynov@gmail.com
              </h2>
            </div>
          </div>
        </address>
        <div className="flex gap-3 items-center justify-between">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <MapPin className="w-6 h-6 text-black/80 dark:text-white/80" />
          </div>
          <div>
            <h1 className="text-xl font-bold dark:text-white/80 text-black/80">
              Location
            </h1>
            <h2 className="text-lg text-black/80 dark:text-white/80">
              Stockholm, Sweden
            </h2>
          </div>
        </div>
        <nav className="flex gap-3 items-center justify-center w-full mt-2 mb-5">
          <HomeSocial />
        </nav>
      </div>
    </div>
  );
}
