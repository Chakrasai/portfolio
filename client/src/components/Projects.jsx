import { GitlabIcon as GitHub } from "lucide-react";

const ProjectCard = ({ title, description, tools, link, demo }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tools: {tools}</p>
    <div className="flex space-x-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-500 hover:text-blue-600"
      >
        <GitHub size={20} className="mr-2" />
        View on GitHub
      </a>
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-500 hover:text-green-600"
        >
          Live Demo
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Voice-Controlled App & Website Launcher",
      description:
        "Built a web-based voice assistant that launches pre-configured apps and websites via voice commands. Integrated speech recognition for real-time control and developed an intuitive UI to manage launchable tools.",
      tools: "ReactJS, JavaScript, Tailwind CSS, react-speech-recognition,web-sockets",
      link: "https://github.com/Chakrasai/launcher",
      demo: "https://github.com/Chakrasai/launcher",
    },
    {
      title: "Real-time Chat Application with Room Management",
      description:
        "Developed a real-time chat application that supports login/signup, room creation and joining, and message synchronization. Enabled users to chat, share images, and manage chat rooms efficiently.",
      tools: "JavaScript, Node.js, Express.js, MongoDB, Socket.io, ReactJS",
      link: "https://github.com/Chakrasai/chat",
      demo: "https://chat-tawny-two.vercel.app/",
    },
    {
      title: "Email Spam Detection using Machine Learning",
      description:
        "Developed a machine learning model to detect spam emails with high accuracy. Utilized natural language processing techniques to preprocess email text data and trained a classifier using various algorithms.",
      tools: "Python, Scikit-learn, NLTK, Pandas,Reactjs,Nodejs",
      link: "https://github.com/Chakrasai/spam",
      demo: "",
    },
    {
      title: "Simple E-commerce site (Frontend)",
      description:
        "Developed a simple e-commerce website for fruits and vegetables using ReactJS, enabling seamless browsing and purchasing. Implemented efficient state management for product listing, cart, and checkout processes.",
      tools: "ReactJS, JavaScript, CSS, HTML, Tailwind",
      link: "https://github.com/Chakrasai/Ecom",
    },
    {
      title: "Fruits and Vegetables Detection",
      description:
        "Built a fruit and vegetable image classifier using machine learning libraries (TensorFlow, Keras) on a dataset of 20,000 images. Applied data augmentation, developed a CNN model, and used early stopping and checkpoints for optimized training.",
      tools: "Python, TensorFlow, Keras, Matplotlib",
      link: "https://github.com/Chakrasai/fvclassi",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
