import CertificateForm from "@/src/components/v3/Certificate/CertificateForm";
import { allCourses } from "@/src/config/constants";
import ProtectedLayout from "@/src/layout/ProtectedLayout";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const DynamicCertificate = () => {
  const finalCertificate = useRef(null);
  const router = useRouter();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    if (
      allCourses &&
      allCourses.map((course) => course.slug === router.query.slug)
    ) {
      const courseDetail = allCourses.find(
        (course) => course.slug === router.query.slug
      );
      setDetail(courseDetail);
    }
  }, [router.query.slug]);

  console.log(detail);

  return (
    <div>
      <ProtectedLayout>
        <CertificateForm finalCertificate={finalCertificate} detail={detail} />
      </ProtectedLayout>
    </div>
  );
};

export default DynamicCertificate;
