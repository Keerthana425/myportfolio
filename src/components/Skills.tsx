export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 'Advanced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'C', level: 'Intermediate' },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML5 & CSS3', level: 'Advanced' },
        { name: 'Bootstrap', level: 'Intermediate' },
        { name: 'Flexbox & Responsive Design', level: 'Advanced' },
      ],
    },
    {
      category: 'Data Analytics',
      skills: [
        { name: 'NumPy & Pandas', level: 'Advanced' },
        { name: 'Matplotlib', level: 'Intermediate' },
        { name: 'Power BI', level: 'Advanced' },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', level: 'Advanced' },
        { name: 'SQLite', level: 'Advanced' },
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'VS Code', level: 'Advanced' },
        { name: 'ESP32 & Arduino', level: 'Intermediate' },
        { name: 'HFSS & CAD Tools', level: 'Intermediate' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-xs text-blue-600 font-semibold">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{
                          width: skill.level === 'Advanced' ? '90%' : '70%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-blue-600 mb-3">Technical Expertise</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Advanced problem-solving</li>
                <li>• Full-stack development</li>
                <li>• Cross-platform integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-600 mb-3">Soft Skills</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Team leadership</li>
                <li>• Project management</li>
                <li>• Rapid prototyping</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-600 mb-3">Analytical Skills</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Algorithmic thinking</li>
                <li>• Cost-effective solutions</li>
                <li>• Research-oriented approach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
