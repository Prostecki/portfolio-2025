export default function About() {
  return (
    <section className="flex flex-col items-center w-full py-24 px-8">
      <h1 className="text-3xl font-[600]">About Me</h1>
      <p className="text-slate-500">My introduction</p>
      <div className="flex justify-center items-center w-full gap-20 py-8">
        <div className="">
          <img
            className="max-w-80 content-center bg-center rounded-lg drop-shadow-md"
            src="/src/assets/profile-pic.png"
            alt="profile picture"
          />
        </div>
        <div className="w-1/4 flex flex-col gap-2">
          <p className="text-gray-600">
            Since my childhood, I've been eager to solve problems. When I got my
            first PC with an AMD Duron 700MHz processor, if I remember
            correctly, something went wrong. Without the internet, I managed to
            fix it on my own by delving into the BIOS and installing different
            drivers, and I was just 10 y.o.
          </p>
          <br />
          <p className="text-gray-600">
            I’m highly motivated by a growth mindset, always looking for
            opportunities to learn, improve, and contribute. My principle in
            life is that patience and diligent effort are the keys to personal
            development and progress.
          </p>
          <button className="cv-button duration-200 border border-black w-max px-10 rounded-md mt-2">
            CV
          </button>
        </div>
      </div>
    </section>
  );
}
