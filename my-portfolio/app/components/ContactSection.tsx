export default function ContactSection() {
    return (
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-700">Feel free to reach out to me!</p>
        <div className="mt-4">
          <a
            href="mailto:adam20031111@gmail.com"
            className="text-blue-600 hover:underline"
          >
            adam20031111@gmail.com
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/StudyBearTw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </section>
    );
  }  