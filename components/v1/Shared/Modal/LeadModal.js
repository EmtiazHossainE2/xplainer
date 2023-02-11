

const LeadModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[550px] flex flex-col'>
        <button className='text-black bg-white text-lg place-self-end border rounded-full px-2 py-.5 mb-2' onClick={() => onClose()}>X</button>
        <div className='bg-white p-5 rounded-lg '>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo cupiditate laudantium doloribus sit numquam fugiat optio pariatur error repellat, qui doloremque facilis officia quas labore eos, blanditiis veniam. Velit saepe fugit amet voluptatum id aliquid ad voluptate laboriosam, placeat voluptates. Minima praesentium asperiores eveniet quae assumenda rem quisquam quam incidunt!
        </div>
      </div>
    </div>
  )
}

export default LeadModal