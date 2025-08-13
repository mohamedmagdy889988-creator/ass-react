
import Heading from '../Components/Heading'
import image from '../assets/avataaars.svg'


function Home() {
  console.log(image);
  
  return (
    <>
    <img src={image} className='w-1/6 mx-auto'  alt="" />
    <Heading text={'start FrameWork'} />

    </>
  )
}

export default Home