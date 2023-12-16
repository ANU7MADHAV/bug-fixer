import { Input } from "../ui/input";

interface Props {
  otherClasses: string;
  placeholder: string;
  icon: any;
}

const LocalSearchbar = ({ otherClasses, placeholder, icon }: Props) => {
  return (
    <div className="relative right-[20px] flex w-full grow px-6 sm:right-0 sm:w-[25px] sm:px-2 md:px-4">
      <Input
        className="text-dark400_light700 paragraph-regular no-focus placeholder  bg-transparent shadow-none outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default LocalSearchbar;
