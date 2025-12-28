import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Research Intern',
      company: 'DLRL (DRDO)',
      location: 'Hyderabad',
      period: 'Aug 2025 - Feb 2026',
      responsibilities: [
        'Designed multiple Vivaldi antennas using metasurface concepts',
        'Hands-on antenna design in HFSS tools',
        'Applied scripts for simulation validation and performance checks',
        'Optimized antenna parameters for higher gain and bandwidth',
        'Created visualization tools for radiation patterns and performance metrics',
      ],
    },
    {
      title: 'Embedded Systems Intern',
      company: 'SkillDrize',
      location: 'Kurnool',
      period: 'May 2025 - June 2025',
      responsibilities: [
        'Developed IoT data collection scripts and real-time monitoring workflows',
        'Automated embedded testing and diagnostics',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                    <span className="text-sm text-gray-600 font-medium mt-2 md:mt-0 bg-blue-50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
