import Image from "next/image"

const Mentor = ({ mentor }) => {
  return (
    <div className="mentor lg:border rounded-lg">
      <div className="flex justify-center">
        <Image src={`/images/mentors/${mentor.image}`} width={310} height={250} alt={`${mentor.name}`} />
      </div>
      <h4 className="text-center text-xl font-semibold py-2">{mentor.name}</h4>
      {/* Job Road Map  */}
      <div className="roadMap text-left pt-2">
        <div className="roadMap_dataBox box">
          <div className="singleData-box">
            <p className="list">{mentor.job1}</p>
            <p className="list">{mentor.job2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mentor