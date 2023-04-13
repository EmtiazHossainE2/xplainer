import { useState } from "react";
import { toast } from "react-hot-toast";
import ReactToPrint from "react-to-print";
import FinalCertificate from "./FinalCertificate";

const CertificateForm = ({ finalCertificate }) => {
  const [name, setName] = useState("");
  const [instructor, setInstructor] = useState("");
  const [course, setCourse] = useState("");
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const getDate = `${day} / ${month} / ${year}`;

  const [genCertificate, setGenCertificate] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setGenCertificate({
      name,
      instructor,
      course,
      getDate,
    });
    toast.success("Certificate Generated Successfully..!");
  };
  return (
    <div className="my-8">
      <div className="container mx-auto w-11/12 max-w-4xl rounded-2xl border pb-3 md:w-6/12 md:p-6 md:shadow-md">
        <h3 className=" flex items-center justify-center p-4 text-xl font-semibold">
          Your certificate information
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 px-2">
          <div>
            <label htmlFor="fullName" className="text-xs font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="fullName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Emtiaz Hossain Emon"
              className="mt-1 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              readOnly
              placeholder="emtiazhossainrzs@gmail.com"
              className="mt-1 w-full cursor-not-allowed appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm font-medium shadow-sm "
            />
          </div>
          <div className="flex flex-col justify-between gap-5 lg:flex-row">
            <div>
              <label htmlFor="course" className="text-xs font-medium">
                Course Name
              </label>
              <input
                type="text"
                name="course"
                // readOnly
                required
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="api for pm"
                className="mt-1 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm font-medium shadow-sm md:text-base"
              />
            </div>
            <div>
              <label htmlFor="instructor" className="text-xs font-medium">
                Instructor
              </label>
              <input
                type="text"
                name="instructor"
                // readOnly
                value={instructor}
                required
                onChange={(e) => setInstructor(e.target.value)}
                placeholder="Deepak Kumar"
                className="mt-1 w-full  appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm font-medium shadow-sm "
              />
            </div>
          </div>

          {/* button  */}
          <button
            type="submit"
            className="rounded-lg bg-[#0070F4] px-4 py-2 text-sm font-medium text-white"
          >
            Generate Certificate
          </button>
        </form>
      </div>

      {/* Certificate Area  */}
      <div className="container mx-auto mt-10 flex flex-col items-center justify-center  px-3">
        <h2 className="mb-5 rounded-md bg-[#252121] py-2 px-4 text-center text-lg font-medium text-white">
          Your Certificate{" "}
        </h2>
      </div>
      {genCertificate && (
        <FinalCertificate
          finalCertificate={finalCertificate}
          genCertificate={genCertificate}
        />
      )}

      {/* Export buttons  */}
      <div className="my-5 flex flex-col items-center justify-center gap-5 lg:flex-row">
        <ReactToPrint
          trigger={() => (
            <button className="rounded-lg bg-[#0070f4] px-4 py-2 text-sm font-medium text-white">
              Export as PDF
            </button>
          )}
          content={() => finalCertificate.current}
        />
      </div>
    </div>
  );
};

export default CertificateForm;
