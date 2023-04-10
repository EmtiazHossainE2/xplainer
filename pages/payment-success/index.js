import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import Image from "next/image";
import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <>
      <CommonHead
        title={"Xplainerr | Payment Success"}
        description={" "}
        favIcon={"/favicon.ico"}
      />
      <PageLayout>
        <div className="container mx-auto px-2 lg:px-12 py-12 lg:py-0">
          <div className="flex lg:h-screen flex-col items-center justify-center text-center">
            <div>
              <Image
                src="/images/payment/success.svg"
                alt="icon"
                width={150}
                height={150}
              />
            </div>
            <div>
              <h2 className="pt-8 lg:pt-10 text-3xl lg:text-[40px] font-semibold lg:leading-[48px]">
                Payment successful !{" "}
              </h2>
              <p className="pt-4 text-base lg:text-2xl">
                Your payment was successful. Please check your dashboard <br className="hidden lg:block"/>{" "}
                to access registered courses .{" "}
              </p>
              {/* Large  */}
              <p className="hidden lg:block py-10 text-[#838383]">
                session_id :
                abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
              </p>
              {/* Mobile  */}
              <p className="lg:hidden py-5 text-[#838383]">
                session_id :
                abcdefghijklmnopqrst...
              </p>
              <Link href="/dashboard">
                <button className="rounded-md bg-[#4F46E5] py-[7px] pl-2.5 pr-[11px] text-sm font-semibold text-white">
                  Go to dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default PaymentSuccess;
