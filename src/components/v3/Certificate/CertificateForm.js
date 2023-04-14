import useAuthService from "@/src/hooks/auth/useAuthService";
import { useEffect, useState } from "react";
import ReactToPrint from "react-to-print";
import FinalCertificate from "./FinalCertificate";

const CertificateForm = ({ finalCertificate, detail }) => {
  const { currentUser } = useAuthService();
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const getDate = `${day} / ${month} / ${year}`;

  const [genCertificate, setGenCertificate] = useState({});

  useEffect(() => {
    setGenCertificate({
      name: currentUser?.displayName,
      instructor: detail?.instructor,
      course: detail?.title,
      getDate,
    });
  }, [currentUser?.displayName, detail?.instructor, detail?.title, getDate]);

  return (
    <div className="my-8">
      {/* Certificate Area  */}
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
