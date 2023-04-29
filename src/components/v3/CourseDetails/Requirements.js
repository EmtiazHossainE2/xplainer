import { RxDotFilled } from "react-icons/rx";

const Requirements = ({ requirements }) => {
  return (
    <div>
      <h2 className="py-3 text-xl font-semibold lg:text-2xl">Requirements</h2>
      {requirements.map((req, index) => (
        <div key={index} className="flex items-center space-y-1 text-sm">
          <RxDotFilled className="basis-1/12 lg:basis-[5%]" />
          <span className="basis-11/12 lg:basis-[95%]"> {req.item}</span>
        </div>
      ))}
    </div>
  );
};

export default Requirements;
