import { Mail, Phone, MapPin } from "lucide-react"

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center mb-4">
    {icon}
    <span className="ml-3 text-gray-600 dark:text-gray-300">{text}</span>
  </div>
)

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Contact Me</h2>
        <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
          <ContactInfo icon={<Mail size={24} className="text-blue-500" />} text="chakrasaiaku@gmail.com" />
          <ContactInfo icon={<Phone size={24} className="text-blue-500" />} text="+91 9177464350" />
          <ContactInfo icon={<MapPin size={24} className="text-blue-500" />} text="Hyderabad, India" />

          <form className="mt-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

