import LeftSideBar from "@/components/Leftsidebar/LeftSideBar";
import Navbar from "@/components/Navbar/Navbar";
import RightSideBar from "@/components/RightSideBar/RightSideBar";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col p-6 pt-36 max-md:pb-14 sm:px-4">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar />
      </div>
      Toaster
    </main>
  );
};

export default Layout;
