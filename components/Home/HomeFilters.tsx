import React from "react";
import { Badge } from "../ui/badge";
import { HomePageFilters } from "@/constants/filters";

const HomeFilters = () => {
  return (
    <div className="hidden cursor-pointer justify-center gap-[30px]  py-4  lg:flex">
      {HomePageFilters.map((filter) => (
        <Badge key={filter.name} className="rounded-md bg-slate-500 py-1">
          {filter.name}
        </Badge>
      ))}
    </div>
  );
};

export default HomeFilters;
