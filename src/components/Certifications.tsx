import { Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    { name: 'Python Programming', issuer: 'Microsoft, NxtWave, NPTEL' },
    { name: 'Deep Learning', issuer: 'NVIDIA' },
    { name: 'Power BI', issuer: 'Be10x, NxtWave' },
    { name: 'Git & GitHub', issuer: 'NxtWave' },
    { name: 'JavaScript', issuer: 'NxtWave' },
    { name: 'SQLite Database', issuer: 'NxtWave' },
    { name: 'IoT Fundamentals', issuer: 'NPTEL (Oct 2024)' },
    { name: 'Generative AI Workshop', issuer: 'NxtWave' },
    { name: 'Linguaskills - Communication Skills', issuer: 'Cambridge Assessment' },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Certifications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-5 border border-blue-100 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-600 rounded-lg flex-shrink-0">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
