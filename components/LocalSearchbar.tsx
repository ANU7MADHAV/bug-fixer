import { Input } from "./ui/input";

interface Props {
  otherClasses: string;
  placeholder: string;
  icon: any;
}

const LocalSearchbar = ({ otherClasses, placeholder, icon }: Props) => {
  return (
    <div>
      <Input className="bg-slate-400" placeholder={placeholder} />
      <span>{icon}</span>
    </div>
  );
};

export default LocalSearchbar;
