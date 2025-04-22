import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">📬 聯絡我</h2>
        <p className="text-lg text-gray-700 mb-6">
          如果有任何問題或合作機會，歡迎隨時聯繫我！
        </p>
        <div className="mt-4">
          <a
            href="mailto:adam20031111@gmail.com"
            className="text-lg text-blue-600 hover:underline"
          >
            adam20031111@gmail.com
          </a>
        </div>
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://github.com/StudyBearTw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}