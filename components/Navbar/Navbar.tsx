import Image from "next/image";
import Link from "next/link";
import icon from "@/public/assets/icon-bug.png";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "./ThemeSwitcher";
import MobileNav from "./MobileNav";
import GlobalSearch from "./GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between  background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex">
        <Image src={icon} alt="icon bug" width={30} height={30} />

        <p className="h3-bold  hidden font-spaceGrotesk text-dark-100 dark:text-light-900 sm:block">
          Bug <span className="text-primary-500">Helper</span>
        </p>
      </Link>
      <div>
        <GlobalSearch />
      </div>
      <div className="flex-between gap-x-10 ">
        <ThemeSwitcher />
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
