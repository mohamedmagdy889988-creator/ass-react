
import { useState } from 'react'
import Heading from '../Components/Heading.jsx'

const images = Object.values(import.meta.glob("../assets/image/*", { eager: true, import: 'default' }));

function Portfolio() {
  const [openModel, setOpenModel] = useState(false);
  const [imageurl, setImageUrl] = useState("");

  const handleUserClick = (e) => {
    setImageUrl(e.target.getAttribute('src'));
    setOpenModel(true);
  };

  return (
    <>
      <Heading text={`Portfolio Section`} />
      <div className='row'>
        {images.map((image, index) => (
          <div className='sm:w-full md:w-1/2 lg:w-1/3' key={index}>
            <img
              onClick={handleUserClick}
              src={image}
              className='w-full p-2'
              alt=''
            />
          </div>
        ))}
      </div>
      {openModel && (
        <div className=' fixed inset-0 z-10 flex justify-center items-center'>

          <div onClick={() => setOpenModel(false)}
          className='bg-sky-950 opacity-75 absolute w-full h-full z-20'></div>
          <img src={imageurl} className='w-1/2 relative z-30' alt="Model image" />
        </div>
      )}
    </>
  )
}

export default Portfolio;
