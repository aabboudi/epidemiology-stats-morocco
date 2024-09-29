import { Github } from "lucide-react";
import Link from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";

export default function Footer() {
  return (
    <footer className="relative max-w-[85rem] mx-auto bg-background px-6 py-12">
      <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 z-[1]">
        <div className="order-0 text-center lg:text-start mb-8 md:mb-0">
          <Link
            className="flex items-center justify-center lg:justify-start"
            href="/"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Epidemio
            </span>
          </Link>
          <p className="mt-4 text-sm">
            Morocco's first epidemiological data platform. For doctors and developers.
          </p>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase">Research</h2>
          <ul className="text-sm">
            <li className="mb-4">
              <Link className="hover:underline" href="#">
                Cite
              </Link>
            </li>
            <li className="mb-4">
              <Link className="hover:underline" href="#">
                Publish
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase">About</h2>
          <ul className="text-sm">
            <li className="mb-4">
              <Link className="hover:underline" href="#">
                Team
              </Link>
            </li>
            <li className="mb-4">
              <Link className="hover:underline" href="#">
                Partners
              </Link>
            </li>
            <li className="mb-4">
              <Link className="hover:underline" href="#">
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
          <ul className="text-sm">
            <li className="mb-4">
              <Link className="hover:underline" href="#">
                API
              </Link>
            </li>
            <li className="mb-4">
              <Link className="hover:underline" href="#">
                FAQ
              </Link>
            </li>
            <li className="mb-4">
              <Link className="hover:underline" href="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-background sm:mx-auto lg:my-8" />
      <div className="relative sm:flex sm:items-center sm:justify-between z-[1]">
        <span className="text-sm sm:text-center">
          © {new Date().getFullYear() || 2024}{" "}
          <Link className="hover:underline" href="/">
            Epidemio
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <Link className="hover:text-secondary" href="#">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub account</span>
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
