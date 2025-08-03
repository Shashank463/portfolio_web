import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-400 dark:bg-gray-700 transition-colors duration-300 h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center felx flex-col items-center justify-center shadow-gray-900 max-h-200 max-w-200 bg-gray-900 dark:bg-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h1 className="font-bold text-5xl md:text-6xl text-blue-900 dark:text-blue-400">
          Contact
        </h1>
        <p className="text-gray-500 dark:text-gray-300 text-xl mt-10 md:text-2xl max-w-2xl text-center mx-auto">
          Feel free to reach out! 📬
        </p>
        <div className="space-y-4 mt-8">
          <p className="text-blue-600 dark:text-blue-400 text-lg hover:animate-bounce">
            <a href="mailto:kashyapshashank463@gmail.com"><strong className="font-bold text-2xl">📧</strong>kashyapshashank463@gmail.com</a>
          </p>
          <p className="text-gray-700 dark:text-gray-300">📞 +91 9939105816</p>
          <p className="text-gray-700 dark:text-gray-300">📍 Greater Noida</p>
          <p className="text-blue-600 dark:text-blue-400 text-lg hover:animate-bounce">
            <a href="https://github.com/Shashank463">🔗Github</a>
          </p>
          <p className="text-blue-600 dark:text-blue-400 text-lg hover:animate-bounce">
            <a href="https://www.linkedin.com/in/shashank-kashyap-4504462b8">🔗LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
