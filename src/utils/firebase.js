import { db, firestoreDbRef } from "@/src/auth/firebase/Firebase.init";
import { child, get, ref } from "firebase/database";
import { collection, getDocs, query, where } from "firebase/firestore";

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
    let courseData = {};
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
  let hasCourseAccess = false;

  if (!userId || !courseId) return false;

  try {
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

export const getCoursePageInfo = async ({ userId, courseSlug }) => {
  try {
    const currentCourseData = await fetchCourseDetail(courseSlug);
    const courseId = currentCourseData?.courseID;

    let hasCourseAccess = false;
    if (userId) {
      hasCourseAccess = await validateSubscription(userId, courseId);
    }

    return {
      hasCourseAccess,
      currentCourseData,
      courseId,
    };
  } catch (err) {
    throw err;
  }
};

export const getClientReferenceId = (userID, courseID) => {
  if (userID && courseID) {
    return `${userID}-${courseID}`;
  }
};
