"use client";

import icon from "@/app/favicon.ico";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
// import { useParams } from "next/navigation";
import { FaBars } from "react-icons/fa6";

const NavContent = () => {
  // const params = useParams();
  // console.log(params);
  // const active = sidebarLinks.find((link) => link.label === params);

  return (
    <section className="my-4 flex flex-col gap-y-2 pl-2 text-left font-spaceGrotesk">
      {sidebarLinks.map((link) => (
        <Link key={link.label} href={link.route}>
          <p className="hover:primary-gradient rounded-lg px-2 transition ease-in-out hover:scale-105">
            {link.label}
          </p>
        </Link>
      ))}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="sm:hidden">
        <div>
          <FaBars />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex">
          <Image src={icon} alt="icon bug" width={30} height={30} />
          <p className="h3-bold px-1 font-spaceGrotesk text-dark-100 dark:text-light-900 sm:block">
            Bug <span className="text-primary-500">Helper</span>
          </p>
        </Link>
        <SheetClose asChild>
          <NavContent />
        </SheetClose>
        <div className="flex flex-col gap-3">
          <SheetClose asChild>
            <SignedOut>
              <Link href="/sign-in">
                <Button className="min-h-[41px] w-full rounded-lg px-4 py-3 font-spaceGrotesk">
                  Log In
                </Button>
              </Link>
            </SignedOut>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/sign-out">
              <Button className="min-h-[41px] w-full rounded-lg px-4 py-3 font-spaceGrotesk">
                <span className="primary-text-gradient">Sign Up</span>
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
