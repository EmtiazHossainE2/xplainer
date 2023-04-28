import { RxDotFilled } from "react-icons/rx";
const Requirements = ({ requirements }) => {
  return (
    <div>
      <h2 className="py-3 text-xl font-semibold lg:text-2xl">Requirements</h2>
      {requirements.map((req, index) => (
        <div key={index} className="flex items-center gap-1 text-sm space-y-1">
          <RxDotFilled />
          <span> {req.item}</span>
        </div>
      ))}
    </div>
  );
};

export default Requirements;
