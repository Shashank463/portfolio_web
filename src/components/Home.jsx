import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gray-400 dark:bg-gray-700 transition-colors duration-300 min-h-screen flex flex-col items-center justify-center px-4"
    >
      <h1 className="font-bold text-4xl sm:text-5xl mb-7 md:text-6xl text-blue-900 dark:text-blue-400">
        Hi I am Shashank Kashyap!
      </h1>
      <p className="text-black-500 dark:text-gray-300 text-xl md:text-2xl max-w-2xl text-center leading-relaxed">
        I am a Full Stack Developer with a passion for creating dynamic and
        responsive web applications & specializing in React.js & Node.js. I love
        to explore new technologies and continuously improve my skills. Welcome
        to my portfolio!
      </p>
    </section>
  );
};

export default Home;
