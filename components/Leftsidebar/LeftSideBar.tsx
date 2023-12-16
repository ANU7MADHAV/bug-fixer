import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";

import Link from "next/link";

import React from "react";

const LeftSideBar = () => {
  return (
    <section>
      <div className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
        <ul className="flex flex-col gap-y-6">
          {sidebarLinks.map((link) => (
            <li
              key={link.label}
              className=" hover:primary-gradient cursor-pointer rounded-lg px-2 transition ease-in-out hover:scale-105"
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <SignedOut>
          <Link href="/sign-in">
            <Button className="btn min-h-[41px] w-full rounded-lg px-4 py-3 font-spaceGrotesk">
              Log In
            </Button>
          </Link>
        </SignedOut>
        <SignedOut>
          <Link href="/sign-up">
            <Button className="primary-gradient hidden min-h-[41px] w-full rounded-lg px-4 py-3 font-spaceGrotesk sm:block">
              Sign up
            </Button>
          </Link>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSideBar;
