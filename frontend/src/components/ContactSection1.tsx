import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const ContactSection1 = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <p className="text-sm text-blue-600 font-semibold">Contact us</p>
        <h1 className="text-3xl md:text-5xl font-bold my-2">
          Get in Touch With Us
        </h1>
        <p className="text-gray-600 mb-10">
         
        </p>

        <div className="space-y-8">
          {/* Location */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <FiMapPin className="text-3xl text-blue-600" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Headquarter</h2>
              <p className="text-gray-600">
              123 Main Street, City
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <FiPhone className="text-3xl text-blue-600" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Call Us</h2>
              <p className="text-gray-600">2024305139</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <FiMail className="text-3xl text-blue-600" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Email Us</h2>
              <p className="text-gray-600">support@truestoncapital.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection1;
