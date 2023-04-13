import CertificateForm from "@/src/components/v3/Certificate/CertificateForm";
import PageLayout from "@/src/layout/PageLayout";
import { useRef } from "react";

const Certificate = () => {
  const finalCertificate = useRef(null);

  return (
    <PageLayout>
      <CertificateForm finalCertificate={finalCertificate} />
    </PageLayout>
  );
};

export default Certificate;
