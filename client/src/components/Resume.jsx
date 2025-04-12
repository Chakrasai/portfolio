import { FileText } from "lucide-react"

const ResumeSection = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h3>
    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)

const Resume = () => {
  const education = [
    "B.TECH: Computer Science & Engineering (AI & ML), Institute of Aeronautical Engineering, 2022–2024, CGPA: 8.5/10.0",
    "INTERMEDIATE: Narayana Junior College, 2020–2022, Marks: 964/1000",
  ]

  const certifications = [
    "Data Science Using Python - NPTEL",
    "SQL, Java, Problem Solving - HackerRank",
    "AI and ML Virtual Internship - AICTE, Eduskills",
    "Software Engineering - JP Morgan, Forage",
    "Python Essentials - Cisco",
  ]

  const codingPlatforms = [
    "LeetCode: 144 solved - leetcode.com/chakrasai",
    "GeeksforGeeks: 74 solved - gfg.com/chakrasnsi1",
    "HackerRank: JAVA Silver 4 Stars, SQL Silver 4 Stars - hr.com/chakrasaiaku",
  ]

  const minorProjects = [
    "Dice Game - Developed using ReactJS",
    "Amazon Clone - E-commerce website simulation in ReactJS",
    "Quiz App - Built with HTML, CSS, JavaScript for interactive quizzes",
    "Registration Form - Data storage in local memory using JavaScript",
  ]

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Resume</h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <ResumeSection title="Education" items={education} />
          <ResumeSection title="Certifications" items={certifications} />
          <ResumeSection title="Coding Platforms" items={codingPlatforms} />
          <ResumeSection title="Minor Projects" items={minorProjects} />
          <div className="mt-8 text-center">
            <a
              href="/resumeac.pdf"
              download
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300"
            >
              <FileText size={24} className="mr-2" />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

