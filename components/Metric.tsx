import { ReactNode } from "react";

interface Props {
  img: ReactNode;
  value: number;
}

const Metric = ({ img, value }: Props) => {
  return (
    <div>
      <div className="flex-center gap-1">
        {img}
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Metric;
