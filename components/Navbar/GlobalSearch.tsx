"use client";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <Input
      type="search"
      placeholder="Search.."
      className="hidden w-full min-w-[380px] border-none  md:block lg:min-w-[500px]"
    />
  );
};

export default GlobalSearch;
