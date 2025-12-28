import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-20">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Butta Keerthana
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8">
            Electronics & Communication Engineer | Full Stack Developer
          </p>
        </div>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Passionate about full-stack software development and intelligent system design.
          Skilled in Python, JavaScript, MySQL, Embedded Systems, IoT, Power BI, and Deep Learning,
          with a strong ability to translate complex challenges into clean, scalable, and high-impact software solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:rkeerthana280@gmail.com"
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>
          <a
            href="https://github.com/Keerthana425"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/keerthana-reddy425"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Kurnool, Andhra Pradesh</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>9573466051</span>
          </div>
        </div>
      </div>
    </section>
  );
}
