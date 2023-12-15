"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import icon from "@/app/favicon.ico";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";

const NavContent = () => {
  return <h1>NavContent</h1>;
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="sm:hidden">
        <FaBars />
      </SheetTrigger>
      <SheetContent side="left">
        <Link href="/" className="flex">
          <Image src={icon} alt="icon bug" width={30} height={30} />
          <p className="h3-bold px-1 font-spaceGrotesk text-dark-100 dark:text-light-900 sm:block">
            Bug <span className="text-primary-500">Helper</span>
          </p>
        </Link>
        <SheetClose>
          <NavContent />
        </SheetClose>
        <SheetClose>
          <SignedOut>
            <Link href="/sign-in">
              <Button>Log In</Button>
            </Link>
          </SignedOut>
        </SheetClose>
        <SheetClose>
          <SignedIn>
            <Link href="/sign-out">
              <Button>Log out</Button>
            </Link>
          </SignedIn>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
