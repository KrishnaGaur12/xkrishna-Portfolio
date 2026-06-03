import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full pt-16 pb-6">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <nav className="flex items-center justify-center gap-10 sm:gap-14 text-xl sm:text-[22px] font-light text-black">
          <NavLink
            to="/"
            className="transition-all leading-none decoration-[1.5px] underline-offset-8 text-black hover:text-[#b31942] hover:underline"
          >
            home
          </NavLink>
          <NavLink
            to="/project"
            className="transition-all leading-none decoration-[1.5px] underline-offset-8 text-black hover:text-[#b31942] hover:underline"
          >
            projects
          </NavLink>
          <a
            href="/resumesde.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all leading-none decoration-[1.5px] underline-offset-8 text-black hover:text-[#b31942] hover:underline"
          >
            resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
