export default function Header() {
  return (
    <header className="flex w-full justify-evenly items-center p-6 border-b drop-shadow-sm text-black text-md">
      <img src="" alt="logo" />
      <div className="flex justify-between items-center w-1/3">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="">Project</a>
        <a href="">Contact</a>
        <a href="">CV</a>
      </div>
    </header>
  );
}
