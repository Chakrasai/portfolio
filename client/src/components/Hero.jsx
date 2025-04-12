const Hero = () => {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Chakrasai Akuthota</h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            B.Tech Student | ReactJS | NodeJS | Machine Learning
          </p>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
    )
  }
  
export default Hero
  
  