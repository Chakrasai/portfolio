const Skills = () => {
    const skillCategories = [
      { category: "Languages", skills: ["Python", "Java", "JavaScript", "HTML", "CSS"] },
      { category: "Databases", skills: ["MySQL", "MongoDB"] },
      { category: "Frameworks And Technologys", skills: ["Node.js", "React.js","Machine Learning","WebSockets"]},
      { category: "Other Skills", skills: ["Problem solving", "Team collaboration"] },
    ]
  
    return (
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{category.category}</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills
  
  