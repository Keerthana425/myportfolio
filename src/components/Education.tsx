import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: 'G. Pullaiah College of Engineering and Technology',
      degree: 'B.Tech in Electronics and Communication Engineering',
      period: '2022 - 2026',
      score: 'CGPA: 9.01/10',
      details: ['Currently in 4th Year', 'Specialization: Embedded Systems, IoT, Full Stack Development'],
    },
    {
      institution: 'Sri Sudha Junior College',
      degree: 'Intermediate (MPC)',
      period: '2020 - 2022',
      score: 'Marks: 95%',
      details: ['Stream: Mathematics, Physics, Chemistry'],
    },
    {
      institution: 'KVSSGP High School',
      degree: 'SSC',
      period: '2020',
      score: 'CGPA: 96%',
      details: [],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 md:p-8 border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{edu.institution}</h3>
                    <span className="text-sm text-gray-600 font-medium mt-1 md:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-lg text-gray-700 font-medium mb-2">{edu.degree}</p>
                  <p className="text-blue-600 font-semibold mb-3">{edu.score}</p>
                  {edu.details.length > 0 && (
                    <ul className="space-y-1">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">• {detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
