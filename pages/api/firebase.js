import { db, firestoreDbRef } from "@/src/auth/firebase/Firebase.init";
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
    const dbRef = ref(db);
    const courseChannel = `courses/${courseSlug}`;
    const snap = await get(child(dbRef, courseChannel));
    const courseDetail = snap.val();
    return courseDetail;
  } catch (err) {
    throw err;
  }
};

export const validateSubscription = async (userId, courseId) => {
  try {

    let hasCourseAccess = false;
    const client_ref_id = getClientReferenceId(userId, courseId);

    const db = firestoreDbRef;

    const paymentRef = collection(db, "payments");

    const q = query(paymentRef, where("client_reference_id", "==", client_ref_id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
       if(doc.id){
        hasCourseAccess = true;
       }
    });




    return hasCourseAccess;
   
  } catch (err) {
    throw err;
  }
};
