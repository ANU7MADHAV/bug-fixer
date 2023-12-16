"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  otherClasses: string;
  filters: {
    name: string;
    value: string;
  }[];
  containerClasses: string;
}

const Filter = ({ otherClasses, filters, containerClasses }: Props) => {
  return (
    <div className="block lg:hidden">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((filter) => (
              <SelectItem key={filter.name} value="apple">
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
