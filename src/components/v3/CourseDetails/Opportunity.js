import { GoCheck } from "react-icons/go";

const Opportunity = ({ learningItems }) => {
  return (
    <div>
      {/* Learning Opportunity */}
      <div>
        <div className="my-12 border p-5">
          <h2 className="text-[#1C1D1F] text-2xl font-bold pb-4">What you&apos;ll learn</h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {learningItems?.map((item, index) => (
              <div key={index} className="flex justify-center">
                <GoCheck className="basis-1/12 pt-1 " size={20} />
                <p className="basis-11/12">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Career Opportunity */}
      <div>
        <h2>Thrive in your career</h2>
      </div>
    </div>
  );
};

export default Opportunity;
