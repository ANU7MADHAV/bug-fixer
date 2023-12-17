import satoru from "@/public/assets/satoru.png";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  buttonName: string;
}

const NotFound = ({ title, description, buttonName }: Props) => {
  return (
    <div className="flex-center h-full flex-col">
      <Image
        alt="satoru"
        src={satoru}
        className=" overflow-hidden rounded-md object-cover dark:opacity-80"
        width={400}
      />
      <h1 className="h3-bold">{title}</h1>
      <p className="mt-7 text-center">{description}</p>
      <button className="primary-gradient mt-4 rounded-md px-4 py-2">
        {buttonName}
      </button>
    </div>
  );
};

export default NotFound;
