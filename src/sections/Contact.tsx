import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Mail,
  Phone,
  MapPin,
  Download
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0B1120] py-24 px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-white">
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always interested in discussing Java Backend Development,
            Spring Boot, Enterprise Applications, and AI-powered automation
            opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-blue-500" size={22} />
              <a
                href="mailto:nikhilbafna@outlook.com"
                className="text-gray-300 hover:text-blue-400"
              >
                nikhilbafna@outlook.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-500" size={22} />
              <a
                href="tel:+9175079546845"
                className="text-gray-300 hover:text-blue-400"
              >
                +91 75079 54684
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-500" size={22} />
              <span className="text-gray-300">Pune, Maharashtra, India</span>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://www.linkedin.com/in/nikhilbafna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              <a
                href="https://github.com/nikhil19bafna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400"
              >
                <FaGithub size={20} />
                GitHub
              </a>
            </div>

            <a
              href="/Nikhil_Bafna_Resume.pdf"
              download
              className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111827] rounded-xl p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-7">
              If you're looking for a Java Backend Engineer with experience in
              Spring Boot, enterprise application development, and Generative
              AI workflow automation, I'd be happy to connect.
            </p>

            <div className="mt-8">
              <a
                href="mailto:nikhilbafna@outlook.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;