import { Github } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-black">
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
          <Link to="/">
            <img src="./logo.png" alt="betterNotes" className="size-8 invert" />
          </Link>
          <div>
            <p className="text-slate-100 font-semibold">Product</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-orange-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-orange-600 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange-600 transition">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-slate-100 font-semibold">Resources</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="https://x.com/heykaran77"
                  className="hover:text-orange-600 transition">
                  Twitter
                </Link>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/heykaran77"
                  className="hover:text-orange-600 transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/heykaran77"
                  className="hover:text-orange-600 transition">
                  Instagram
                </a>
              </li>
              {/* <li>
                <a href="/" className="hover:text-orange-600 transition">
                  Careers
                  <span className="text-xs text-white bg-orange-600 rounded-md ml-2 px-2 py-1">
                    We’re hiring!
                  </span>
                </a>
              </li> */}
              {/* <li>
                <a href="/" className="hover:text-orange-600 transition">
                  About
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
          <p className="max-w-60">Think less, note better.</p>
          <div className="flex items-center gap-4 mt-3">
            <Link
              to="https://github.com/heykaran77"
              target="_blank"
              rel="noreferrer">
              <Github className="lucide lucide-linkedin size-5 hover:text-orange-500" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/heykaran77"
              target="_blank"
              rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin size-5 hover:text-orange-500"
                aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link
              to="https://x.com/heykaran77"
              target="_blank"
              rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter size-5 hover:text-orange-500"
                aria-hidden="true">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
          </div>
          <p className="mt-3 text-center">
            © 2025{" "}
            <Link
              to="https://github.com/heykaran77"
              target="_blank"
              className="hover:text-orange-500">
              Better Notes.
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
