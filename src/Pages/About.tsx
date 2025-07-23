
const About = () => {
  return (
    <div className="pt-20 pb-10 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="flex flex-col items-center  ">
        <h1 className="text-red-500 font-bold  text-3xl mb-3">About </h1>
        <h1 className="text-4xl font-bold text-center text-blue-black mb-4"> Skill<span className="text-blue-500">Scape</span></h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center w-full max-w-2xl ">
          SkillScape is your visual guide to mastering web development.
        </p>
        </div>
        {/* Mission Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">🎯 Our Mission</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            Our mission is to make learning web development simple, visual, and effective. We aim to empower learners with clear guidance and curated resources so they can focus more on learning and less on figuring out what to learn next.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">🌟 Our Vision</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            We envision a world where learning to code is as intuitive as reading a map. Through roadmaps, tips, tools, and real-world pathways, SkillScape brings structure to self-paced learning and supports you every step of the way.
          </p>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">📚 Our Learning Philosophy</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Start with strong fundamentals</li>
            <li>Learn by doing and building</li>
            <li>Use visual tools to plan and track your journey</li>
            <li>Stay curious and embrace challenges</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <p className="text-md text-gray-600 mb-4">Ready to begin your journey?</p>
          <a href="/roadmap">
            <button className="bg-blue-600 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-200">
              Explore Roadmaps
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
