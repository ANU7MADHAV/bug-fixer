import { Input } from "../ui/input";

interface Props {
  otherClasses: string;
  placeholder: string;
  icon: any;
}

const LocalSearchbar = ({ otherClasses, placeholder, icon }: Props) => {
  return (
    <div className="flex w-full grow px-6 sm:px-2 md:px-4">
      <Input
        className="text-dark400_light700 paragraph-regular no-focus placeholder  bg-transparent shadow-none outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default LocalSearchbar;
