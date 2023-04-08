import { db, firestoreDbRef } from "@/src/auth/firebase/Firebase.init";
import { getAuthUserFromCookie } from "@/src/lib/auth";
import { getClientReferenceId } from "@/src/utils/helper";
import { child, get, ref } from "firebase/database";
import { collection, query, where, getDocs } from "firebase/firestore";

export const fetchCurrentUserCourses = async (user) => {
  try {
    const dbRef = ref(db);
    const channel = `users/${user.uid}/courses`;
    const snapshot = await get(child(dbRef, channel));
    const courseData = snapshot.val();
    return courseData;
  } catch (err) {
    throw err;
  }
};

export const fetchCourseDetail = async (courseSlug) => {
  try {
    let courseData = null;
    const coursesRef = collection(firestoreDbRef, "courses");
    const q = query(coursesRef, where("slug", "==", courseSlug));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.id) {
        courseData = doc.data();
      }
    });

    return courseData;
  } catch (err) {
    throw err;
  }
};

export const validateSubscription = async (userId, courseId) => {
  try {
    let hasCourseAccess = false;
    const client_ref_id = getClientReferenceId(userId, courseId);

    const paymentRef = collection(firestoreDbRef, "payments");
    const q = query(
      paymentRef,
      where("client_reference_id", "==", client_ref_id)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.id) {
        hasCourseAccess = true;
      }
    });

    return hasCourseAccess;
  } catch (err) {
    throw err;
  }
};

//** Course Details Page  */

export const getCoursePageInfo = async ({ req, courseSlug }) => {

    const currentCourseData = await fetchCourseDetail(courseSlug);
  const courseId = currentCourseData?.courseID;
  const user = getAuthUserFromCookie(req);

  let hasCourseAccess = false;
  if (user) {
    const uid = user.uid;
    hasCourseAccess = await validateSubscription(uid, courseId);
  }

  return {
    hasCourseAccess,
    currentCourseData,
    courseId,
  };
};
