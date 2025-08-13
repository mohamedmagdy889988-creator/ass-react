import { FaLinkedinIn, FaTwitter, FaFacebookF, FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative p-5 px-16 bg-gray-900 text-white grid grid-cols-3 items-center">
      <div className="flex flex-col gap-2 items-center max-w-xs">
        <p className="font-bold text-lg">LOCATION</p>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-lg">AROUND THE WEB</p>
        <div className="mt-2 flex space-x-3">
          {[FaLinkedinIn, FaTwitter, FaFacebookF, FaGlobe].map((Icon, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition"
            >
              <Icon size={18} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center max-w-xs text-center">
        <p className="font-semibold">ABOUT FREELANCER</p>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>

    </footer>
  );
}

export default Footer;
