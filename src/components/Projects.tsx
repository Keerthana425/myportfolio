import { Code2, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Hand Gesture Control System',
      description: 'Built touchless computer control using Python, OpenCV, and CVZone',
      highlights: [
        'Implemented multi-command gesture recognition',
        'Achieved real-time responsiveness',
      ],
      technologies: ['Python', 'OpenCV', 'CVZone'],
    },
    {
      title: 'Real-Time Object Detection (YOLOv8)',
      description: 'Live object detection system with high accuracy',
      highlights: [
        'Improved accuracy via confidence tuning',
        'Implemented duplicate filtering',
      ],
      technologies: ['YOLOv8', 'OpenCV', 'Python'],
    },
    {
      title: 'IoT Soil Nutrient Estimation',
      description: 'ESP32-based nutrient (NPK + pH) monitoring setup for precision farming',
      highlights: [
        'Python scripts for preprocessing and cloud visualization',
        'Automated alerts enabling precision farming',
      ],
      technologies: ['ESP32', 'Python', 'IoT', 'Cloud Services'],
    },
    {
      title: 'Data Analytics Pipeline',
      description: 'Automated data pipeline from Python to Power BI',
      highlights: [
        'Automated preprocessing and feature engineering',
        'Built dynamic dashboards for KPIs and trends',
        'Integrated Python with Power BI for seamless reporting',
      ],
      technologies: ['Python', 'Power BI', 'Pandas', 'NumPy'],
    },
    {
      title: 'Food Munch - Online Food Ordering Website',
      description: 'Responsive food ordering platform with smooth navigation',
      highlights: [
        'Built clean UI and secure backend',
        'Modular component architecture',
      ],
      technologies: ['JavaScript', 'Node.js', 'HTML', 'CSS', 'SQLite'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Code2 className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 flex-1">{project.title}</h3>
              </div>

              <p className="text-gray-700 mb-4">{project.description}</p>

              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
