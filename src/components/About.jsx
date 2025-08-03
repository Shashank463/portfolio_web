import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center min-h-screen bg-gray-400 dark:bg-gray-700 transition-colors duration-300 px-4"
    >
      <h1 className="text-5xl font-bold mb-7 md:text-6xl text-blue-900 dark:text-blue-400 leading-relaxed">
        About Me !
      </h1>
      <p className="text-black-500 dark:text-gray-300 text-xl md:text-2xl max-w-2xl text-center">
        Motivated and curious B.Tech Computer Science student specializing in
        Artificial Intelligence, with hands-on experience in building and
        deploying responsive web applications. Developed projects like an Amazon
        Clone, To-Do App, and Digital Clock using HTML, CSS, and JavaScript and
        Pixabay_Clone using React.js bootstrap. Eager to apply and expand my
        skills in real-world environments, with a growing interest in React and
        backend technologies like Node.js.
      </p>
      <h3 className="text-2xl font-semibold mt-10 text-blue-900 dark:text-blue-200">
        Skills
      </h3>
      <p className="text-black-500 dark:text-gray-300  md:text-2xl max-w-2xl text-center mt-4 leading-relaxed">
    HTML, CSS, JavaScript
    React.js
    Node.js
    Express.js
    MongoDB
    Git & GitHub
    Responsive Web Design
    Tailwind.css
    Bootstrap
    Problem Solving
    Team Collaboration
    Version Control
    Continuous Learning
    Web Development

      </p>
    </section>
  );
};

export default About;
