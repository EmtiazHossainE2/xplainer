import { BACKEND_API } from "@/src/config/backend";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

const Reviews = () => {
  const router = useRouter();
  // console.log(router.query.slug);
  const params = router.query.slug;
  const [singleCourseReview, setSingleCourseReview] = useState([]);
  useEffect(() => {
    const getReviewData = async () => {
      try {
        const response = await axios.get(`${BACKEND_API}/reviews/${params}`);
        // console.log(response.data.result,'res');
        setSingleCourseReview(response.data.result, "res");
      } catch (error) {
        console.error(error);
      }
    };
    getReviewData();
  }, [params]);
  // console.log("first", singleCourseReview);

  return (
    <div>
      <h2 className="pt-5 lg:pt-0 pb-3 text-xl font-semibold lg:text-2xl">User Reviews</h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {singleCourseReview?.reviews?.map((reviewer, index) => (
          <div key={index} className="rounded-md border p-5">
            {/* Reviewer Profile  */}
            <div className="flex items-center gap-3">
              <Image
                src={reviewer?.profile}
                alt={reviewer.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h4 className="font-bold">{reviewer?.name}</h4>
                <p>{reviewer?.company}</p>
              </div>
            </div>
            {/* Ratings  */}
            <div className="flex gap-1 py-3">
              <BsFillStarFill className="text-[#FFB621] " size={20} />
              <BsFillStarFill className="text-[#FFB621] " size={20} />
              <BsFillStarFill className="text-[#FFB621] " size={20} />
              <BsFillStarFill className="text-[#FFB621] " size={20} />
              <BsFillStarFill className="text-[#FFB621] " size={20} />
            </div>
            {/* Review and date */}
            <p className="py-2">{reviewer?.review}</p>
            <p className="text-sm text-gray-500">{reviewer?.reviewDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
