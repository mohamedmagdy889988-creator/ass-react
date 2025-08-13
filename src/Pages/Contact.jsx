import Heading from "../Components/Heading";

function Contact() {
  return (
    <div className="container mx-auto px-4 mt-">
      <Heading text="Contact Section" className="mb-8" />

      <form className="max-w-lg mx-auto space-y-6">
        <div>
          <input
            type="text"
            placeholder="User Name"
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="User Age"
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="User Email"
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="User Password"
            className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
