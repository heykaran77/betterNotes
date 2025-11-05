import React, { useEffect } from "react";
import Notes from "./Notes";
import NotesCU from "./NotesCU";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const menu = document.getElementById("menu");
    const closeMenu = document.getElementById("close-menu");
    const openMenu = document.getElementById("open-menu");

    const handleClose = () => {
      menu.classList.remove("max-md:w-full");
      menu.classList.add("max-md:w-0");
    };

    const handleOpen = () => {
      menu.classList.remove("max-md:w-0");
      menu.classList.add("max-md:w-full");
    };

    closeMenu.addEventListener("click", handleClose);
    openMenu.addEventListener("click", handleOpen);

    return () => {
      closeMenu.removeEventListener("click", handleClose);
      openMenu.removeEventListener("click", handleOpen);
    };
  }, []);

  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">
        <Link to="/">
          <img src="/logo.png" alt="" className="size-10" />
        </Link>
        <div
          id="menu"
          className="max-md:absolute max-md:top-0 max-md:left-0 max-md:w-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-white/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>
          <a href="#features" className="hover:text-gray-600">
            Features
          </a>
          <a href="#reviews" className="hover:text-gray-600">
            Testimonials
          </a>
          <button
            id="close-menu"
            className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <Link to="/login">
          <button className="hidden md:block bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-full font-medium transition">
            Login
          </button>
        </Link>

        <button
          id="open-menu"
          className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        </button>
      </nav>

      <div className="flex items-center gap-2 border border-slate-300 hover:border-slate-400/70 rounded-full w-max mx-auto px-4 py-2 mt-40 md:mt-32">
        <span></span>
        <button className="flex items-center gap-1 font-medium">
          Quiet. Focused. Beautiful.
        </button>
      </div>
      <h5 className="text-3xl md:text-7xl max-w-[850px] text-center mx-auto mt-8 tracking-tighter font-bold">
        Write. Remember. Refine. BetterNotes does the rest.
      </h5>

      <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2">
        A minimalist space to capture quick ideas, reminders, and thoughts —
        beautifully simple, effortlessly fast.
      </p>

      <div className="mx-auto w-full flex items-center justify-center gap-3 mt-4">
        <Link to="/signup">
          <button className="bg-orange-100 hover:bg-orange-200 text-orange700 hover:ring hover:ring-orange-400 px-6 py-3 rounded-full font-medium transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
