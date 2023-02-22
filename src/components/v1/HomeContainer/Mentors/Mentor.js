import Image from "next/image"

const Mentor = ({ mentor }) => {
  return (
    <div className="mentor lg:border rounded-lg">
      <div className="flex justify-center">
        <Image src={`/images/mentors/${mentor.image}`} width={310} height={250} alt={`${mentor.name}`} />
      </div>
      <h4 className="text-center text-xl font-semibold py-2">{mentor.name}</h4>
      
      {/* Job Timeline  */}
      <ul>
        <li class="relative flex items-baseline gap-3 pb-3">
          <div class="before:absolute before:left-[3.2px] before:h-full before:w-[1px] before:bg-[#B6B6B6]">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" class="bi bi-circle-fill fill-[#B6B6B6]" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="text-sm">{mentor.job1}</p>
          </div>
        </li>
        <li class="relative flex items-baseline gap-3 pb-5">
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" class="bi bi-circle-fill fill-[#B6B6B6]" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p className="text-sm">{mentor.job2}</p>
          </div>
        </li>
      </ul>

    </div>
  )
}

export default Mentor