import { useEffect, useState } from "react";
import { navLinks } from "../constants/index.ts";

const NavItems = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentPath, setCurrentPath] = useState<String>("");

  console.log(currentPath);

  return (
    <ul className="nav-ul">
      {navLinks.map(
        ({ id, href, name }: { id: number; href: string; name: string }) => {
          const isActive = currentPath === href;
          return (
            <li key={id} className="nav-li">
              <a
                href={href}
                className="nav-li_a relative"
                onClick={() => {
                  setIsOpen(false);
                  setCurrentPath(href);
                }}
              >
                {name}
                {!isOpen && isActive && (
                  <img
                    src="assets/line.svg"
                    alt="line"
                    width={100}
                    height={100}
                    className="absolute -bottom-2 right-0"
                  />
                )}
              </a>
            </li>
          );
        }
      )}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Detect scrolling and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/90" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl flex items-center justify-center hover:text-white transition-colors"
          >
            <img src="/assets/mh-rounded-logo.png" alt="mh-logo" width={30} height={30} className="mr-2"/>
            Majaz-ul Haque
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems setIsOpen={setIsOpen} isOpen={isOpen} />
          </nav>
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? "max-h-screen p-0 black-gradient absolute top-12 right-2 mx-2 my-1 min-w-[150px] z-10 rounded-[6px]"
            : "hidden"
        }`}
      >
        <nav className="p-0 rounded-xl">
          <NavItems setIsOpen={setIsOpen} isOpen={isOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
