import Heading from '../Components/Heading.jsx';

function About() {
  return (
    <div className="py-10 mb-25">

      <Heading text="About Component"/>

      <div className="container mx-auto px-40 flex flex-col md:flex-row  mt-6">


        <div className="flex gap-8">
          <div className="w-1/2 text-white text-lg text-left">
            Freelancer is a free bootstrap theme created by Route.
            The download includes the complete source files including HTML,
            CSS, and JavaScript as well as optional SASS stylesheets for easy customization.


          </div>
          <div className="w-1/2 text-white text-lg text-left">
            Freelancer is a free bootstrap theme created by Route.
            The download includes the complete source files including HTML,
            CSS, and JavaScript as well as optional SASS stylesheets for easy customization.


          </div>
        </div>


      </div>
    </div>
  );
}

export default About;

