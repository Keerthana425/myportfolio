import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-blue-100 mb-10">
          I'm always open to discussing new opportunities, innovative projects, or collaborations.
          Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:rkeerthana280@gmail.com"
            className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
          >
            <Mail size={32} />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-blue-100">rkeerthana280@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:9573466051"
            className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
          >
            <Phone size={32} />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm text-blue-100">9573466051</p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl">
            <MapPin size={32} />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-sm text-blue-100">Kurnool, Andhra Pradesh</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/Keerthana425"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/keerthana-reddy425"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-100 text-sm">
            &copy; 2025 Butta Keerthana. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
