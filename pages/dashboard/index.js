import { MyCourses, Settings } from "@/src/components/v1/Dashboard";
import Certificates from "@/src/components/v1/Dashboard/Certificates";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import useAuthService from "@/src/hooks/auth/useAuthService";
import ProtectedLayout from "@/src/layout/ProtectedLayout";
import { getAuthUserFromCookie } from "@/src/lib/auth";
import { updateCourse } from "@/src/store/features/courses/courseSlice";
import { fetchCourseDetail, getAllCoursesByUserId } from "@/src/utils/firebase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Dashboard = ({ allCourses }) => {
  const { currentUser } = useAuthService();

  const [active, setActive] = useState(0);
  const [clicked, setClicked] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCourse(allCourses));
  }, [allCourses, dispatch]);

  const menus = [
    { id: 0, name: "All Courses" },
    { id: 1, name: "Certificate" },
    { id: 2, name: "Settings" },
  ];

  const handleActive = (index) => {
    setActive(index);
    setClicked(index);
  };

  return (
    <>
      <CommonHead
        title={"Xplainerr | Dashboard"}
        description={" "}
        favIcon={"/favicon.ico"}
      />
      <ProtectedLayout>
        <div className="bg-black">
          <div className="container mx-auto px-5 lg:px-16 big:px-[130px]">
            <h2 className="pt-9 pb-7 text-lg  font-medium text-white lg:text-[26px] lg:font-bold lg:leading-[48px] big:pb-16 ">
              Welcome Back ,{" "}
              <span className="pb-1 lg:hidden">
                <br />
              </span>
              {currentUser?.displayName}
            </h2>

            {/* Menus  */}
            <nav className="flex items-center gap-5 border-gray-200 ">
              {menus.map((menu, index) => (
                <p
                  key={index}
                  onClick={() => handleActive(index)}
                  className={`cursor-pointer border-b-[6px] pb-2 text-sm lg:px-2 lg:text-base  ${
                    index === clicked
                      ? "font-semibold text-white "
                      : "border-transparent text-white"
                  }`}
                >
                  {menu.name}
                </p>
              ))}
            </nav>
            {/* Menus  */}
          </div>
        </div>

        {/* Child  */}
        <div className="container mx-auto px-5 py-16 lg:px-16 big:px-[130px] ">
          {active === 0 && <MyCourses allCourses={allCourses} />}
          {active === 1 && (
            <Certificates currentUser={currentUser} allCourses={allCourses} />
          )}
          {active === 2 && <Settings currentUser={currentUser} />}
        </div>
      </ProtectedLayout>
    </>
  );
};

export default Dashboard;

export const getServerSideProps = async ({ req, res }) => {
  // fetch cookie
  let user = null;
  let unlockedCourses = [];
  user = getAuthUserFromCookie(req);

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const allCourseData = await getAllCoursesByUserId(user.uid);

  if (allCourseData) {
    await Promise.all(
      allCourseData.map(async (course, index) => {
        const courseId = course.course_id;
        //courseID
        const courseDetail = await fetchCourseDetail({ courseId });
        if (courseDetail?.courseID) {
          unlockedCourses.push(courseDetail);
        }
      })
    );
  }

  return {
    props: {
      user: user,
      allCourses: unlockedCourses,
    },
  };
};
