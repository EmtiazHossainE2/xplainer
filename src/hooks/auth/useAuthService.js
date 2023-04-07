import { useSelector } from "react-redux";

const useAuthService = () => {
  const { currentUser, isLoading } = useSelector((state) => state.user);
  let isAuthenticated = currentUser?.email ? true : false;
  const { courses: purchasedCourses } = useSelector((state) => state.course);


  return {
    isAuthenticated: isAuthenticated,
    currentUser,
    isLoading,
    purchasedCourses
  };
};

export default useAuthService;
