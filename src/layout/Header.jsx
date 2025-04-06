export default function Header({ scrollToAbout }) {
  return (
    <header className="flex w-full justify-evenly items-center p-6 drop-shadow-sm text-slate-800 text-md overflow-hidden">
      <img
        src="src/assets/logo.png"
        alt="logo"
        className="w-12 rounded-full border drop-shadow-lg max-md:hidden"
      />
      <div className="flex max-md:flex-col max-md:gap-3 justify-between items-center w-1/2 nav-links">
        <a href="">Home</a>
        <a href="#" onClick={scrollToAbout}>
          About
        </a>
        <a href="">Skills</a>
        <a href="">Project</a>
        <a href="">Contact</a>
        <a href="">CV</a>
      </div>
    </header>
  );
}
